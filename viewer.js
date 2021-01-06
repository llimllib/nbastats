$ = (s) => document.querySelector(s);

function hover(event, tooltip, stats, x, y, xfield, yfield) {
  const ptr = d3.pointer(event, this);

  // this is an absolutely dumb way (linear search) to find the closest
  // player, but it is not a huge array so it may not be prohibitive
  //
  // it seems plenty fast enough but ATM it's returning ~50% of the time
  // terrible results
  //
  // the problem was that I was doing the calculation in stat coordinate
  // space instead of screen coordinate space! the y axis has a much larger
  // domain than the x axis. Fixed once I converted to screen space
  var closest = Number.MAX_VALUE;
  var closestPlayer;
  stats.forEach((player) => {
    // euclidean distance -> √((x₀-x₁)² + (y₀-y₁)²)
    var distance = Math.sqrt(
      Math.pow(x(player[xfield]) - ptr[0], 2) +
        Math.pow(y(player[yfield]) - ptr[1], 2)
    );
    if (distance < closest) {
      closest = distance;
      closestPlayer = player;
    }
  });
  tooltip
    .attr(
      "transform",
      `translate(${x(closestPlayer[xfield])},${y(closestPlayer[yfield])})`
    )
    // TODO: add stats to callout
    .call(callout, `${closestPlayer.name}`);
}

function pointLabels(stats, svg, height, width, x, y, xfield, yfield) {
  // TODO figure out how to nicely transition labels
  d3.selectAll(".player_label").remove();

  const delaunay = d3.Delaunay.from(
    stats,
    (p) => x(p[xfield]),
    (p) => y(p[yfield])
  );
  const voronoi = delaunay.voronoi([-1, -1, width + 1, height + 1]);
  const orient = {
    top: (text) => text.attr("text-anchor", "middle").attr("y", -8),
    right: (text) =>
      text.attr("text-anchor", "start").attr("dy", "0.35em").attr("x", 8),
    bottom: (text) =>
      text.attr("text-anchor", "middle").attr("dy", "0.71em").attr("y", 8),
    left: (text) =>
      text.attr("text-anchor", "end").attr("dy", "0.35em").attr("x", -8),
  };

  const cells = stats.map((d, i) => [d, voronoi.cellPolygon(i)]);

  // for some reason, I'm getting exactly one player with an empty cell...
  // their stats and x and y appear totally normally, so I have no idea why.
  // just remove the empty player. this is a hack FIXME
  const hack_cells = cells.filter(([_, c]) => c);

  svg
    .append("g")
    .style("font", "10px sans-serif")
    .selectAll("text")
    .data(hack_cells, (d) => d[0].name)
    .join("text")
    .each(function ([player, cell]) {
      const [cx, cy] = d3.polygonCentroid(cell);
      const angle =
        (Math.round(
          (Math.atan2(cy - y(player[yfield]), cx - x(player[xfield])) /
            Math.PI) *
            2
        ) +
          4) %
        4;
      d3.select(this).call(
        angle === 0
          ? orient.right
          : angle === 3
          ? orient.top
          : angle === 1
          ? orient.bottom
          : orient.left
      );
    })
    .attr("transform", ([d]) => `translate(${x(d[xfield])},${y(d[yfield])})`)
    .attr("display", ([, cell]) =>
      -d3.polygonArea(cell) > 3000 ? null : "none"
    )
    .attr("class", "player_label")
    .text((d, i) => d[0].name);
}

