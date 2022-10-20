#!/usr/bin/env python
from functools import reduce
from time import time, sleep
from pathlib import Path

# there's a "leageugamelog" endpoint, would that be more efficient?
from nba_api.stats.endpoints import LeagueDashPlayerStats, TeamGameLog
from nba_api.stats.static import teams
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
        file = f"gamelog_{year}.parquet"

        # we don't need to redownload old years, (presumably?) nothing has changed
        if year != CURRENT_SEASON and Path(file).is_file():
            seasons.append(pd.read_parquet(file))
            continue

        # If the current year's file is less than an hour old, don't re-download
        elif year == CURRENT_SEASON and fresh(Path(file)):
            seasons.append(pd.read_parquet(file))
            continue

        print(f"Downloading {year} game logs")

        gamelogs = []
        for tid in [t[0] for t in teams.teams]:
            gamelogs.append(
                TeamGameLog(
                    tid, season=f"{year-1}-{str(year)[2:]}", timeout=200
                ).get_data_frames()[0]
            )
            # seems like we time out if we try to grab all the game logs without
            # pausing
            sleep(0.6)

        games = pd.concat(gamelogs)

        # The index by default
        games.reset_index(inplace=True)
        games.rename(columns={"index": "game_n"})

        # Should I use a fancier possessions estimate?
        games["possessions"] = (
            games["FGA"] - games["OREB"] + games["TOV"] + 0.4 * games["FTA"]
        )

        games["o_eff"] = games["PTS"] / games["possessions"]
        games["d_eff"] = games.apply(
            lambda row: games[
                (games["Game_ID"] == row["Game_ID"])
                & (games["Team_ID"] != row["Team_ID"])
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
                df.rename(columns={col: f"{col}_{per}" for col in columns_to_suffix})

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
    # download_gamelogs()
    download_player_stats()
