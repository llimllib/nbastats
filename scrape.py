import json

from bs4 import BeautifulSoup


def tryint(mayben):
    try:
        return int(mayben)
    except ValueError:
        try:
            return float(mayben)
        except ValueError:
            return mayben


# TODO:
# * actually get https://www.basketball-reference.com/leagues/NBA_2021_totals.html
# * slashes to underscores (bpm-dum and ws-dum (what are they?))
soup = BeautifulSoup(open("totals.html"), "html.parser")

players = {}

for player in soup.find_all("tr", {"class": "full_table"}):
    stats = {
        t["data-stat"]: tryint("".join(str(c) for c in t.children))
        for t in player.find_all("td")
    }
    stats["name"] = BeautifulSoup(stats["player"], "html.parser").text
    stats["team"] = BeautifulSoup(stats["team_id"], "html.parser").text
    players[stats["name"]] = stats

# https://www.basketball-reference.com/leagues/NBA_2021_advanced.html
soup = BeautifulSoup(open("advanced.html"), "html.parser")
for player in soup.find_all("tr", {"class": "full_table"}):
    advstats = {
        t["data-stat"]: tryint("".join(str(c) for c in t.children))
        for t in player.find_all("td")
    }
    name = BeautifulSoup(advstats["player"], "html.parser").text
    players[name] = {**players[name], **advstats}

json.dump(players, open("stats.json", "w"))
