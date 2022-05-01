import csv
import json
from typing import Dict, Any

import pyarrow.parquet as pq


def convert_numeric(row: Dict[str, Any]) -> Dict[str, Any]:
    for key, val in row.items():
        try:
            row[key] = int(val)
        except:
            try:
                row[key] = float(val)
            except:
                pass
            pass
    return row


def clean(row: Dict[str, Any]) -> Dict[str, Any]:
    newrow = {}
    for key, val in row.items():
        if not key.strip():
            continue
        if isinstance(val, str) and not val.strip():
            val = None

        newrow[key.strip()] = val
    return newrow


# I copied and pasted the table from
# https://www.basketball-reference.com/playoffs/NBA_2022_advanced.html
#
# TODO: download and parse the table automatically
po = None
with open("advstats.tsv") as tsvf:
    reader = csv.DictReader(tsvf, delimiter="\t")
    po = [clean(convert_numeric(row)) for row in reader]


# rs = regular season
rs = pq.read_table("../data/stats.parquet").to_pylist()
rs = [r for r in rs if r["year"] == "2022"]


def find(player):
    rows = [r for r in rs if r["name"] == player]
    if len(rows) == 0:
        raise ValueError(player)
    if len(rows) == 1:
        return rows[0]
    else:
        # if there's a total row, return that. If not, raise an error
        totals = [r for r in rows if r["team"] == "TOT"]
        if len(totals) == 1:
            return totals[0]
        raise ValueError(player + str(totals) + str(rows))


playoff_players = []
for playoff in po:
    try:
        player = find(playoff["Player"])
        for key, val in playoff.items():
            player[f"playoff_{key}"] = val
        if player["team"] == "TOT":
            player["team"] = playoff["Tm"]
        playoff_players.append(player)
    except ValueError:
        # Luca Vildoza appears not to be in the regular season data set, I
        # think we can live without him
        print(f"unable to find {playoff['Player']}")

subdata = [
    {
        "name": p["name"],
        "team": p["team"],
        "usg_pct": p["usg_pct"],
        "ts_pct": p["ts_pct"] * 100 if p["ts_pct"] else None,
        "playoff_mp": p["playoff_MP"],
        "playoff_usg_pct": p["playoff_USG%"],
        "playoff_ts_pct": p["playoff_TS%"] * 100 if p["playoff_TS%"] else None,
        "playoff_mpg": round(p["playoff_MP"] / p["playoff_G"], 2),
    }
    for p in playoff_players
]
json.dump(subdata, open("data.json", "w"))
