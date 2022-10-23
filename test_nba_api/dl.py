#!/usr/bin/env python
import argparse
from functools import reduce
from time import time
from pathlib import Path

# there's a "leageugamelog" endpoint, would that be more efficient?
from nba_api.stats.endpoints import LeagueDashPlayerStats, LeagueGameLog
import pandas as pd

FIRST_SEASON = 2010
CURRENT_SEASON = 2023


def fresh(fname: Path) -> bool:
    """
    Return whether a file is stale and should be re-downloaded

    It should be re-downloaded if the file given by fname was modified more than
    an hour ago or does not exist
    """
    return fname.is_file() and (time() - fname.stat().st_mtime) / 60 * 60 < 1


def download_gamelogs():
    seasons = []
    for year in range(FIRST_SEASON, CURRENT_SEASON + 1):
        file = Path(f"gamelog_{year}.parquet")
        season = f"{year-1}-{str(year)[2:]}"
        most_recent = ""
        old_games = None

        # we don't need to redownload old years, (presumably?) nothing has changed
        if year != CURRENT_SEASON and file.is_file():
            seasons.append(pd.read_parquet(file))
            continue

        # If the current year's file is less than an hour old, don't re-download
        elif year == CURRENT_SEASON and fresh(file):
            seasons.append(pd.read_parquet(file))
            continue
        # If the current year's file isn't fresh, load it so we can download
        # only the more recent games
        elif file.is_file():
            old_games = pd.read_parquet(file)
            most_recent = (
                pd.to_datetime(old_games["GAME_DATE"])
                .max()
                .to_pydatetime()
                .strftime("%Y-%m-%d")
            )

        print(f"Downloading {year} game logs")

        games = LeagueGameLog(
            date_from_nullable=most_recent, season=season
        ).get_data_frames()[0]

        # if we had games from this season, we want to append the newly
        # downloaded ones. Otherwise, we should have all the games for this
        # season in the games dataframe
        if old_games is not None:
            games = pd.concat([games, old_games]).drop_duplicates()

        assert isinstance(games, pd.DataFrame)

        # The index by default
        games.reset_index(inplace=True)
        games.rename(columns={"index": "game_n"}, inplace=True)

        # Should I use a fancier possessions estimate?
        games["possessions"] = (
            games["FGA"] - games["OREB"] + games["TOV"] + 0.4 * games["FTA"]
        )

        games["o_eff"] = games["PTS"] / games["possessions"]
        games["d_eff"] = games.apply(
            lambda row: games[
                (games["GAME_ID"] == row["GAME_ID"])
                & (games["TEAM_ID"] != row["TEAM_ID"])
            ].iloc[0]["o_eff"],
            axis=1,
        )
        games["season"] = year
        seasons.append(games)
        games.to_parquet(file)

    allseasons = pd.concat(seasons)
    allseasons.reset_index(drop=True, inplace=True)
    allseasons.to_parquet("gamelogs.parquet")


columns_to_suffix = [
    "MIN",
    "FGM",
    "FGA",
    "FG3M",
    "FG3A",
    "FTM",
    "FTA",
    "OREB",
    "DREB",
    "REB",
    "AST",
    "TOV",
    "STL",
    "BLK",
    "BLKA",
    "PF",
    "PFD",
    "PTS",
    "PLUS_MINUS",
    "NBA_FANTASY_PTS",
]


def download_player_stats():
    playerstats = []
    for year in range(FIRST_SEASON, CURRENT_SEASON + 1):
        file = f"players_{year}.parquet"
        season = f"{year-1}-{str(year)[2:]}"

        # we don't need to redownload old years, (presumably?) nothing has changed
        if year != CURRENT_SEASON and Path(file).is_file():
            playerstats.append(pd.read_parquet(file))
            continue

        # If the current year's file is less than an hour old, don't re-download
        elif year == CURRENT_SEASON and fresh(Path(file)):
            playerstats.append(pd.read_parquet(file))
            continue

        print(f"Downloading {season} player stats")

        # https://www.nba.com/stats/players/traditional and inspect to see the options
        #
        # This works, but we have a problem: the "totals" and "pergame"
        # settings both return "pts", so I have to figure out a way to
        # distinguish pts_per_game from total_pts, but also not end up with a
        # million duplicated columns; for example the "name" column of each
        # table should not get duplicated because I added a prefix to every
        # column. TODO
        stats = []
        for per in ["Totals", "PerGame", "Per36", "Per100Possessions"]:
            df = LeagueDashPlayerStats(
                season=season,
                measure_type_detailed_defense="Base",
                per_mode_detailed=per,
            ).get_data_frames()[0]
            df["year"] = year

            # we want the PTS column (for exmample) to contain the total # of
            # points, not PTS_Totals, so only suffix the columns of the other
            # `per` values
            if per != "Totals":
                df.rename(
                    columns={col: f"{col}_{per}" for col in columns_to_suffix},
                    inplace=True,
                )

            stats.append(df)

        # the advanced stats don't have any differences between totals,
        # pergame, &c, so only download them once
        stats.append(
            LeagueDashPlayerStats(
                season=season,
                measure_type_detailed_defense="Advanced",
                per_mode_detailed="Totals",
            ).get_data_frames()[0]
        )

        # join all the resulting dataframes, adding a _DROP suffix for repeated
        # columns, which we can then filter out
        allstats = reduce(lambda x, y: x.join(y, rsuffix="_DROP"), stats).filter(
            regex="^(?!.*_DROP$)"
        )

        playerstats.append(allstats)
        allstats.to_parquet(file)

    allstats = pd.concat(playerstats)
    allstats.reset_index(drop=True, inplace=True)
    allstats.to_parquet("playerstats.parquet")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="download stats from stats.nba.com")
    parser.add_argument("-g", "--gamelogs", const=True, action="store_const")
    parser.add_argument("-s", "--player-stats", const=True, action="store_const")
    args = parser.parse_args()

    # if no arguments passed, download both
    runall = not args.gamelogs and not args.player_stats

    if args.gamelogs or runall:
        download_gamelogs()
    if args.player_stats or runall:
        download_player_stats()
