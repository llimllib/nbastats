#!/usr/bin/env python
import json
from os import mkdir, stat
from os.path import isdir
from time import time
import re

from bs4 import BeautifulSoup
import requests

DEBUG = True


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


def getdata(year, datadir):
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


# TODO:
# * process per36 and per100
#    * caution: they have overlapping columns! so we can't just do the dumb
#      shit we've done so far
# * download team logos
#   * can base this off colors.py which has links to (most) teams' wiki pages
#   * will be useful for creating team ortg/drtg graphs
def main():
    for year in range(2010, 2022):
        datadir = f"data/{year}"
        totals = f"data/{year}/totals.html"
        advanced = f"data/{year}/advanced.html"
        teams = f"data/{year}/teams.html"
        output = f"data/{year}/stats.json"
        team_output = f"data/{year}/team_stats.json"

        # TODO: add flag to force re-processing all files even if new data doesn't get downloaded
        if not isdir(datadir):
            getdata(year, datadir)
        elif year == 2021 and one_hour_old(totals):
            getdata(year, datadir)
        else:
            continue

        log(f"procesing {year} data")

        soup = BeautifulSoup(open(totals), "html.parser")

        players = {}

        for player in soup.find_all("tr", {"class": "full_table"}):
            stats = {
                t["data-stat"].replace("-", "_"): tryint(
                    "".join(str(c) for c in t.children)
                )
                for t in player.find_all("td")
            }
            stats["name"] = BeautifulSoup(stats["player"], "html.parser").text
            stats["team"] = BeautifulSoup(stats["team_id"], "html.parser").text
            players[stats["name"]] = stats

        soup = BeautifulSoup(open(advanced), "html.parser")
        for player in soup.find_all("tr", {"class": "full_table"}):
            advstats = {
                t["data-stat"].replace("-", "_"): tryint(
                    "".join(str(c) for c in t.children)
                )
                for t in player.find_all("td")
            }
            name = BeautifulSoup(advstats["player"], "html.parser").text
            players[name] = {**players[name], **advstats}

        # write out player stats
        json.dump(list(players.values()), open(output, "w"))

        # parse team stats
        teamdata = {}

        soup = BeautifulSoup(open(teams), "html.parser")

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
            re.findall(r"<!--(.*?)-->", str(misc_container), re.M | re.S)[0],
            "html.parser",
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

        json.dump(teamdata, open(team_output, "w"))


if __name__ == "__main__":
    main()
