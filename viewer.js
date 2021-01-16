$ = (s) => document.querySelector(s);

const settings = {
  padding: { left: 60, top: 40, right: 40, bottom: 40 },
  width: 1024,
  height: 768,
  dotRadius: 6,
  maxRadius: 16,
  minRadius: 4,
  duration: 750,
};

function hover(event, tooltip, stats, x, y, xfield, yfield, delaunay, cells) {
  const [mx, my] = d3.pointer(event, this);

  nearest = delaunay.find(mx, my);
  closestPlayer = cells[nearest][0];
  tooltip
    .attr(
      "transform",
      `translate(${x(closestPlayer[xfield])},${y(closestPlayer[yfield])})`
    )
    .call(
      callout,
      `${closestPlayer.name}
${closestPlayer.team}
${statMeta[xfield].name}: ${closestPlayer[xfield]}
${statMeta[yfield].name}: ${closestPlayer[yfield]}`
    );
}

function orient(pos, r) {
  if (pos == "top") {
    return (text) => text.attr("text-anchor", "middle").attr("y", -r);
  } else if (pos == "right") {
    return (text) =>
      text.attr("text-anchor", "start").attr("dy", "0.35em").attr("x", r);
  } else if (pos == "bottom") {
    return (text) =>
      text.attr("text-anchor", "middle").attr("dy", "0.71em").attr("y", r);
  } else if (pos == "left") {
    return (text) =>
      text.attr("text-anchor", "end").attr("dy", "0.35em").attr("x", -r);
  }
}

function orientText(xscale, yscale, rscale, xfield, yfield, rfield) {
  return function ([player, cell]) {
    // if two players have the same stats on the selected dimension, the
    // voronoi cell will be null. Skip this player for now - do something more
    // intelligent with coincident players later
    if (!cell) {
      return;
    }
    const [cx, cy] = d3.polygonCentroid(cell);
    const angle =
      (Math.round(
        (Math.atan2(cy - yscale(player[yfield]), cx - xscale(player[xfield])) /
          Math.PI) *
          2
      ) +
        4) %
      4;
    const r = rscale(player[rfield]) * 1.1;
    d3.select(this).call(
      angle === 0
        ? orient("right", r)
        : angle === 3
        ? orient("top", r)
        : angle === 1
        ? orient("bottom", r)
        : orient("left", r)
    );
  };
}

function calcVoronoi(stats, xscale, yscale, xfield, yfield) {
  const delaunay = d3.Delaunay.from(
    stats,
    (p) => xscale(p[xfield]),
    (p) => yscale(p[yfield])
  );
  const voronoi = delaunay.voronoi([
    -1,
    -1,
    settings.width + 1,
    settings.height + 1,
  ]);

  var cells = stats.map((d, i) => [d, voronoi.cellPolygon(i)]);

  return [delaunay, cells];
}

function pointLabels(
  svg,
  stats,
  xscale,
  yscale,
  rscale,
  xfield,
  yfield,
  rfield,
  cells
) {
  var orienter = orientText(xscale, yscale, rscale, xfield, yfield, rfield);

  const container = svg
    .append("g")
    .attr("class", "labels")
    .style("font", "10px sans-serif");

  const labels = container
    .selectAll("text")
    .data(cells, ([p, _]) => p.name)
    .join("text")
    .each(orienter)
    .attr(
      "transform",
      ([p, _]) => `translate(${xscale(p[xfield])},${yscale(p[yfield])})`
    )
    .attr("display", ([, cell]) =>
      !cell || -d3.polygonArea(cell) > 3000 ? null : "none"
    )
    .text(([p, _]) => p.name);

  return function (
    stats,
    xscale,
    yscale,
    rscale,
    xfield,
    yfield,
    rfield,
    cells
  ) {
    var orienter = orientText(xscale, yscale, rscale, xfield, yfield, rfield);

    // TODO the label immediately changes orientation instead of
    // transitioning nicely, though it does move with the point
    container
      .selectAll("text")
      .data(cells, ([p, _]) => p.name)
      .join("text")
      .transition()
      .duration(settings.duration)
      .each(orienter)
      .attr(
        "transform",
        ([p, _]) => `translate(${xscale(p[xfield])},${yscale(p[yfield])})`
      )
      .attr("display", ([, cell]) =>
        !cell || -d3.polygonArea(cell) > 3000 ? null : "none"
      )
      .text(([p, _]) => p.name);
  };
}

