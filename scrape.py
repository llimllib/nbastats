#!/usr/bin/env python
import json
from os import mkdir, stat
from os.path import isdir
from time import time

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
        raise Exception(res.text)
    with open(fname, "w") as f:
        f.write(res.text)


def getdata(year, datadir):
    if not isdir(datadir):
        mkdir(datadir)

    log(f"getting {year} data in {datadir}")

    totals = f"data/{year}/totals.html"
    advanced = f"data/{year}/advanced.html"

    save(f"https://www.basketball-reference.com/leagues/NBA_{year}_totals.html", totals)
    save(
        f"https://www.basketball-reference.com/leagues/NBA_{year}_advanced.html",
        advanced,
    )


for year in range(2010, 2022):
    datadir = f"data/{year}"
    totals = f"data/{year}/totals.html"
    advanced = f"data/{year}/advanced.html"
    output = f"data/{year}/stats.json"

    if not isdir(datadir):
        getdata(year, datadir)
    elif year == 2021 and one_hour_old(totals):
        getdata(year, datadir)

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

    json.dump(list(players.values()), open(output, "w"))
