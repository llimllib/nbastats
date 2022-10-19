#!/usr/bin/env python
from time import time, sleep
from pathlib import Path

from nba_api.stats.endpoints import teamgamelog
import pandas as pd
from nba_api.stats.static import teams

CURRENT_SEASON = 2022


def fresh(fname: Path) -> bool:
    """
    Return whether a file is stale and should be re-downloaded

    It should be re-downloaded if the file given by fname was modified more than
    an hour ago or does not exist
    """
    return fname.is_file() and (time() - fname.stat().st_mtime) / 60 * 60 < 1


seasons = []
for year in range(2009, 2023):
    file = f"gamelog_{year+1}.parquet"

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
            teamgamelog.TeamGameLog(
                tid, season=f"{year}-{str(year+1)[2:]}", timeout=200
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
            (games["Game_ID"] == row["Game_ID"]) & (games["Team_ID"] != row["Team_ID"])
        ].iloc[0]["o_eff"],
        axis=1,
    )
    games["season"] = year + 1
    seasons.append(games)
    games.to_parquet(file)

allseasons = pd.concat(seasons)
allseasons.reset_index(drop=True, inplace=True)
allseasons.to_parquet("gamelogs.parquet")
