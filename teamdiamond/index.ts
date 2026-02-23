import { image, plot, text } from "@observablehq/plot";
import { select } from "d3-selection";
import { extent, group } from "d3-array";
import { format } from "d3-format";

import { addTooltips } from "./tooltip.js";

const NBA_DATA_URL = "https://llimllib.github.io/nba_data";

declare global {
  interface Window {
    teams: TeamData[];
    gamelogs?: Map<string, TeamGamelogs[]>;
    ngames: number;
    updated: string;
  }
}

// there are more attributes, I just removed them for simplicity
interface TeamData {
  TEAM_NAME: string;
  OFF_RATING: number;
  DEF_RATING: number;
  W: number;
  L: number;
}

interface TeamGamelogsMeta {
  updated: string;
  games: TeamGamelogs[];
}

interface TeamGamelogs {
  def_rating: number;
  game_id: string;
  game_date: string;
  matchup: string;
  off_rating: number;
  opp_pts: number;
  opp_poss: number;
  pts: number;
  poss: number;
  team_abbreviation: string;
}

interface TeamsMeta {
  updated: string;
  teams: Record<string, TeamData>;
}

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC",
  };

  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
}

interface GamelogSummary {
  games: number;
  off_rating: number;
  def_rating: number;
  team: string;
  w: number;
  l: number;
  fullname: string;
}

function summary(
  teams: Record<string, TeamData>,
  games: TeamGamelogs[],
): GamelogSummary {
  const totals = {
    poss: 0,
    pts: 0,
    opp_poss: 0,
    opp_pts: 0,
  };
  for (const game of games) {
    totals.poss += game.poss;
    totals.pts += game.pts;
    totals.opp_pts += game.opp_pts;
    totals.opp_poss += game.opp_poss;
  }
  const team = teams[games[0].team_abbreviation];
  if (!team) {
    throw Error(`unable to find team ${games[0].team_abbreviation}`);
  }
  return {
    games: games.length,
    off_rating: (totals.pts / totals.poss) * 100,
    def_rating: (totals.opp_pts / totals.opp_poss) * 100,
    team: games[0].team_abbreviation,
    w: team.W,
    l: team.L,
    fullname: team.TEAM_NAME,
  };
}

async function graph(
  teams: Record<string, TeamData>,
  gamelogs: Map<string, TeamGamelogs[]>,
  ngames: number,
  updated: string,
): Promise<void> {
  const imageSize = 40;
  const chartSize = 800 / Math.sqrt(2);

  // slice the gamelogs
  const actualNGames = [90, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80];
  // firefox lacks support for entries.map, so fall back on splatting
  const slicedGames = new Map(
    [...gamelogs].map(([x, y]) => [
      x,
      summary(teams, y.slice(0, actualNGames[ngames])),
    ]),
  );
  if (!slicedGames) {
    return;
  }

  // we want to use the same domain for both sides of the graph, so get all
  // efficiencies, flatten the list, and pad it out a bit
  const effExt = extent(
    [...slicedGames]
      .map(([, summ]) => [summ.def_rating, summ.off_rating])
      .flat(),
  );
  if (!effExt[0] || !effExt[1]) return;
  const paddedExtent = [effExt[0] * 0.99, effExt[1] * 1.01];

  // format a float with two trailing digits
  const twof = format(".2f");
  const chart = plot({
    width: chartSize,
    height: chartSize,
    grid: true,
    style: {
      background: "#fff9eb",
    },
    y: {
      domain: paddedExtent,
      reverse: true,
      tickFormat: ".3",
      ticks: 5,
      tickRotate: 45,
      label: "",
    },
    x: {
      domain: paddedExtent,
      tickFormat: ".3",
      ticks: 5,
      tickRotate: 45,
      label: "",
    },
    marks: [
      image(slicedGames.values(), {
        x: "off_rating",
        y: "def_rating",
        width: imageSize,
        height: imageSize,
        rotate: 45,
        title: (d: GamelogSummary) =>
          `${d.team}\nRecord: ${d.w} - ${d.l}\nOffensive rating: ${twof(
            d.off_rating,
          )}\nDefensive rating: ${twof(d.def_rating)}`,
        src: (d: GamelogSummary) => `../logos/${d.fullname}.svg`,
      }),
      text(["Offensive Rating"], {
        frameAnchor: "bottom",
        dy: 70,
        fontSize: 25,
        fontWeight: "bold",
        textAnchor: "middle",
      }),
      text(["Defensive Rating"], {
        frameAnchor: "left",
        dx: -60,
        fontSize: 25,
        fontWeight: "bold",
        rotate: 90,
        textAnchor: "middle",
      }),
    ],
  });

  // Add quadrant backgrounds
  const bgpadding = 50;
  select(chart)
    .insert("rect", ":first-child")
    .attr("x", bgpadding)
    .attr("y", bgpadding)
    .attr("width", chartSize / 2 - bgpadding)
    .attr("height", chartSize / 2 - bgpadding)
    .attr("fill", "#fbe8c8");
  select(chart)
    .insert("rect", ":first-child")
    .attr("x", chartSize / 2)
    .attr("y", bgpadding)
    .attr("width", chartSize / 2 - bgpadding)
    .attr("height", chartSize / 2 - bgpadding)
    .attr("fill", "#e2e6cf");
  select(chart)
    .insert("rect", ":first-child")
    .attr("x", bgpadding)
    .attr("y", chartSize / 2)
    .attr("width", chartSize / 2 - bgpadding)
    .attr("height", chartSize / 2 - bgpadding)
    .attr("fill", "#f8d9d4");
  select(chart)
    .insert("rect", ":first-child")
    .attr("x", chartSize / 2)
    .attr("y", chartSize / 2)
    .attr("width", chartSize / 2 - bgpadding)
    .attr("height", chartSize / 2 - bgpadding)
    .attr("fill", "#fbe8c8");

  const fullSize = 800;

  // I cannot find a way to get the actual height & width of the inner plot
  // here so I'm just going to put it in manually. Neither getBBox nor
  // getClientBoundingRect worked. Hate those ugly magic constants.
  select("#plot")
    .append("svg")
    .attr("width", fullSize)
    .attr("height", fullSize)
    .append("g")
    .attr(
      "transform",
      ` translate(${(fullSize - 506) / 2} ${(fullSize - 828) / 2}) rotate(-45 ${
        fullSize / 2
      } ${fullSize / 2})`,
    )
    .node()
    ?.append(addTooltips(chart));

  const date = new Date(updated);
  select("#updated").html(`data updated ${formatDate(date)} UTC`);
}

