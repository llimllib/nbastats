#!/usr/bin/env python
import argparse
from functools import reduce
from time import time
import os
from pathlib import Path
from typing import List

from nba_api.stats.endpoints import LeagueDashPlayerStats, TeamGameLogs
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


def convert_i64_to_i32(df: pd.DataFrame) -> None:
    """
    downcast any int64 columns into int32

    the int64s are painful to deal with in javascript where they get
    represented as a bigint, which observable plot can't handle: see
    https://github.com/observablehq/plot/discussions/1099
    """
    for col in df.columns:
        column = df[col]
        assert column is not None  # pyright can be dumb sometimes. Make it believe
        if column.dtype == "int64":
            df[col] = column.astype("int32")


def join(frames: List[pd.DataFrame]) -> pd.DataFrame:
    """
    join the resulting dataframes, adding a _DROP suffix for repeated
    columns, which we can then filter out
    """
    return reduce(lambda x, y: x.join(y, rsuffix="_DROP"), frames).filter(
        regex="^(?!.*_DROP$)"
    )


def tryrm(path: str | Path):
    try:
        os.unlink(path)
    except FileNotFoundError:
        pass


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

        # you can get the game logs with ortg and drtg as "advanced"
        # MeasureType at https://www.nba.com/stats/teams/boxscores-advanced
        logs = []
        for measure in [None, "Advanced"]:
            logs.append(
                TeamGameLogs(
                    date_from_nullable=most_recent,
                    season_nullable=season,
                    measure_type_player_game_logs_nullable=measure,
                ).get_data_frames()[0]
            )

        games = join(logs)

        # if we had games from this season, we want to append the newly
        # downloaded ones. Otherwise, we should have all the games for this
        # season in the games dataframe
        if old_games is not None:
            # drop all our created columns; we'll recreate them in a second.
            old_games.drop(
                columns=["game_n"],
                inplace=True,
            )
            games = pd.concat([old_games, games]).drop_duplicates()

        assert isinstance(games, pd.DataFrame)

        games.reset_index(inplace=True)
        games.rename(columns={"index": "game_n"}, inplace=True)
        convert_i64_to_i32(games)

        seasons.append(games)
        games.to_parquet(file)

    allseasons = pd.concat(seasons)
    allseasons.reset_index(drop=True, inplace=True)

    # delete the old file and overwrite with the new. pandas parquet writing
    # does not have any option to overwrite.
    tryrm("gamelogs.parquet")
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

        allstats = join(stats)
        convert_i64_to_i32(allstats)

        playerstats.append(allstats)
        allstats.to_parquet(file)

    allstats = pd.concat(playerstats)
    allstats.reset_index(drop=True, inplace=True)

    # delete the old playerstats.parquet and overwrite the new.
    tryrm("playerstats.parquet")
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
