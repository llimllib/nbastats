import * as Plot from "@observablehq/plot";
import { select } from "d3-selection";
import { extent, Numeric } from "d3-array";

import { addTooltips } from "tooltip";

interface TeamData {
  team: string;
  g: number;
  mp: number;
  fg: number;
  fga: number;
  fg_pct: number;
  fg3: number;
  fg3a: number;
  fg3_pct: number;
  fg2: number;
  fg2a: number;
  fg2_pct: number;
  ft: number;
  fta: number;
  ft_pct: number;
  orb: number;
  drb: number;
  trb: number;
  ast: number;
  stl: number;
  blk: number;
  tov: number;
  pf: number;
  pts: number;
  name: string;
  shortname: string;
  age: number;
  wins: number;
  losses: number;
  wins_pyth: number;
  losses_pyth: number;
  mov: number;
  sos: number;
  srs: number;
  off_rtg: number;
  def_rtg: number;
  net_rtg: number;
  pace: number;
  fta_per_fga_pct: number;
  fg3a_per_fga_pct: number;
  ts_pct: number;
  efg_pct: number;
  tov_pct: number;
  orb_pct: number;
  ft_rate: number;
  opp_efg_pct: number;
  opp_tov_pct: number;
  drb_pct: number;
  opp_ft_rate: number;
  arena_name: string;
  attendance: string;
  attendance_per_g: string;
}

interface TeamsMeta {
  updated: string;
  teams: Array<TeamData>;
}

// Wrap `extent` with a function that adds padding to the extent, by a given #
// of the width of the extent
function paddedExtent<T>(
  iterable: Iterable<T>,
  accessor: (
    datum: T,
    index: number,
    array: Iterable<T>
  ) => number | undefined | null,
  paddingPct: number
): [number, number] | [undefined, undefined] {
  const ext = extent(iterable, accessor);
  if (!ext[0] || !ext[1]) {
    return [undefined, undefined];
  }
  const diff = ext[1] - ext[0];
  const padding = diff * paddingPct;
  return [ext[0] - padding, ext[1] + padding];
}

async function main(): Promise<void> {
  const res = await fetch(`data/team_stats.json`);
  const data = (await res.json()) as TeamsMeta;
  const teams = Object.values(data.teams);

  const imageSize = 40;
  const paddingPct = 0.1;
  const chart = Plot.plot({
    width: 640,
    height: 640,
    grid: true,
    y: {
      domain: paddedExtent(teams, (d: TeamData) => d.def_rtg, paddingPct),
      reverse: true,
      tickFormat: ".3",
      ticks: 6,
      tickRotate: 45,
      label: "",
    },
    x: {
      domain: paddedExtent(teams, (d: TeamData) => d.off_rtg, paddingPct),
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
        src: (d: TeamData) => `logos/${d.name}.svg`,
      }),
    ],
  });

  select(chart).attr("transform", "rotate(-45)");
  document.querySelector("#plot")?.append(addTooltips(chart));

  // There's no option to rotate images;
  // https://github.com/observablehq/plot/issues/1083
  //
  // maybe could do this with a custom initializer? not clear to me:
  // https://github.com/observablehq/plot#custom-initializers
  select("#plot")
    .selectAll("image")
    .attr("transform", (_, i, nodes) => {
      const d = select(nodes[i]);
      const rx = +d.attr("x") + imageSize / 2;
      const ry = +d.attr("y") + imageSize / 2;
      return `rotate(45 ${rx} ${ry})`;
    });
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  await main();
});
