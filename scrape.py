#!/usr/bin/env python
import argparse
import csv
import json
from os import mkdir, stat
from os.path import isdir, isfile
import re
from time import time

from bs4 import BeautifulSoup
import requests

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
# * handle playoff data
#   * raptor breaks down data into regular season and playoff - currently we're
#     ignoring playoff. I assume bbref has playoff data? we should scrape that
#     too

DEBUG = True
MIN_YEAR = 2010
MAX_YEAR = 2022


def log(msg):
    if DEBUG:
        print(msg)


def tryint(mayben):
    try:
        return int(mayben)
    except ValueError:
        try:
            return float(mayben)
        except ValueError:
            return mayben


def one_hour_old(fname):
    """return True if the file given by fname was modified more than an hour ago and
    false otherwise"""
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
        mkdir(datadir)

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

    # bbref keeps the table in a comment, and then uses javascript to
    # actually put it on a page - pull out the table and parse it
    team_stats_container = soup.find("div", id="all_team-stats-base")
    team_stats = BeautifulSoup(
        re.findall(r"<!--(.*?)-->", str(team_stats_container), re.M | re.S)[0],
        "html.parser",
    )
    for team in team_stats.find_all("tr")[1:31]:
        teamstats = {
            t["data-stat"].replace("-", "_"): tryint(
                "".join(str(c) for c in t.children)
            )
            for t in team.find_all("td")
        }
        name = BeautifulSoup(teamstats["team_name"], "html.parser").text
        shortname = re.search("teams/(.*?)/", teamstats["team_name"]).group(1)

        teamstats["name"] = name
        teamstats["shortname"] = shortname

        teamdata[shortname] = teamstats

    # bbref keeps the table in a comment, and then uses javascript to
    # actually put it on a page - pull out the table and parse it
    misc_container = soup.find("div", id="all_misc_stats")
    misc_stats = BeautifulSoup(
        re.findall(r"<!--(.*?)-->", str(misc_container), re.M | re.S)[0], "html.parser",
    )
    for team in misc_stats.find_all("tr")[2:32]:
        miscstats = {
            t["data-stat"].replace("-", "_"): tryint(
                "".join(str(c) for c in t.children)
            )
            for t in team.find_all("td")
        }
        name = BeautifulSoup(miscstats["team_name"], "html.parser").text
        shortname = re.search("teams/(.*?)/", miscstats["team_name"]).group(1)

        teamdata[shortname] = {**teamdata[shortname], **miscstats}

    output = f"data/{year}/team_stats.json"
    json.dump(teamdata, open(output, "w"))


def parse_bbref_row(players, player):
    ignore = ["bpm-dum", "ws-dum"]
    stats = {
        t["data-stat"].replace("-", "_"): tryint("".join(str(c) for c in t.children))
        for t in player.find_all("td")
        if t["data-stat"] and t["data-stat"] not in ignore
    }

    stats["name"] = BeautifulSoup(stats["player"], "html.parser").text
    stats["team"] = BeautifulSoup(stats["team_id"], "html.parser").text
    stats["bb_ref_id"] = player.find("td").attrs["data-append-csv"]
    key = (stats["bb_ref_id"], stats["team"])
    if key not in players:
        players[key] = stats
    else:
        players[key] = {**players[key], **stats}


def parse_player_stats(year):
    datadir = f"data/{year}"

    players = {}

    player_row = re.compile(r".*\b(full_table|partial_table)\b.*")

    for page in ["totals", "advanced", "per_minute", "per_poss", "per_game"]:
        soup = BeautifulSoup(open(f"{datadir}/{page}.html"), "html.parser")
        for player in soup.find_all("tr", {"class": player_row}):
            parse_bbref_row(players, player)

    return players


def download_data(force_download=False, year_only=None):
    if not year_only:
        for year in range(MIN_YEAR, MAX_YEAR):
            datadir = f"data/{year}"

            if not isdir(datadir) or force_download:
                get_bbref_data(year, datadir)
            elif year == 2021 and one_hour_old(f"{datadir}/totals.html"):
                get_bbref_data(year, datadir)
            else:
                continue
    else:
        datadir = f"data/{year_only}"
        if force_download or one_hour_old(f"{datadir}/totals.html"):
            get_bbref_data(year_only, datadir)

    # 538 Raptor data
    # https://github.com/fivethirtyeight/data/tree/master/nba-raptor
    if not isdir("data/raptor") or force_download:
        log("downloading raptor")
        try:
            mkdir("data/raptor")
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
        or one_hour_old("data/raptor/latest_RAPTOR.csv")
        or force_download
    ):
        log("downloading latest raptor")
        save(
            "https://projects.fivethirtyeight.com/nba-model/2021/latest_RAPTOR_by_team.csv",
            "data/raptor/latest_RAPTOR.csv",
        )


# 538 has some different team names than bbref
def fix_team(team, year):
    # from 2015 - today, 538 labels Hornets players as CHA while bbref labels
    # them as CHO
    if team == "CHA" and year > 2014:
        return "CHO"
    return team


def parse_raptor_stats(data):
    for raptorfile in ("latest_RAPTOR", "modern_RAPTOR", "historical_RAPTOR"):
        for row in csv.DictReader(open(f"data/raptor/{raptorfile}.csv")):
            if row["season_type"] != "RS":
                # we're currently not handling playoff data, so skip
                continue
            pid = row["player_id"]
            year = int(row["season"])
            if year not in data:
                continue
            team = fix_team(row["team"], year)
            for key in set(row.keys()) - set(
                ["player_name", "player_id", "team", "season", "season_type"]
            ):
                if (pid, team) not in data[year]:
                    # doesn't work because there's a tuple in the data
                    # json.dump(data, open("/tmp/a.json", "w"))
                    raise Exception(f"Couldn't find ({pid}, {team}) in {year}")
                if key in data[year][(pid, team)]:
                    # prefer bbref data, so skip if we find something that's
                    # already present. There are discrepancies in the raptor
                    # and bbref data, though I think there shouldn't be, but
                    # not gonna deal with it. Ex: raptor has Marcus Morris with
                    # 1447 minutes in 2017-18, and bbref 1442. :shrug:
                    continue
                data[year][(pid, team)][key] = tryint(row[key])


def process_data(year_only=None, force_reprocess=False):
    # data[year:int] => {(bb_ref_id, team): {stats}}
    data = {}
    if year_only:
        log(f"processing {args.year_only} data")
        data[year_only] = parse_player_stats(year_only)
        parse_team_stats(year_only)
        output = f"data/{year_only}/stats.json"
    else:
        for year in range(MIN_YEAR, MAX_YEAR):
            if not one_hour_old(f"data/{year}/totals.html") or force_reprocess:
                log(f"processing {year} data")

                data[year] = parse_player_stats(year)
                parse_team_stats(year)

    log("processing raptor")
    parse_raptor_stats(data)

    for year in data:
        output = f"data/{year}/stats.json"
        json.dump(list(data[year].values()), open(output, "w"))


def main(args):
    if not args.no_download:
        download_data(args.force_download, args.year_only)
    process_data(args.year_only, args.force_reprocess)


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

    main(args)
