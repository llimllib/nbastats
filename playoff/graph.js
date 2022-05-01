// TODO:
// - label players
// - label axes
function find(name) {
  players = [];
  for (const player of stats) {
    if (player.name.search(name) !== -1) {
      players.push(player);
    }
  }
  return players;
}

async function main() {
  const res = await fetch(`data.json`);
  const stats = await res.json();
  window.stats = stats;
  const b = bestPlayersGraph(stats);
  document.querySelector("#barchart").append(b);
  const g = smallMultipleGraph(stats);
  document.querySelector("#small_multiples").append(g);
}

// https://observablehq.com/@observablehq/plot-bar?collection=@observablehq/plot
// search "diverging bar chart"
function bestPlayersGraph(stats) {
  const players = stats.filter((x) => x.playoff_mpg > 30);
  for (const p of players) {
    p.ts_diff = p.playoff_ts_pct - p.ts_pct;
    p.usage_diff = p.playoff_usg_pct - p.usg_pct;
  }

  const sorted = d3.sort(players, (d) => -d.ts_diff);
  console.log(sorted);

  const plt = Plot.plot({
    grid: true,
    marginLeft: 130,
    x: {
      label:
        "← decrease · Change in True Shooting percentage in playoffs · increase →",
      labelAnchor: "center",
      domain: d3.extent(sorted, (d) => d.ts_diff),
      nice: true,
      axis: "top",
    },
    y: {
      label: null,
      domain: sorted.map((d) => d.name),
    },
    color: {
      scheme: "rdylgn",
      legend: true,
    },
    marks: [
      Plot.barX(sorted, {
        y: "name",
        x: "ts_diff",
        fill: "usage_diff",
      }),
      Plot.ruleX([0]),
    ],
  });
  document.body.append(
    plt.legend("color", {
      label: "← less playoff usage · greater playoff usage →",
    })
  );
  return plt;
}

// simplest possible plot - if it's plotted, the tooltip lib gets confused
// and uses it, so disabled
// const dotplot = Plot.dot(stats, {
//   x: "usg_pct",
//   y: "ts_pct",
//   stroke: "team",
//   title: "name",
// }).plot();
// document.body.append(dotplot);

function smallMultipleGraph(stats) {
  const players = stats.filter((x) => x.playoff_mpg > 28);

  grid = [
    ["MIA", "ATL", "BOS", "BRK"],
    ["MIL", "CHI", "PHI", "TOR"],
    ["PHO", "NOP", "MEM", "MIN"],
    ["GSW", "DEN", "UTA", "DAL"],
  ];
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      for (const player of players) {
        if (player.team == grid[i][j]) {
          player.row = i;
          player.col = j;
        }
      }
    }
  }

  const xfield = "playoff_usg_pct";
  const yfield = "playoff_ts_pct";
  const width = 1024;
  const height = 800;
  const ffmt = d3.format(".1f");

  const p2 = Plot.plot({
    grid: true,
    width: width,
    height: height,
    x: {
      domain: d3.extent(players, (d) => d[xfield]),
      nice: true,
      label: "-> usage percentage",
    },
    y: {
      domain: d3.extent(players, (d) => d[yfield]),
      nice: true,
      label: "-> true shooting",
    },
    facet: {
      data: players,
      x: "col",
      y: "row",
    },
    fx: {
      axis: null,
    },
    fy: {
      axis: null,
      paddingInner: 0.2,
    },
    marks: [
      Plot.dot(players, {
        x: xfield,
        y: yfield,
        title: "name",
        r: 10,
        fill: (d) => teams[d.team].colors[0],
        stroke: (d) => teams[d.team].colors[1],
        strokeWidth: 5,
      }),
      Plot.link(players, {
        x1: "usg_pct",
        y1: "ts_pct",
        x2: xfield,
        y2: yfield,
      }),
      Plot.Tooltip(players, {
        x: xfield,
        y: yfield,
        r: 10,
        content: (d) => `${d.name}
Regular season
TS%: ${ffmt(d.ts_pct)}
Usage: ${ffmt(d.usg_pct)}

Playoffs
TS%: ${ffmt(d.playoff_ts_pct)}
Usage: ${ffmt(d.playoff_usg_pct)}
`,
      }),
    ],
  });

  // Add labels to the facets. There's no way I can tell to do this within the
  // plot?
  d3.select(p2)
    .selectAll("[aria-label=facet]")
    .append("text")
    .attr("x", width / 8)
    .attr("y", -12)
    .attr("font-weight", "bold")
    .attr("font-size", "1.2em")
    .text((d, i) => grid[d[1]][d[0]]);

  return p2;
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  await main();
});

