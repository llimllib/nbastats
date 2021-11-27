import re
import json

from bs4 import BeautifulSoup as Soup
import requests

# massaged from https://en.wikipedia.org/wiki/National_Basketball_Association#Teams in ipython
teams = [
    ("/wiki/Boston_Celtics", "Boston Celtics"),
    ("/wiki/Brooklyn_Nets", "Brooklyn Nets"),
    ("/wiki/New_York_Knicks", "New York Knicks"),
    ("/wiki/Philadelphia_76ers", "Philadelphia 76ers"),
    ("/wiki/Toronto_Raptors", "Toronto Raptors"),
    ("/wiki/Chicago_Bulls", "Chicago Bulls"),
    ("/wiki/Cleveland_Cavaliers", "Cleveland Cavaliers"),
    ("/wiki/Detroit_Pistons", "Detroit Pistons"),
    ("/wiki/Indiana_Pacers", "Indiana Pacers"),
    ("/wiki/Milwaukee_Bucks", "Milwaukee Bucks"),
    ("/wiki/Atlanta_Hawks", "Atlanta Hawks"),
    ("/wiki/Charlotte_Hornets", "Charlotte Hornets"),
    ("/wiki/Miami_Heat", "Miami Heat"),
    ("/wiki/Orlando_Magic", "Orlando Magic"),
    ("/wiki/Washington_Wizards", "Washington Wizards"),
    ("/wiki/Denver_Nuggets", "Denver Nuggets"),
    ("/wiki/Minnesota_Timberwolves", "Minnesota Timberwolves",),
    ("/wiki/Oklahoma_City_Thunder", "Oklahoma City Thunder",),
    ("/wiki/Portland_Trail_Blazers", "Portland Trail Blazers",),
    ("/wiki/Utah_Jazz", "Utah Jazz"),
    ("/wiki/Golden_State_Warriors", "Golden State Warriors"),
    ("/wiki/Los_Angeles_Clippers", "Los Angeles Clippers"),
    ("/wiki/Los_Angeles_Lakers", "Los Angeles Lakers"),
    ("/wiki/Phoenix_Suns", "Phoenix Suns"),
    ("/wiki/Sacramento_Kings", "Sacramento Kings"),
    ("/wiki/Dallas_Mavericks", "Dallas Mavericks"),
    ("/wiki/Houston_Rockets", "Houston Rockets"),
    ("/wiki/Memphis_Grizzlies", "Memphis Grizzlies"),
    ("/wiki/New_Orleans_Pelicans", "New Orleans Pelicans"),
    ("/wiki/San_Antonio_Spurs", "San Antonio Spurs"),
]

teamcolors = {}

wiki = "https://en.wikipedia.org"

for wikiurl, name in teams:
    print(name)
    res = requests.get(f"{wiki}/{wikiurl}").text
    soup = Soup(res, "html.parser")
    try:
        colors = re.findall(
            "#[A-F0-9]{6}", str(soup.find(text="Team colors").parent.parent)
        )
    except:
        # the danged raptors have "colours" jeez wiki
        colors = re.findall(
            "#[A-F0-9]{6}", str(soup.find(text="Team colours").parent.parent)
        )

    teamcolors[name] = {"colors": colors}

    logo = soup.find_all(
        lambda elt: "logo" in elt.attrs.get("title", "")
        and "image" in elt.attrs.get("class", "")
    )
    assert len(logo) == 1

    # the logo link on the team page goes to a page for the logo; get _that_
    # page and find the full SVG link on it to download it
    logopage = requests.get(f"{wiki}/{teamcolors[name]['logo']}")
    logosoup = Soup(logopage.text, "html.parser")
    href = (
        logosoup.find("div", attrs={"class": "fullImageLink"}).find("a").attrs["href"]
    )
    logourl = f"https:{href}"
    open(f"logos/{name}.svg", "w").write(requests.get(logourl).text)
    teamcolors[name]["logo"] = logourl


# manually saved off to colors.json
print(json.dumps(teamcolors, indent=2))
