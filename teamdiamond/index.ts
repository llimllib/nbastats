import * as Plot from "@observablehq/plot";
import { extent } from "d3-array";

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

async function main(): Promise<void> {
  const res = await fetch(`data/team_stats.json`);
  const data = (await res.json()) as TeamsMeta;
  const teams = Object.values(data.teams);
  console.log(data.teams);
  const chart = addTooltips(
    Plot.plot({
      width: 640,
      height: 640,
      grid: true,
      y: {
        domain: extent(teams, (d: TeamData) => d.def_rtg),
      },
      marks: [
        Plot.dot(teams, {
          x: "off_rtg",
          y: "def_rtg",
          title: (d: TeamData) => d.name,
        }),
        Plot.ruleY([0]),
      ],
    })
  );
  document.querySelector("#plot")?.append(chart);
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  await main();
});