async function prepareGamelogs(
  year: string,
): Promise<Map<string, TeamGamelogs[]>> {
  const res = await fetch(`${NBA_DATA_URL}/team_efficiency_${year}.json`);
  const data = (await res.json()) as TeamGamelogsMeta;
  // group games by team
  const byTeam = group(
    data.games.filter(
      // group games by team
      // Game ID prefixes:
      //   001 -> preseason
      //   002 -> regular season + NBA Cup (except final)
      //   003 -> All-Star games (have null team_abbreviation)
      //   006 -> NBA Cup final
      (g) => g.team_abbreviation !== null && g.game_id.startsWith("002"),
    ),
    (d) => d.team_abbreviation,
  );
  // sort each game list by date
  byTeam.forEach((val) =>
    val.sort((a, b) => (a.game_date < b.game_date ? 1 : -1)),
  );
  return byTeam;
}

async function fetchTeams(year: string): Promise<TeamsMeta> {
  const res = await fetch(`${NBA_DATA_URL}/team_summary_${year}.json`);
  return (await res.json()) as TeamsMeta;
}

window.addEventListener("DOMContentLoaded", async () => {
  const year = "2026";
  let teamsMeta = await fetchTeams(year);
  let gamelogs = await prepareGamelogs(year);
  const ngames = parseFloat(
    (document.querySelector("#ngames") as HTMLInputElement).value,
  );
  await graph(teamsMeta.teams, gamelogs, ngames, teamsMeta.updated);

  // handle updates on the year selector
  document.querySelector("#year")?.addEventListener("change", async (evt) => {
    select("#plot").html("");
    const year = (evt.target as HTMLInputElement).value;
    // closes over let binding in above scope ^^^
    teamsMeta = await fetchTeams(year);
    gamelogs = await prepareGamelogs(year);
    await graph(
      teamsMeta.teams,
      gamelogs,
      parseFloat((document.querySelector("#ngames") as HTMLInputElement).value),
      teamsMeta.updated,
    );
  });

  // handle updates to the number of games
  // TODO: we don't need to re-fetch teams data here
  document
    .querySelector("#ngames")
    ?.addEventListener("change", async (_evt: Event) => {
      select("#plot").html("");
      await graph(
        teamsMeta.teams,
        gamelogs,
        parseFloat(
          (document.querySelector("#ngames") as HTMLInputElement).value,
        ),
        teamsMeta.updated,
      );
    });
  document
    .querySelector("#ngames")
    ?.addEventListener("input", async (_evt: Event) => {
      const ngames = parseFloat(
        (document.querySelector("#ngames") as HTMLInputElement).value,
      );
      const actualNGames = [90, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80];
      if (ngames > 0) {
        (document.querySelector("#gameslabel") as HTMLElement).innerText =
          `Last ${actualNGames[ngames]} games`;
      } else {
        (document.querySelector("#gameslabel") as HTMLElement).innerText =
          `All games`;
      }
      select("#plot").html("");
      await graph(
        teamsMeta.teams,
        gamelogs,
        parseFloat(
          (document.querySelector("#ngames") as HTMLInputElement).value,
        ),
        teamsMeta.updated,
      );
    });
});