// stats should be a list of player objects
// TODO
// * organize things better
//   * updateAxis, updatePoints, etc?
// * tooltip should display above the player label after transitions
//   * steps to repro: do a transition, then hover over a player with a bottom
//     label
// * permalinks
// * use the voronoi we already have to handle the tooltip selection
// * nice transitions between years
// * highlight a player or particular set of players
// * small multiples by team?
// * customizable filter
//   * user filter querying?
// * nice transitions when you change the statistics
// * teams instead of players
// * axis formatting is broken - x axis always formats like a float.
//   * use metadata do label axes
// * label transitions
// * labels shouldn't hit the left edge of the graph
// * labels sometimes overlap each other, or dots
//   * collision detect after labelling?
// * labels overlap axis label
// * there are a lot of stats - how to give the user better control of them?
//   * sorting, autocomplete? gloassary?
// * view a set of players through years
// * team view
function graph(stats, xfield, yfield, useTeamColors) {
  const svg = d3.select("#canvas");

  // XXX: these are hard-coded; scale them by browser width
  const width = 1024;
  const height = 768;

  const dotRadius = 6;

  const padding = { left: 60, top: 40, right: 40, bottom: 40 };

  // scales
  const x = d3
    .scaleLinear()
    .domain(d3.extent(stats, (s) => s[xfield]))
    .range([padding.left, width - padding.right]);
  const y = d3
    .scaleLinear()
    .domain(d3.reverse(d3.extent(stats, (s) => s[yfield])))
    .range([padding.top, height - padding.bottom]);

  // axes
  // https://observablehq.com/@d3/styled-axes
  // XXX: there will have to be some table from statistic -> tick formatting,
  // not sure we can (should?) work that out automatically
  const xaxis = d3
    .axisTop(x)
    .tickSize(height)
    .tickFormat((d) => d.toFixed(2).slice(1));

  const xaxisg = svg
    .append("g")
    .attr("transform", `translate(0, ${height - 20})`)
    .attr("class", "xaxis")
    .call(xaxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
    .call((g) => g.selectAll(".tick text").attr("y", 0).attr("dx", 15));

  const yaxis = d3.axisRight(y).tickSize(width);

  const yaxisg = svg
    .append("g")
    .attr("transform", `translate(30, 0)`)
    .attr("class", "yaxis")
    .call(yaxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
    .call((g) => g.selectAll(".tick text").attr("dy", -4).attr("x", 4));

  // axis labels
  //
  // I like the axis labels on health & wealth:
  // https://observablehq.com/@mbostock/the-wealth-health-of-nations
  const xlabel = svg
    .append("text")
    .attr("class", "x label")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height - 5)
    .text(statMeta[xfield].name);
  const ylabel = svg
    .append("text")
    .attr("class", "y label")
    .attr("text-anchor", "middle")
    .attr("x", 10)
    .attr("y", height / 2)
    .attr("transform", `rotate(90,10,${height / 2})`) // https://stackoverflow.com/a/11257082
    .text(statMeta[yfield].name);

  // points
  // https://observablehq.com/@d3/scatterplot-tour
  const points = svg
    .append("g")
    .selectAll("circle")
    .data(stats, (d) => d.name)
    .join("g")
    .attr("transform", (d) => `translate(${x(d[xfield])},${y(d[yfield])})`);
  if (useTeamColors) {
    points
      .append("circle")
      .attr("fill", (d) => teams[d.team].colors[0])
      .attr("r", dotRadius);
    points
      .append("circle")
      .attr("fill", (d) => teams[d.team].colors[1])
      .attr("r", dotRadius / 2);
  } else {
    points.append("circle").attr("fill", "#1f77b4").attr("r", dotRadius);
  }

  // point labels
  pointLabels(stats, svg, height, width, x, y, xfield, yfield);

  // https://observablehq.com/@d3/line-chart-with-tooltip
  const tooltip = svg.append("g");

  svg.on("touchmove mousemove", (evt) =>
    hover(evt, tooltip, stats, x, y, xfield, yfield)
  );

  svg.on("touchend mouseleave", () => tooltip.call(callout, null));

  // https://observablehq.com/@d3/dot-plot
  return Object.assign(svg.node(), {
    update(stats, xfield, yfield) {
      y.domain(d3.reverse(d3.extent(stats, (s) => s[yfield])));
      x.domain(d3.extent(stats, (s) => s[xfield]));

      // XXX think I need the axes too... let's see if we can get this to work
      // at all first

      // If an event listener was previously registered for the same typename
      // on a selected element, the old listener is removed before the new
      // listener is added.
      // https://github.com/d3/d3-selection/blob/v2.0.0/README.md#selection_on
      svg.on("touchmove mousemove", (evt) => {
        return hover(evt, tooltip, stats, x, y, xfield, yfield);
      });

      const duration = 1000;

      // TODO: make this axis work for categorical variables
      xaxisg
        .transition()
        .duration(duration)
        .call(xaxis)
        .on("start", function () {
          xaxisg.select(".domain").remove(); // https://stackoverflow.com/a/50254240/42559
        })
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
        .call((g) => g.selectAll(".tick text").attr("y", 0).attr("dx", 15));

      // This is giving lots of <<Error: <text> attribute dy: Expected length,
      // "NaN".>> no idea what that means. For some reason only the bottom four
      // ticks have a NaN for dy?
      yaxisg
        .transition()
        .duration(duration)
        .call(yaxis)
        .on("start", function () {
          yaxisg.select(".domain").remove(); // https://stackoverflow.com/a/50254240/42559
        })
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
        .call((g) => g.selectAll(".tick text").attr("x", 4).attr("dy", -4));

      xlabel.text(statMeta[xfield].name);
      ylabel.text(statMeta[yfield].name);

      // TODO: does this handle entries and exits?
      points
        .transition()
        .duration(duration)
        .attr("transform", (d) => `translate(${x(d[xfield])},${y(d[yfield])})`);

      pointLabels(stats, svg, height, width, x, y, xfield, yfield);
    },
  });
}

// https://observablehq.com/@d3/line-chart-with-tooltip
callout = (g, value) => {
  if (!value) return g.style("display", "none");

  g.style("display", null)
    .style("pointer-events", "none")
    .style("font", "10px sans-serif");

  const path = g
    .selectAll("path")
    .data([null])
    .join("path")
    .attr("fill", "white")
    .attr("stroke", "black");

  const text = g
    .selectAll("text")
    .data([null])
    .join("text")
    .call((text) =>
      text
        .selectAll("tspan")
        .data((value + "").split(/\n/))
        .join("tspan")
        .attr("x", 0)
        .attr("y", (d, i) => `${i * 1.1}em`)
        .style("font-weight", (_, i) => (i ? null : "bold"))
        .text((d) => d)
    );

  const { x, y, width: w, height: h } = text.node().getBBox();

  text.attr("transform", `translate(${-w / 2},${15 - y})`);
  path.attr(
    "d",
    `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`
  );
};

statMeta = {
  pos: {
    name: "Position",
    type: "categorical",
  },
  age: {
    name: "Age",
    type: "ordinal",
  },
  g: {
    name: "Games",
    type: "ordinal",
  },
  gs: {
    name: "Games Started",
    type: "ordinal",
  },
  mp: {
    name: "Minutes Played",
    type: "ordinal",
  },
  fg: {
    name: "Field Goals Made",
    type: "ordinal",
  },
  fga: {
    name: "Field Goals Attempted",
    type: "ordinal",
  },
  fg_pct: {
    name: "Field Goal %",
    type: "float",
  },
  fg3: {
    name: "3 Point Field Goals Made",
    type: "ordinal",
  },
  fg3a: {
    name: "3 Point Field Goals Attempted",
    type: "ordinal",
  },
  fg3_pct: {
    name: "3 Point Field Goal %",
    type: "float",
  },
  fg2: {
    name: "2 Point Field Goals Made",
    type: "ordinal",
  },
  fg2a: {
    name: "2 Point Field Goals Attempted",
    type: "ordinal",
  },
  fg2_pct: {
    name: "2 Point Field Goal %",
    type: "float",
  },
  efg_pct: {
    name: "Effective Field Goal %",
    type: "ordinal",
  },
  ft: {
    name: "",
    type: "ordinal",
  },
  fta: {
    name: "",
    type: "ordinal",
  },
  ft_pct: {
    name: "",
    type: "ordinal",
  },
  orb: {
    name: "",
    type: "ordinal",
  },
  drb: {
    name: "",
    type: "ordinal",
  },
  trb: {
    name: "",
    type: "ordinal",
  },
  ast: {
    name: "",
    type: "ordinal",
  },
  stl: {
    name: "",
    type: "ordinal",
  },
  blk: {
    name: "",
    type: "ordinal",
  },
  tov: {
    name: "",
    type: "ordinal",
  },
  pf: {
    name: "",
    type: "ordinal",
  },
  pts: {
    name: "",
    type: "ordinal",
  },
  name: {
    name: "name",
    type: "categorical",
  },
  team: {
    name: "Team",
    type: "categorical",
  },
  per: {
    name: "PER",
    type: "ordinal",
  },
  ts_pct: {
    name: "True Shooting %",
    type: "float",
  },
  fg3a_per_fga_pct: {
    name: "3pt Attempted per Field Goal Attempted",
    type: "float",
  },
  fta_per_fga_pct: {
    name: "Free Throw Attempted per Field Goal Attempted",
    type: "float",
  },
  orb_pct: {
    name: "Offensive Rebound %",
    type: "float",
  },
  drb_pct: {
    name: "Defensive Rebound %",
    type: "float",
  },
  trb_pct: {
    name: "Total Rebound %",
    type: "float",
  },
  ast_pct: {
    name: "",
    type: "ordinal",
  },
  stl_pct: {
    name: "",
    type: "ordinal",
  },
  blk_pct: {
    name: "",
    type: "ordinal",
  },
  tov_pct: {
    name: "",
    type: "ordinal",
  },
  usg_pct: {
    name: "Usage %",
    type: "ordinal",
  },
  "ws-dum": {
    name: "",
    type: "",
  },
  ows: {
    name: "",
    type: "ordinal",
  },
  dws: {
    name: "",
    type: "ordinal",
  },
  ws: {
    name: "",
    type: "ordinal",
  },
  ws_per_48: {
    name: "",
    type: "ordinal",
  },
  "bpm-dum": {
    name: "",
    type: "",
  },
  obpm: {
    name: "Offensive Box Plus-Minus",
    type: "ordinal",
  },
  dbpm: {
    name: "Defensive Box Plus-Minus",
    type: "ordinal",
  },
  bpm: {
    name: "Box Plus-Minus",
    type: "ordinal",
  },
  vorp: {
    name: "VORP",
    type: "ordinal",
  },
};

// rg -o --replace '$1' --no-filename 'teams/(\w{3})' data/**/stats.json | sort | uniq
// to get every team abbreivation in the data set. Remember teams change! NJN
// -> BKN for ex
//
// I gave the New Jersey Nets the same colors as the Brooklyn nets, but I
// should probably go back and get their real colors
const teams = {
  ATL: {
    name: "Atlanta Hawks",
    colors: ["#C8102E", "#FDB927", "#000000", "#9EA2A2"],
  },
  BOS: {
    name: "Boston Celtics",
    colors: ["#008348", "#BB9753", "#000000", "#A73832", "#FFFFFF"],
  },
  BRK: { name: "Brooklyn Nets", colors: ["#000000", "#FFFFFF", "#707271"] },
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
    colors: ["#888888", "#000000"],
  },
  UTA: { name: "Utah Jazz", colors: ["#002B5C", "#F9A01B", "#00471B"] },
  WAS: {
    name: "Washington Wizards",
    colors: ["#002B5C", "#E31837", "#C4CED4", "#FFFFFF"],
  },
};

