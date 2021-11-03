#!/usr/bin/env python
import argparse
import csv
from datetime import datetime
import json
from os import makedirs, stat, mkdir
from os.path import isdir, isfile
import re
from time import time
from typing import Dict, Tuple, Any, Sequence
import ipdb

from bs4 import BeautifulSoup, element
import requests
import pandas as pd
import pyarrow as pa
import pyarrow.parquet as pq


# TODO
# * download team logos
#   * can base this off colors.py which has links to (most) teams' wiki pages
#   * will be useful for creating team ortg/drtg graphs
# * process per36 and per100
#    * caution: they have overlapping columns! so we can't just do the dumb
#      shit we've done so far
# * get all-star data
# * get rookie data
# * explore saving data as a sqlite database instead and importing into javscript
#   * I did this, but the queries for quantiles were so so painful. Possibly
#   worth re-exploring?
#   * Sadly, custom aggregate functions are not possible:
#     https://github.com/sql-js/sql.js/issues/204
# * handle playoff data
#   * raptor breaks down data into regular season and playoff - currently we're
#     ignoring playoff. I assume bbref has playoff data? we should scrape that
#     too
# * this is just way too slow, needs to be dsped up
# * ingest player salary data
#   * https://www.basketball-reference.com/contracts/players.html

DEBUG = True
MIN_YEAR = 2010
MAX_YEAR = 2023

# a player key is a 3-tuple of (bb_ref_id, team, year)
PlayerKey = Tuple[str, str, str]

# a player's stats is a mapping of strings to... things
PlayerStats = Dict[str, Any]

# a StatDict is a mapping from player keys to player stats
StatDict = Dict[PlayerKey, PlayerStats]

def log(msg):
    if DEBUG:
        print(msg)


def tryint(mayben):
    try:
        return int(mayben)
    except ValueError:
        try:
            return round(float(mayben), 4)
        except ValueError:
            return mayben


# TODO: stale still isn't the right word
def stale(fname):
    """
    Return whether a file is stale and should be re-downloaded

    It should be re-downloaded if the file given by fname was modified more than
    an hour ago or does not exist
    """
    if not isfile(fname):
        return True
    return (time() - stat(fname).st_mtime) / (60 * 60) > 1


def save(url, fname):
    """save the contents of url to fname"""
    res = requests.get(url)
    if res.status_code != 200:
        raise Exception(res.text, url, fname)
    with open(fname, "w") as f:
        f.write(res.text)


def get_bbref_data(year, datadir):
    if not isdir(datadir):
        makedirs(datadir)

    log(f"getting {year} data in {datadir}")

    dir_ = f"data/{year}"

    pages = [
        "totals",
        "per_game",
        "per_minute",
        "per_poss",
        "play-by-play",
        "advanced",
        "shooting",
        "adj_shooting",
        "rookies",
    ]

    for page in pages:
        save(
            f"https://www.basketball-reference.com/leagues/NBA_{year}_{page}.html",
            f"{dir_}/{page}.html",
        )
    save(
        f"https://www.basketball-reference.com/leagues/NBA_{year}.html",
        f"{dir_}/teams.html",
    )


def parse_team_stats(year):
    datadir = f"data/{year}"

    teamdata = {}

    soup = BeautifulSoup(open(f"{datadir}/teams.html"), "html.parser")

    team_stats = soup.find("div", id="all_totals_team-opponent")
    if isinstance(team_stats, element.Tag):
        for team in team_stats.find_all("tr")[1:31]:
            teamstats = {
                t["data-stat"].replace("-", "_"): tryint(
                    "".join(str(c) for c in t.children)
                )
                for t in team.find_all("td")
            }
            name = BeautifulSoup(teamstats["team"], "html.parser").text.rstrip("*")
            shortname = re.search("teams/(.*?)/", teamstats["team"]).group(1)

            teamstats["name"] = name
            teamstats["shortname"] = shortname

            teamdata[shortname] = teamstats

    misc_stats = soup.find("div", id="all_advanced_team")
    if isinstance(misc_stats, element.Tag):
        for team in misc_stats.find_all("tr")[2:32]:
            miscstats = {
                t["data-stat"].replace("-", "_"): tryint(
                    "".join(str(c) for c in t.children)
                )
                for t in team.find_all("td")
            }
            name = BeautifulSoup(miscstats["team"], "html.parser").text.rstrip("*")
            shortname = re.search("teams/(.*?)/", miscstats["team"]).group(1)

            teamdata[shortname] = {**teamdata[shortname], **miscstats}

    output = f"data/{year}/team_stats.json"

    # python's isoformat is busted and convincing it that the time is UTC
    # is so painful it's easier just to append a Z
    json.dump(
        {"updated": datetime.utcnow().isoformat() + "Z", "teams": teamdata},
        open(output, "w"),
    )


def parse_bbref_row(players: StatDict, player: element.Tag, year: str):
    ignore = ["bpm-dum", "ws-dum", "DUMMY"]
    stats = {
        t["data-stat"].replace("-", "_"): tryint("".join(str(c) for c in t.children))
        for t in player.find_all("td")
        if t["data-stat"] and t["data-stat"] not in ignore
    }

    assert isinstance(stats["player"], str)
    assert isinstance(stats["team_id"], str)
    stats["name"] = BeautifulSoup(stats["player"], "html.parser").text
    stats["team"] = BeautifulSoup(stats["team_id"], "html.parser").text

    player_id = player.find("td")
    assert isinstance(player_id, element.Tag)
    stats["bb_ref_id"] = player_id.attrs["data-append-csv"]
    stats["year"] = year

    key = (stats["bb_ref_id"], stats["team"], year)
    if key not in players:
        players[key] = stats
    else:
        players[key] = {**players[key], **stats}


