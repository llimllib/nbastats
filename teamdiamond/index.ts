import * as Plot from "@observablehq/plot";
import { select } from "d3-selection";
import { extent, group } from "d3-array";

import { addTooltips } from "tooltip";

const DATA_URL = process.env.DATA_URL;

// there are more attributes, I just removed them for simplicity
interface TeamData {
  name: string;
  off_rtg: number;
  def_rtg: number;
}

interface TeamsMeta {
  updated: string;
  teams: Array<TeamData>;
}

type EffData = {
  team_abbreviation: string;
  game_date: string;
  matchup: string;
  off_rating: number;
  def_rating: number;
  pts: number;
  poss: number;
};

type TeamEfficiency = {
  updated: string;
  games: EffData[];
};

async function main(year: string): Promise<void> {
  const res = await fetch(`${DATA_URL}/${year}/team_stats.json`);
  const data = (await res.json()) as TeamsMeta;
  const teams = Object.values(data.teams);

  const imageSize = 40;
  const chartSize = 800 / Math.sqrt(2);

  // we want to use the same domain for both sides of the graph, so get all
  // efficiencies, flatten the list, and pad it out a bit
  const allEficiencies = teams.map((t) => [t.def_rtg, t.off_rtg]).flat();
  const effExt = extent(allEficiencies);
  if (!effExt[0] || !effExt[1]) return;
  const paddedExtent = [effExt[0] * 0.99, effExt[1] * 1.01];

  const chart = Plot.plot({
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
      Plot.image(teams, {
        x: "off_rtg",
        y: "def_rtg",
        width: imageSize,
        height: imageSize,
        title: (d: TeamData) =>
          `${d.name}\nOffensive rating: ${d.off_rtg}\nDefensive rating: ${d.def_rtg}`,
        src: (d: TeamData) => `../logos/${d.name}.svg`,
      }),
      Plot.text(["Offensive Rating"], {
        frameAnchor: "bottom",
        dy: 70,
        fontSize: 25,
        fontWeight: "bold",
        textAnchor: "middle",
      }),
      Plot.text(["Defensive Rating"], {
        frameAnchor: "Left",
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

  // There's not yet an option to rotate images;
  // https://github.com/observablehq/plot/issues/1083
  //
  // once the referenced PR is merged and released, this can be removed in
  // favor of a "rotate" channel on the image mark
  select(chart)
    .selectAll("image")
    .attr("transform", (_, i, nodes) => {
      const d = select(nodes[i]);
      const rx = +d.attr("x") + imageSize / 2;
      const ry = +d.attr("y") + imageSize / 2;
      return `rotate(45 ${rx} ${ry})`;
    });

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
      } ${fullSize / 2})`
    )
    .node()
    ?.append(addTooltips(chart));
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  const year = "2024";
  const res = await fetch(`${DATA_URL}/team_efficiency_${year}.json`);
  const data = (await res.json()) as TeamEfficiency;
  // group by team and sort the games by date
  const byTeam = group(data.games, (d) => d.team_abbreviation).forEach((val) =>
    val.sort((a, b) => (a.game_date < b.game_date ? 1 : -1))
  );
  console.log(data, byTeam);
  await main("2024");
});

document.querySelector("#year")?.addEventListener("change", async (evt) => {
  select("#plot").html("");
  await main((evt.target as HTMLInputElement).value);
});
