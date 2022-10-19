from time import time, sleep
from pathlib import Path

from nba_api.stats.endpoints import teamgamelog
import pandas as pd
from nba_api.stats.static import teams


def fresh(fname: Path) -> bool:
    """
    Return whether a file is stale and should be re-downloaded

    It should be re-downloaded if the file given by fname was modified more than
    an hour ago or does not exist
    """
    return fname.is_file() and (time() - fname.stat().st_mtime) / 60 * 60 < 1


for year in range(2010, 2023):
    # we don't need to redownload old years, (presumably?) nothing has changed
    if year != 2022:
        if Path(f"{year}_gamelog.parquet").is_file():
            continue
    else:
        if fresh(Path(f"{year}_gamelog.parquet")):
            continue

    print(f"Downloading {year} game logs")

    gamelogs = []
    for tid in [t[0] for t in teams.teams]:
        gamelogs.append(
            teamgamelog.TeamGameLog(
                tid, season=f"{year}-{str(year+1)[2:]}", timeout=200
            ).get_data_frames()[0]
        )
        sleep(0.6)

    games = pd.concat(gamelogs)

    # The index by default
    games.reset_index().rename(columns={"index": "game_n"})
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
    games.to_parquet(f"gamelog.{year}.parquet")