function prepare() {
  Object.keys(statMeta).forEach((key) => {
    meta = statMeta[key];
    if (meta.name == "") {
      return;
    }
    d3.select("#statx")
      .append("option")
      .attr("value", key)
      .attr("id", `statx_${key}`)
      .text(meta.name);
    d3.select("#staty")
      .append("option")
      .attr("value", key)
      .attr("id", `staty_${key}`)
      .text(meta.name);
  });
  d3.select("#statx_ts_pct").attr("selected", true);
  d3.select("#staty_usg_pct").attr("selected", true);
}

async function changeYear(evt) {
  const res = await fetch(`./data/${evt.target.value}/stats.json`);
  window.stats = await res.json();

  // TODO: configurable
  const bar = d3.quantile(stats, 0.66, (p) => p.fga);
  const gstats = stats.filter((x) => x.fga > bar);

  const xfield = d3.select("#statx").node().value;
  const yfield = d3.select("#staty").node().value;

  d3.selectAll("#canvas").html("");
  const svg = graph(gstats, xfield, yfield, $("#teamcolors").checked);
}

function changeUseTeamColors(evt) {
  // TODO: configurable
  const bar = d3.quantile(stats, 0.66, (p) => p.fga);
  const gstats = stats.filter((x) => x.fga > bar);

  const xfield = d3.select("#statx").node().value;
  const yfield = d3.select("#staty").node().value;

  d3.selectAll("#canvas").html("");
  const svg = graph(gstats, xfield, yfield, $("#teamcolors").checked);
}

window.addEventListener("DOMContentLoaded", async (evt) => {
  const res = await fetch("./data/2021/stats.json");
  window.stats = await res.json();

  prepare();

  // TODO configurable.
  //
  // right now, grab the top 2/3 of the league by fga
  const bar = d3.quantile(stats, 0.66, (p) => p.fga);
  const gstats = stats.filter((x) => x.fga > bar);

  const svg = graph(gstats, "ts_pct", "usg_pct", $("#teamcolors").checked);
  // TODO: get the values from the select boxes; this makes it easier to test though
  $("#draw").addEventListener("click", () =>
    svg.update(
      gstats,
      d3.select("#statx").node().value,
      d3.select("#staty").node().value
    )
  );
  $("#yearChooser").addEventListener("change", changeYear);
  $("#teamcolors").addEventListener("change", changeUseTeamColors);
});