// I made Brooklyn's primary white into a tertiary to improve the graph
const teams = {
  ATL: {
    name: "Atlanta Hawks",
    colors: ["#C8102E", "#FDB927", "#000000", "#9EA2A2"],
  },
  BOS: {
    name: "Boston Celtics",
    colors: ["#008348", "#BB9753", "#000000", "#A73832", "#FFFFFF"],
  },
  BRK: { name: "Brooklyn Nets", colors: ["#FFFFFF", "#707271", "#000000"] },
  CHA: { name: "Charlotte Bobcats", colors: ["#f26532", "#2f598c", "#959da0"] },
  CHI: { name: "Chicago Bulls", colors: ["#CE1141", "#000000"] },
  CHO: {
    name: "Charlotte Hornets",
    colors: ["#00788C", "#1D1160", "#A1A1A4", "#FFFFFF"],
  },
  CLE: {
    name: "Cleveland Cavaliers",
    colors: ["#6F263D", "#FFB81C", "#041E42", "#000000"],
  },
  DAL: {
    name: "Dallas Mavericks",
    colors: ["#0064B1", "#00285E", "#BBC4CA", "#000000"],
  },
  DEN: {
    name: "Denver Nuggets",
    colors: ["#0E2240", "#FEC524", "#8B2131", "#244289"],
  },
  DET: {
    name: "Detroit Pistons",
    colors: ["#1D428A", "#C8102E", "#BEC0C2", "#000000", "#FFFFFF"],
  },
  GSW: { name: "Golden State Warriors", colors: ["#1D428A", "#FDB927"] },
  HOU: {
    name: "Houston Rockets",
    colors: ["#CE1141", "#000000", "#9EA2A2", "#373A36", "#FFFFFF"],
  },
  IND: { name: "Indiana Pacers", colors: ["#002D62", "#FDBB30", "#BEC0C2"] },
  LAC: {
    name: "Los Angeles Clippers",
    colors: ["#C8102E", "#1D428A", "#000000", "#BEC0C2", "#FFFFFF"],
  },
  LAL: {
    name: "Los Angeles Lakers",
    colors: ["#552583", "#FDB927", "#000000"],
  },
  MEM: {
    name: "Memphis Grizzlies",
    colors: ["#5D76A9", "#12173F", "#707271", "#F5B112"],
  },
  MIA: { name: "Miami Heat", colors: ["#000000", "#98002E", "#F9A01B"] },
  MIL: {
    name: "Milwaukee Bucks",
    colors: ["#00471B", "#EEE1C6", "#0077C0", "#000000", "#FFFFFF"],
  },
  MIN: {
    name: "Minnesota Timberwolves",
    colors: ["#0C2340", "#78BE20", "#236192", "#9EA2A2", "#FFFFFF"],
  },
  NJN: { name: "New Jersey Nets", colors: ["#000000", "#FFFFFF", "#707271"] },
  NOH: {
    name: "New Orleans Hornets",
    colors: ["#00788C", "#1D1160", "#A1A1A4", "#FFFFFF"],
  },
  NOP: {
    name: "New Orleans Pelicans",
    colors: ["#0A2240", "#8C734B", "#CE0E2D"],
  },
  NYK: {
    name: "New York Knicks",
    colors: ["#006BB6", "#F58426", "#BEC0C2", "#000000", "#FFFFFF"],
  },
  OKC: {
    name: "Oklahoma City Thunder",
    colors: ["#007AC1", "#EF3B24", "#FDBB30", "#002D62"],
  },
  ORL: { name: "Orlando Magic", colors: ["#0077C0", "#000000", "#C4CED4"] },
  PHI: {
    name: "Philadelphia 76ers",
    colors: ["#006BB6", "#ED174C", "#C4CED4", "#000000", "#002B5C", "#FFFFFF"],
  },
  PHO: {
    name: "Phoenix Suns",
    colors: ["#1D1160", "#E56020", "#000000", "#63727A", "#F9A01B"],
  },
  POR: {
    name: "Portland Trailblazers",
    colors: ["#E03A3E", "#000000", "#FFFFFF"],
  },
  SAC: { name: "Sacramento Kings", colors: ["#5A2B81", "#63727A", "#000000"] },
  SAS: { name: "San Antonio Spurs", colors: ["#000000", "#C4CED4"] },
  TOR: {
    name: "Toronto Raptors",
    colors: ["#CE1141", "#000000", "#393A96", "#B4975A", "#FFFFFF"],
  },
  TOT: {
    name: "Season Total",
    comment:
      "bbref uses TOT to indicate a player's season total if they were on more than one team",
    colors: ["#888888", "#888888"],
  },
  UTA: { name: "Utah Jazz", colors: ["#002B5C", "#F9A01B", "#00471B"] },
  WAS: {
    name: "Washington Wizards",
    colors: ["#002B5C", "#E31837", "#C4CED4", "#FFFFFF"],
  },
};