def parse_player_stats(year: str) -> StatDict:
    datadir = f"data/{year}"

    players: StatDict = {}

    player_row = re.compile(r".*\b(full_table|partial_table)\b.*")

    for page in ["totals", "advanced", "per_minute", "per_poss", "per_game"]:
        soup = BeautifulSoup(open(f"{datadir}/{page}.html"), "html.parser")
        for player in soup.find_all("tr", {"class": player_row}):
            parse_bbref_row(players, player, year)

    return players


def download_data(years: Sequence[str], force_download: bool = False):
    for year in years:
        datadir = f"data/{year}"
        if not isdir(datadir):
            mkdir(datadir)

        if force_download:
            get_bbref_data(year, datadir)
        elif year == "2022" and stale(f"{datadir}/totals.html"):
            get_bbref_data(year, datadir)
        else:
            continue

    # 538 Raptor data
    # https://github.com/fivethirtyeight/data/tree/master/nba-raptor
    if not isdir("data/raptor") or force_download:
        log("downloading raptor")
        try:
            makedirs("data/raptor")
        except FileExistsError:
            pass

        save(
            "https://raw.githubusercontent.com/fivethirtyeight/data/master/nba-raptor/historical_RAPTOR_by_team.csv",
            "data/raptor/historical_RAPTOR.csv",
        )

        save(
            "https://raw.githubusercontent.com/fivethirtyeight/data/master/nba-raptor/modern_RAPTOR_by_team.csv",
            "data/raptor/modern_RAPTOR.csv",
        )
    if (
        not isfile("data/raptor/latest_RAPTOR.csv")
        or stale("data/raptor/latest_RAPTOR.csv")
        or force_download
    ):
        log("downloading latest raptor")
        save(
            "https://projects.fivethirtyeight.com/nba-model/2022/latest_RAPTOR_by_team.csv",
            "data/raptor/latest_RAPTOR.csv",
        )


# 538 has some different team names than bbref
def fix_team(team: str, year: str) -> str:
    # from 2015 - today, 538 labels Hornets players as CHA while bbref labels
    # them as CHO
    if team == "CHA" and int(year) > 2014:
        return "CHO"
    return team


def parse_raptor_stats(data: StatDict, years: Sequence[str]):
    for raptorfile in ("latest_RAPTOR", "modern_RAPTOR", "historical_RAPTOR"):
        for row in csv.DictReader(open(f"data/raptor/{raptorfile}.csv")):
            if row["season_type"] != "RS":
                # we're currently not handling playoff data, so skip
                continue
            pid = row["player_id"]
            year = row["season"]
            if year not in years:
                continue

            team = fix_team(row["team"], year)
            for key in set(row.keys()) - set(
                ["player_name", "player_id", "team", "season", "season_type"]
            ):
                if (pid, team, year) not in data:
                    # doesn't work because there's a tuple in the data
                    # json.dump(data, open("/tmp/a.json", "w"))
                    raise Exception(f"Couldn't find ({pid}, {team}, {year}) in data")
                if key in data[(pid, team, year)]:
                    # prefer bbref data, so skip if we find something that's
                    # already present. There are discrepancies in the raptor
                    # and bbref data, though I think there shouldn't be, but
                    # not gonna deal with it. Ex: raptor has Marcus Morris with
                    # 1447 minutes in 2017-18, and bbref 1442. :shrug:
                    continue
                data[(pid, team, year)][key] = tryint(row[key])


def process_data(years: Sequence[str]):
    """Process the requested years' data and write it out as a parquet file"""
    data: StatDict = {}

    for year in years:
        log(f"processing {year} data")
        data = {**parse_player_stats(year), **data}
        parse_team_stats(year)

    log("processing raptor")
    parse_raptor_stats(data, years)

    output = "data/stats.parquet"
    df = pd.DataFrame(data.values())

    # if any one of the first 20 rows in a column is numeric, assume the whole
    # column ought to be numeric
    #
    # I'd like to avoid specifying the type for every column manually, because
    # that makes breaking changes much more likely, but I might have to do that
    # eventually
    for col in df.columns:
        for elt in df.head(20)[col]:
            if isinstance(elt, (float, int)):
                df[col].replace("", 0.0, inplace=True)
                break

    table = pa.Table.from_pandas(df)
    pq.write_table(table, output)


def main(args):
    if args.year_only:
        years = [args.year_only]
    else:
        years = [str(year) for year in range(MIN_YEAR, MAX_YEAR)]

    if not args.no_download:
        download_data(years, args.force_download)
    process_data(years)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="download basketball statistics")
    parser.add_argument(
        "--no-download",
        "-n",
        dest="no_download",
        action="store_true",
        required=False,
        help="do not download any data",
    )
    parser.add_argument(
        "--force-download",
        "-f",
        dest="force_download",
        action="store_true",
        required=False,
        help="download all data regardless of the cache",
    )
    parser.add_argument(
        "--year-only",
        "-y",
        dest="year_only",
        type=int,
        action="store",
        required=False,
        help="only process a particular year",
    )
    parser.add_argument(
        "--force-reprocess",
        dest="force_reprocess",
        action="store_true",
        required=False,
        help="Force reprocessing of all years",
    )
    args = parser.parse_args()

    with ipdb.launch_ipdb_on_exception():
        main(args)
