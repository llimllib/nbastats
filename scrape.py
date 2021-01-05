import json
import requests

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
# * save all downloaded data
res = requests.get("https://www.basketball-reference.com/leagues/NBA_2021_totals.html")
soup = BeautifulSoup(res.text, "html.parser")

players = {}

for player in soup.find_all("tr", {"class": "full_table"}):
    stats = {
        t["data-stat"].replace("-", "_"): tryint("".join(str(c) for c in t.children))
        for t in player.find_all("td")
    }
    stats["name"] = BeautifulSoup(stats["player"], "html.parser").text
    stats["team"] = BeautifulSoup(stats["team_id"], "html.parser").text
    players[stats["name"]] = stats

# https://www.basketball-reference.com/leagues/NBA_2021_advanced.html
res = requests.get(
    "https://www.basketball-reference.com/leagues/NBA_2021_advanced.html"
)
soup = BeautifulSoup(res.text, "html.parser")
for player in soup.find_all("tr", {"class": "full_table"}):
    advstats = {
        t["data-stat"].replace("-", "_"): tryint("".join(str(c) for c in t.children))
        for t in player.find_all("td")
    }
    name = BeautifulSoup(advstats["player"], "html.parser").text
    players[name] = {**players[name], **advstats}

s = json.dumps(list(players.values()))
fout = open("stats.js", "w")
fout.write(f"const stats={s}")
fout.close()