function scales(stats, xfield, yfield, rfield) {
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

  var r;
  if (!isNaN(rfield)) {
    // if radius is a number, the scale is just a constant
    r = (_) => parseFloat(rfield);
  } else {
    r = d3
      .scaleLinear()
      .domain(d3.extent(stats, (s) => s[rfield]))
      .range([settings.minRadius, settings.maxRadius]);
  }

  return [x, y, r];
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

function points(svg, stats, xscale, yscale, rscale, xfield, yfield, rfield) {
  var useTeamColors = $("#teamcolors").checked;

  const container = svg.append("g").attr("class", "points");

  // points
  // https://observablehq.com/@d3/scatterplot-tour
  const points = container
    .selectAll("g")
    .data(stats, (d) => d.name)
    .join("g")
    .attr("data-player-name", (d) => d.name)
    .attr(
      "transform",
      (d) => `translate(${xscale(d[xfield])},${yscale(d[yfield])})`
    );
  if (useTeamColors) {
    points
      .append("circle")
      .attr("class", "outer")
      .attr("fill", (d) => teams[d.team].colors[0])
      .attr("r", (d) => rscale(d[rfield]));
    points
      .append("circle")
      .attr("class", "inner")
      .attr("fill", (d) => teams[d.team].colors[1])
      .attr("r", (d) => rscale(d[rfield]) / 2);
  } else {
    points
      .append("circle")
      .attr("class", "outer")
      .attr("fill", "#1f77b4")
      .attr("r", (d) => rscale(d[radius]));
  }

  return function (stats, xscale, yscale, rscale, xfield, yfield, rfield) {
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
              .attr("class", "outer")
              .attr("fill", (d) => teams[d.team].colors[0])
              .attr("r", (d) => rscale(d[rfield]));
            g.append("circle")
              .attr("class", "inner")
              .attr("fill", (d) => teams[d.team].colors[1])
              .attr("r", (d) => rscale(d[rfield]) / 2);
          } else {
            g.append("circle")
              .attr("class", "outer")
              .attr("fill", "#1f77b4")
              .attr("r", (d) => rscale(d[rfield]));
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
          // XXX: the problem here is that we need to update the radius of the
          // two circles inside the g, and I don't really know how to do that. I
          // think it's important that the sizes transition nicely instead of
          // jump to smaller?
          update.call((update) =>
            update
              .each((p, i, ns) => {
                d3.select(ns[i])
                  .select("circle.outer")
                  .transition()
                  .duration(settings.duration)
                  .attr("r", (d) => rscale(d[rfield]));
                d3.select(ns[i])
                  .select("circle.inner")
                  .transition()
                  .duration(settings.duration)
                  .attr("r", (d) => rscale(d[rfield]) / 2);
              })
              .transition()
              .attr(
                "transform",
                (d) => `translate(${xscale(d[xfield])},${yscale(d[yfield])})`
              )
              .duration(settings.duration)
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
// * organize all the inputs
//   * sections?
//   * ability to open and close sections?
//   * what's a comparable UI?
//     * alt: fuck it it's my UI I'll do what I like
// * remove draw button and just optimistically redraw?
// * show UI indication of legal filters
// * tooltip should display above the player label after transitions
//   * steps to repro: do a transition, then hover over a player with a bottom
//     label
// * permalinks to a graph with a given filter/year/resolution/etc
// * select multiple years
//   * view a set of players through years
// * nice transitions between years
// * highlight a player or particular set of players
//   * something like, one dot stays lit and the others go grey
// * small multiples by team?
// * teams instead of players
// * labels sometimes overlap each other, or dots
//   * collision detect after labelling?
// * there are a lot of stats - how to give the user better control of them?
//   * sorting, autocomplete? glossary?
// * UI for selecting players only on particular teams
// * ability to customize x and y domains
// * ability to customize dot size, or use it to represent a variable
// * handle players that are coincident better
//   * right now we just have to ensure we ignore null cells anywhere they're used
//   * what even is the right thing to do? I dunno
//  * sometimes labels are overlapping the circles
//  * the tooltip sometimes goes off the bottom, it should appear above the dot
//    when it's low
//  * would be cool to be able to set a linear or log scale
//    * right now we just choose linear by default but for example, if you
//      choose FT% as the circle size, you see that Andre Drummond looks tiny and
//      everybody else looks huge.
//    * if it were a log scale, the good shooters would jump out at you
// * should I thread a single transition object through all the transitions?
// * group up scales and fieldnames
function graph(stats, xfield, yfield, rfield) {
  const svg = d3.select("#canvas");

  var [x, y, r] = scales(stats, xfield, yfield, rfield);
  var [delaunay, voronoiCells] = calcVoronoi(stats, x, y, xfield, yfield);
  updateAxes = axes(svg, stats, x, y);
  updateAxisLabels = axisLabels(svg, xfield, yfield);
  updatePoints = points(svg, stats, x, y, r, xfield, yfield, rfield);
  updateLabels = pointLabels(
    svg,
    stats,
    x,
    y,
    r,
    xfield,
    yfield,
    rfield,
    voronoiCells
  );

  // https://observablehq.com/@d3/line-chart-with-tooltip
  var tooltip = svg.append("g").attr("class", "tooltip");

  svg.on("touchmove mousemove", (evt) =>
    hover(evt, tooltip, stats, x, y, xfield, yfield, delaunay, voronoiCells)
  );

  svg.on("touchend mouseleave", () => tooltip.call(callout, null));

  // https://observablehq.com/@d3/dot-plot
  return Object.assign(svg.node(), {
    update(stats, xfield, yfield, rfield) {
      y.domain(d3.reverse(d3.extent(stats, (s) => s[yfield])));
      x.domain(d3.extent(stats, (s) => s[xfield]));

      [x, y, r] = scales(stats, xfield, yfield, rfield);
      [delaunay, voronoiCells] = calcVoronoi(stats, x, y, xfield, yfield);
      updateAxes(stats, xfield, yfield, x, y);
      updateAxisLabels(xfield, yfield);
      updatePoints(stats, x, y, r, xfield, yfield, rfield);
      updateLabels(stats, x, y, r, xfield, yfield, rfield, voronoiCells);

      // If an event listener was previously registered for the same typename
      // on a selected element, the old listener is removed before the new
      // listener is added.
      // https://github.com/d3/d3-selection/blob/v2.0.0/README.md#selection_on
      svg.on("touchmove mousemove", (evt) => {
        return hover(
          evt,
          tooltip,
          stats,
          x,
          y,
          xfield,
          yfield,
          delaunay,
          voronoiCells
        );
      });

      // remove the tooltip and redraw it; otherwise it won't properly appear
      // above everything else. SVG has no z-order; last drawn thing wins
      tooltip.remove();
      tooltip = svg.append("g").attr("class", "tooltip");
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
    // TODO: only append fields to radius that make sense... float only maybe?
    if (["float", "ordinal"].indexOf(meta.type) != -1) {
      d3.select("#radius")
        .append("option")
        .attr("value", key)
        .attr("id", `staty_${key}`)
        .text(meta.name);
    }
  });
  d3.select("#statx_ts_pct").attr("selected", true);
  d3.select("#staty_usg_pct").attr("selected", true);
}

async function changeYear(evt) {
  const res = await fetch(`./data/${evt.target.value}/stats.json`);
  window.stats = await res.json();

  const xfield = $("#statx").value;
  const yfield = $("#staty").value;
  const rfield = $("#radius").value;

  d3.selectAll("#canvas").html("");
  const svg = graph(applyFilter(window.stats), xfield, yfield, rfield);
}

function changeUseTeamColors(evt, activeStats) {
  const xfield = $("#statx").value;
  const yfield = $("#staty").value;
  const rfield = $("#radius").value;

  d3.selectAll("#canvas").html("");
  graph(applyFilter(window.stats), xfield, yfield, rfield);
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

function updateSettings(evt) {
  settings.width = $("#settings-width").value;
  settings.height = $("#settings-height").value;
  settings.minRadius = $("#settings-min-radius").value;
  settings.maxRadius = $("#settings-max-radius").value;

  const xfield = $("#statx").value;
  const yfield = $("#staty").value;
  const rfield = $("#radius").value;

  d3.selectAll("#canvas").html("");
  graph(applyFilter(window.stats), xfield, yfield, rfield);
}

window.addEventListener("DOMContentLoaded", async (evt) => {
  const res = await fetch("./data/2021/stats.json");
  window.stats = await res.json();

  $("#settings-width").value = settings.width;
  $("#settings-height").value = settings.height;
  $("#settings-min-radius").value = settings.minRadius;
  $("#settings-max-radius").value = settings.maxRadius;

  prepare();

  const svg = graph(
    applyFilter(window.stats),
    "ts_pct",
    "usg_pct",
    $("#radius").value
  );
  // TODO: get the values from the select boxes; this makes it easier to test though
  $("#draw").addEventListener("click", () =>
    svg.update(
      activeStats,
      $("#statx").value,
      $("#staty").value,
      $("#radius").value
    )
  );
  $("#settings-width").addEventListener("change", updateSettings);
  $("#settings-height").addEventListener("change", updateSettings);
  $("#settings-min-radius").addEventListener("change", updateSettings);
  $("#settings-max-radius").addEventListener("change", updateSettings);
  $("#yearChooser").addEventListener("change", changeYear);
  $("#teamcolors").addEventListener("change", (evt) =>
    changeUseTeamColors(evt)
  );
  $("#applyFilter").addEventListener("click", () => {
    svg.update(
      applyFilter(window.stats),
      $("#statx").value,
      $("#staty").value,
      $("#radius").value
    );
  });
});
