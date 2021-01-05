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

// stats should be a list of player objects
// TODO
// * need to be able to set the variables to be compared
// * highlight a player or particular set of players
// * small multiples by team?
// * customizable filter
//   * user filter querying?
// * color points by teams / positions / other
//   * https://observablehq.com/@d3/scatterplot-with-shapes
// * nice transitions when you change the statistics
// * teams instead of players
function graph(stats) {
  const svg = d3.select("#canvas");

  // XXX: these are hard-coded; scale them by browser width
  const width = 1024;
  const height = 768;

  const padding = { left: 40, top: 20, right: 20, bottom: 40 };

  // scales
  const x = d3
    .scaleLinear()
    .domain(d3.extent(stats, (s) => s.ts_pct))
    .range([padding.left, width - padding.right]);
  const y = d3
    .scaleLinear()
    .domain(d3.reverse(d3.extent(stats, (s) => s.usg_pct)))
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
    .call(xaxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
    .call((g) =>
      g.selectAll(".tick text").attr("y", 0).attr("dy", 0).attr("dx", 15)
    );

  const yaxis = d3.axisRight(y).tickSize(width);

  const yaxisg = svg
    .append("g")
    .attr("transform", `translate(30, 0)`)
    .call(yaxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
    .call((g) => g.selectAll(".tick text").attr("x", 4).attr("dy", -4));

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
    .text("True Shooting %");
  const ylabel = svg
    .append("text")
    .attr("class", "y label")
    .attr("text-anchor", "middle")
    .attr("x", 10)
    .attr("y", height / 2)
    .attr("transform", `rotate(90,10,${height / 2})`) // https://stackoverflow.com/a/11257082
    .text("Usage %");

  // points
  // https://observablehq.com/@d3/scatterplot-tour
  const points = svg
    .append("g")
    .attr("fill", "#1f77b4")
    .selectAll("circle")
    .data(stats, (d) => {
      console.log(d.name, d.ts_pct, d.usg_pct);
      return d.name;
    })
    .join("circle")
    .attr("cx", (d) => x(d.ts_pct))
    .attr("cy", (d) => y(d.usg_pct))
    .attr("r", "4");

  // https://observablehq.com/@d3/line-chart-with-tooltip
  // TODO: tooltip overflows right bounds of the chart
  const tooltip = svg.append("g");

  svg.on("touchmove mousemove", (evt) =>
    hover(evt, tooltip, stats, x, y, "ts_pct", "usg_pct")
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

      // This is giving lots of <<Error: <text> attribute dy: Expected length,
      // "NaN".>> no idea what that means
      // TODO: make this axis work for categorical variables
      xaxisg
        .transition()
        .duration(duration)
        .call(xaxis)
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
        .call((g) => g.selectAll(".tick text").attr("y", 0).attr("dx", 15));

      yaxisg
        .transition()
        .duration(duration)
        .call(yaxis)
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
        .call((g) => g.selectAll(".tick text").attr("x", 4).attr("dy", -4));

      xlabel.text(statMeta[xfield].name);
      ylabel.text(statMeta[yfield].name);

      // TODO: does this handle entries and exits?
      points
        .transition()
        .duration(duration)
        .attr("cy", (d) => y(d[yfield]))
        .attr("cx", (d) => x(d[xfield]));
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

window.addEventListener("DOMContentLoaded", (evt) => {
  prepare();

  // TODO configurable. Better to just take the top _n_ percentile or something?
  // TODO idea: automatically label points that have enough space to be labelled
  //       https://observablehq.com/@d3/voronoi-labels
  const gstats = stats.filter((x) => x.fga > 30);

  const svg = graph(gstats);
  // TODO: get the values from the select boxes; this makes it easier to test though
  document
    .querySelector("#draw")
    .addEventListener("click", () =>
      svg.update(
        gstats,
        d3.select("#statx").node().value,
        d3.select("#staty").node().value
      )
    );
});
