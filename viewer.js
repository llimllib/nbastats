$ = (s) => document.querySelector(s);

const settings = {
  padding: { left: 60, top: 40, right: 40, bottom: 40 },
  width: 1024,
  height: 768,
  dotRadius: 6,
  duration: 750,
};

function hover(event, tooltip, stats, x, y, xfield, yfield) {
  const ptr = d3.pointer(event, this);

  // this is an absolutely dumb way (linear search) to find the closest
  // player, but it is not a huge array so it may not be prohibitive
  // TODO: use the voronoi I calculate anyway to handle the hover
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

function pointLabels(stats, svg, x, y, xfield, yfield) {
  const delaunay = d3.Delaunay.from(
    stats,
    (p) => x(p[xfield]),
    (p) => y(p[yfield])
  );
  const voronoi = delaunay.voronoi([
    -1,
    -1,
    settings.width + 1,
    settings.height + 1,
  ]);
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

// scales(stats:object, xfield:string, yfield:string) -> [xscale, yscale]
function scales(stats, xfield, yfield) {
  xAxType = statMeta[xfield].type;
  if (xAxType == "categorical") {
    const domain = new Set(stats.map((p) => p[xfield]));
    var x = d3.scaleBand(domain, [
      settings.padding.left,
      settings.width - settings.padding.right,
    ]);
  } else {
    var x = d3
      .scaleLinear()
      .domain(d3.extent(stats, (s) => s[xfield]))
      .range([settings.padding.left, settings.width - settings.padding.right]);
  }

  yAxType = statMeta[yfield].type;
  if (yAxType == "categorical") {
    const domain = new Set(stats.map((p) => p[yfield]));
    var y = d3.scaleBand(domain, [
      settings.padding.top,
      settings.height - settings.padding.bottom,
    ]);
  } else {
    var y = d3
      .scaleLinear()
      .domain(d3.reverse(d3.extent(stats, (s) => s[yfield])))
      .range([settings.padding.top, settings.height - settings.padding.bottom]);
  }

  return [x, y];
}

// https://observablehq.com/@d3/styled-axes
function axes(svg, stats, xscale, yscale) {
  var xaxis = d3
    .axisTop(xscale)
    .tickSize(settings.height)
    .tickFormat(d3.format(".2r"));

  const xaxisg = svg
    .append("g")
    .attr("transform", `translate(0, ${settings.height - 20})`)
    .attr("class", "xaxis")
    .call(xaxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
    .call((g) => g.selectAll(".tick text").attr("y", 0).attr("dx", -15));

  const yaxis = d3
    .axisRight(yscale)
    .tickSize(settings.width)
    .tickFormat(d3.format(".2r"));

  const yaxisg = svg
    .append("g")
    .attr("transform", `translate(30, 0)`)
    .attr("class", "yaxis")
    .call(yaxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
    .call((g) => g.selectAll(".tick text").attr("dy", -4).attr("x", 4));

  // return an update function
  return function (stats, xfield, yfield, xscale, yscale) {
    xAxType = statMeta[xfield].type;
    if (xAxType == "categorical") {
      xaxis.scale(xscale).tickFormat((p) => p);
    } else {
      xaxis.scale(xscale).tickFormat(d3.format(".2r"));
    }

    yAxType = statMeta[yfield].type;
    if (yAxType == "categorical") {
      yaxis.scale(yscale).tickFormat((p) => p);
    } else {
      yaxis.scale(yscale).tickFormat(d3.format(".2r"));
    }

    xaxisg
      .transition()
      .duration(settings.duration)
      .call(xaxis)
      .on("start", function () {
        xaxisg.select(".domain").remove(); // https://stackoverflow.com/a/50254240/42559
      })
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
      // this looks better with dx set to 15, but then is wong for categorical
      // variables; TODO: update this value when categoricals are selected and
      // remove it when unselected
      .call((g) => g.selectAll(".tick text").attr("y", 0).attr("dx", -15));

    yaxisg
      .transition()
      .duration(settings.duration)
      .call(yaxis)
      .on("start", function () {
        yaxisg.select(".domain").remove(); // https://stackoverflow.com/a/50254240/42559
      })
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
      .call((g) => g.selectAll(".tick text").attr("x", 4).attr("dy", -4));
  };
}

// run a callback function after all objects being transitioned have been
// transitioned
//
// https://stackoverflow.com/a/20773846
function endall(transition, callback) {
  if (typeof callback !== "function")
    throw new Error("Wrong callback in endall");
  if (transition.size() === 0) {
    callback();
  }
  var n = 0;
  transition
    .each(function () {
      ++n;
    })
    .on("end", function () {
      if (!--n) callback.apply(this, arguments);
    });
}

function points(svg, stats, xscale, yscale, xfield, yfield) {
  useTeamColors = $("#teamcolors").checked;

  var container = svg.append("g").attr("class", "points");

  // points
  // https://observablehq.com/@d3/scatterplot-tour
  var points = container
    .selectAll("g")
    .data(stats, (d) => d.name)
    .join("g")
    .attr(
      "transform",
      (d) => `translate(${xscale(d[xfield])},${yscale(d[yfield])})`
    );
  if (useTeamColors) {
    points
      .append("circle")
      .attr("fill", (d) => teams[d.team].colors[0])
      .attr("r", settings.dotRadius);
    points
      .append("circle")
      .attr("fill", (d) => teams[d.team].colors[1])
      .attr("r", settings.dotRadius / 2);
  } else {
    points
      .append("circle")
      .attr("fill", "#1f77b4")
      .attr("r", settings.dotRadius);
  }

  return function (stats, xscale, yscale, xfield, yfield) {
    useTeamColors = $("#teamcolors").checked;
    d3.selectAll(".player_label").remove();

    // TODO: does this handle entries and exits?
    container
      .selectAll("g")
      .data(stats, (d) => d.name)
      .join(
        (enter) => {
          var g = enter.append("g");
          if (useTeamColors) {
            g.append("circle")
              .attr("fill", (d) => teams[d.team].colors[0])
              .attr("r", settings.dotRadius);
            g.append("circle")
              .attr("fill", (d) => teams[d.team].colors[1])
              .attr("r", settings.dotRadius / 2);
          } else {
            g.append("circle")
              .attr("fill", "#1f77b4")
              .attr("r", settings.dotRadius);
          }
          g.call((enter) => {
            enter
              .transition()
              .duration(settings.duration)
              .attr(
                "transform",
                (d) => `translate(${xscale(d[xfield])},${yscale(d[yfield])})`
              );
          });
          return g;
        },
        (update) =>
          update.call((update) =>
            update
              .transition()
              .attr(
                "transform",
                (d) => `translate(${xscale(d[xfield])},${yscale(d[yfield])})`
              )
              .duration(settings.duration)

              .call(endall, () =>
                pointLabels(stats, svg, xscale, yscale, xfield, yfield)
              )
          ),
        (exit) => exit.remove()
      );
  };
}

function axisLabels(svg, xfield, yfield) {
  // axis labels
  //
  // I like the axis labels on health & wealth:
  // https://observablehq.com/@mbostock/the-wealth-health-of-nations
  const xlabel = svg
    .append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", settings.width - 20)
    .attr("y", settings.height - 5)
    .text("→" + statMeta[xfield].name);
  const ylabel = svg
    .append("text")
    .attr("class", "y label")
    .attr("text-anchor", "left")
    .attr("x", 10)
    .attr("y", 20)
    .text("↑" + statMeta[yfield].name);

  return function (xfield, yfield) {
    xlabel.text("→" + statMeta[xfield].name);
    ylabel.text("↑" + statMeta[yfield].name);
  };
}

// stats should be a list of player objects
// TODO
// * tooltip should show more information
// * tooltip should display above the player label after transitions
//   * steps to repro: do a transition, then hover over a player with a bottom
//     label
// * permalinks
// * select multiple years
//   * view a set of players through years
// * use the voronoi we already have to handle the tooltip selection
// * nice transitions between years
// * highlight a player or particular set of players
//   * something like, one dot stays lit and the others go grey
// * small multiples by team?
// * teams instead of players
// * labels sometimes overlap each other, or dots
//   * collision detect after labelling?
// * there are a lot of stats - how to give the user better control of them?
//   * sorting, autocomplete? glossary?
function graph(stats, xfield, yfield) {
  const svg = d3.select("#canvas");

  var [x, y] = scales(stats, xfield, yfield);
  updateAxes = axes(svg, stats, x, y);
  updateAxisLabels = axisLabels(svg, xfield, yfield);
  updatePoints = points(svg, stats, x, y, xfield, yfield);

  // point labels
  pointLabels(stats, svg, x, y, xfield, yfield);

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

      // If an event listener was previously registered for the same typename
      // on a selected element, the old listener is removed before the new
      // listener is added.
      // https://github.com/d3/d3-selection/blob/v2.0.0/README.md#selection_on
      svg.on("touchmove mousemove", (evt) => {
        return hover(evt, tooltip, stats, x, y, xfield, yfield);
      });

      [x, y] = scales(stats, xfield, yfield);
      updateAxes(stats, xfield, yfield, x, y);
      updateAxisLabels(xfield, yfield);
      updatePoints(stats, x, y, xfield, yfield);
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
    name: "Free Throws Made",
    type: "ordinal",
  },
  fta: {
    name: "Free Throw Attempts",
    type: "ordinal",
  },
  ft_pct: {
    name: "Free Throw %",
    type: "ordinal",
  },
  orb: {
    name: "Offensive Rebounds",
    type: "ordinal",
  },
  drb: {
    name: "Defensive Rebounds",
    type: "ordinal",
  },
  trb: {
    name: "Total Rebounds",
    type: "ordinal",
  },
  ast: {
    name: "Assists",
    type: "ordinal",
  },
  stl: {
    name: "Steals",
    type: "ordinal",
  },
  blk: {
    name: "Blocks",
    type: "ordinal",
  },
  tov: {
    name: "Turnovers",
    type: "ordinal",
  },
  pf: {
    name: "Personal Fouls",
    type: "ordinal",
  },
  pts: {
    name: "Points",
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

  const xfield = d3.select("#statx").node().value;
  const yfield = d3.select("#staty").node().value;

  d3.selectAll("#canvas").html("");
  const svg = graph(applyFilter(window.stats), xfield, yfield);
}

function changeUseTeamColors(evt, activeStats) {
  const xfield = d3.select("#statx").node().value;
  const yfield = d3.select("#staty").node().value;

  d3.selectAll("#canvas").html("");
  const svg = graph(applyFilter(window.stats), xfield, yfield);
}

// return a function (player, field, n) -> bool that will return true if a
// player is above the nth quantile in the given field and false otherwise
function makeQuantiler(stats) {
  return function (player, field, n) {
    return player[field] > d3.quantile(stats, n / 100, (p) => p[field]);
  };
}

function applyFilter(stats) {
  quantile = makeQuantiler(stats);

  // example filters:
  // player.usg_pct > 26 && player.fga > 80
  // ['BOS', 'MIA', 'BRK'].indexOf(player.team) != -1 && player.fga > 30
  // player.team == 'BOS'
  // quantile(player, 'fga', 80) || quantile(player, 'trb', 80)
  activeStats = stats.filter((player) => eval($("#filter").value));
  return activeStats;
}

window.addEventListener("DOMContentLoaded", async (evt) => {
  const res = await fetch("./data/2021/stats.json");
  window.stats = await res.json();

  prepare();

  const svg = graph(applyFilter(window.stats), "ts_pct", "usg_pct");
  // TODO: get the values from the select boxes; this makes it easier to test though
  $("#draw").addEventListener("click", () =>
    svg.update(
      activeStats,
      d3.select("#statx").node().value,
      d3.select("#staty").node().value
    )
  );
  $("#yearChooser").addEventListener("change", changeYear);
  $("#teamcolors").addEventListener("change", (evt) =>
    changeUseTeamColors(evt)
  );
  $("#applyFilter").addEventListener("click", () => {
    svg.update(
      applyFilter(window.stats),
      d3.select("#statx").node().value,
      d3.select("#staty").node().value
    );
  });
});
