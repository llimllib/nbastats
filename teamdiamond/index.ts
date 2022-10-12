import * as Plot from "@observablehq/plot";
import { select } from "d3-selection";
import { extent } from "d3-array";

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

async function main(): Promise<void> {
  const res = await fetch(`${DATA_URL}/2022/team_stats.json`);
  const data = (await res.json()) as TeamsMeta;
  const teams = Object.values(data.teams);

  const imageSize = 40;
  const chartSize = 640;

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
      ticks: 6,
      tickRotate: 45,
      label: "",
    },
    x: {
      domain: paddedExtent,
      tickFormat: ".3",
      ticks: 6,
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

  // rotate the entire chart
  select(chart).attr("transform", "rotate(-45)");

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

  // Add quadrant labels
  function helptext(text: string, bgcolor: string, top: number, left: number) {
    return select("#plot")
      .append("span")
      .text(text)
      .attr("class", "helptext-ok")
      .style("font-size", "17px")
      .style("font-weight", "bold")
      .style("background", bgcolor)
      .style("padding", "6px")
      .style("border-radius", "4px")
      .style("position", "relative")
      .style("top", `${top}px`)
      .style("left", `${left}px`)
      .style("z-index", "100");
  }
  helptext("Bad O, Good D", "#f1cb9a88", 330, -80);
  helptext("Good O, Bad D", "#f1cb9a88", 330, 450);
  helptext("Good O and D", "#9fc3b588", -20, -10);
  helptext("Bad O and D", "#eca5aa88", 680, -130);

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

  // append the chart to the document
  document.querySelector("#plot")?.append(addTooltips(chart));
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  await main();
});
