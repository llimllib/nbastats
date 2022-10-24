import * as duckdb from "@duckdb/duckdb-wasm";

import { axisTop, axisRight } from "d3-axis";
import { pointer, select, selectAll } from "d3-selection";
import { polygonCentroid, polygonArea } from "d3-polygon";
import { Delaunay } from "d3-delaunay";
import { extent, reverse } from "d3-array";
import { scaleBand, scaleLinear, scaleRadial } from "d3-scale";
import { format } from "d3-format";

// This is needed for the .transition functions later on, see
// https://github.com/d3/d3/issues/3262 for details, such as they are. Ignore
// the "declared but never read" warning, it works by side effects I guess
import { transition } from "d3-transition";

const $ = (s) => document.querySelector(s);

const settings = {
  padding: { left: 60, top: 60, right: 40, bottom: 40 },
  width: 800,
  height: 800,
  dotRadius: 6,
  maxRadius: 16,
  minRadius: 4,
  duration: 750,
  domainPadding: 0.05,
};

// the environment variable is set by an esbuild define
window.DATA_URL = process.env.DATA_URL;

async function query(conn, query) {
  const table = await conn.query(query);
  return table.toArray().map((x) => x.toJSON());
}

function hover(event, tooltip, fields, delaunay, cells) {
  const [mx, my] = pointer(event, this);

  const nearest = delaunay.find(mx, my);
  const closestPlayer = cells[nearest][0];

  var rtext = "";
  if (statMeta[fields.r]) {
    rtext = "\n" + statMeta[fields.r].name + ": " + closestPlayer[fields.r];
  }

  tooltip
    .style("visibility", "visible")
    .html(
      `${closestPlayer.name}
${closestPlayer.team}
${statMeta[fields.x].name}: ${closestPlayer[fields.x]}
${statMeta[fields.y].name}: ${closestPlayer[fields.y]}${rtext}`
    )
    .style("top", event.pageY - 10 + "px")
    .style("left", event.pageX + 10 + "px");
}

function orient(pos, r) {
  // TODO: I added a transition to these, which worked for points that were
  // already present but failed for entering points. Figure out why so I can
  // have nice label transitions everywhere
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

function orientText(scales, fields) {
  return function ([player, cell]) {
    // if two players have the same stats on the selected dimension, the
    // voronoi cell will be null. Skip this player for now - do something more
    // intelligent with coincident players later
    if (!cell) {
      return;
    }
    const [cx, cy] = polygonCentroid(cell);
    const angle =
      (Math.round(
        (Math.atan2(
          cy - scales.y(player[fields.y]),
          cx - scales.x(player[fields.x])
        ) /
          Math.PI) *
          2
      ) +
        4) %
      4;
    const r = scales.r(player[fields.r]) * 1.1;
    select(this).call(
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

function calcVoronoi(stats, scales, fields) {
  const delaunay = Delaunay.from(
    stats,
    (p) => scales.x(p[fields.x]),
    (p) => scales.y(p[fields.y])
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

function pointLabels(svg, scales, fields, cells) {
  var orienter = orientText(scales, fields);

  const container = svg
    .append("g")
    .attr("class", "labels")
    .style("font", "10px sans-serif");

  container
    .selectAll("text")
    .data(cells, ([p, _]) => p.name + p.team)
    .join("text")
    .attr("class", "pointLabel")
    .each(orienter)
    .attr(
      "transform",
      ([p, _]) => `translate(${scales.x(p[fields.x])},${scales.y(p[fields.y])})`
    )
    .attr("display", ([, cell]) =>
      !cell || -polygonArea(cell) > 3000 ? null : "none"
    )
    .text(([p, _]) => p.name);

  return function (scales, fields, cells) {
    var orienter = orientText(scales, fields);

    // TODO the label immediately changes orientation instead of
    // transitioning nicely, though it does move with the point
    container
      .selectAll("text")
      .data(cells, ([p, _]) => p.name + p.team)
      .join("text")
      .transition()
      .duration(settings.duration)
      .each(orienter)
      .attr(
        "transform",
        ([p, _]) =>
          `translate(${scales.x(p[fields.x])},${scales.y(p[fields.y])})`
      )
      .attr("display", ([, cell]) =>
        !cell || -polygonArea(cell) > 3000 ? null : "none"
      )
      .text(([p, _]) => p.name);
  };
}

function paddedExtent(lst, fn, reversed) {
  var [min, max] = extent(lst, fn);
  if (reversed === undefined || !reversed) {
    return [
      min * (1 - settings.domainPadding),
      max * (1 + settings.domainPadding),
    ];
  } else {
    return [
      max * (1 + settings.domainPadding),
      min * (1 - settings.domainPadding),
    ];
  }
}

function makeScales(stats, fields) {
  const xAxType = statMeta[fields.x].type;
  const xreversed = statMeta[fields.x].reversed;
  var x;
  if (xAxType == "categorical") {
    const domain = new Set(stats.map((p) => p[fields.x]));
    x = scaleBand(domain, [
      settings.padding.left,
      settings.width - settings.padding.right,
    ]);
  } else {
    x = scaleLinear()
      .domain(paddedExtent(stats, (s) => s[fields.x], xreversed))
      .range([settings.padding.left, settings.width - settings.padding.right]);
  }

  const yAxType = statMeta[fields.y].type;
  const yreversed = statMeta[fields.y].reversed;
  var y;
  if (yAxType == "categorical") {
    const domain = new Set(stats.map((p) => p[fields.y]));
    y = scaleBand(domain, [
      settings.padding.top,
      settings.height - settings.padding.bottom,
    ]);
  } else {
    y = scaleLinear()
      .domain(reverse(paddedExtent(stats, (s) => s[fields.y], yreversed)))
      .range([settings.padding.top, settings.height - settings.padding.bottom]);
  }

  var r;
  if (!isNaN(fields.r)) {
    // if radius is a number, the scale is just a constant
    r = (_) => parseFloat(fields.r);
  } else {
    r = scaleRadial()
      .domain(extent(stats, (s) => s[fields.r]))
      .range([settings.minRadius, settings.maxRadius]);
  }

  return { x: x, y: y, r: r };
}

// https://observablehq.com/@d3/styled-axes
function axes(svg, scales) {
  var xaxis = axisTop(scales.x)
    .tickSize(settings.height - settings.padding.top)
    .tickFormat(format(".2r"));

  const xaxisg = svg
    .append("g")
    .attr("transform", `translate(0, ${settings.height - 20})`)
    .attr("class", "xaxis")
    .call(xaxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
    .call((g) => g.selectAll(".tick text").attr("y", 0).attr("dx", -15));

  const yaxis = axisRight(scales.y)
    .tickSize(settings.width - settings.padding.right)
    .tickFormat(format(".2r"));

  const yaxisg = svg
    .append("g")
    .attr("transform", `translate(20, 0)`)
    .attr("class", "yaxis")
    .call(yaxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
    .call((g) => g.selectAll(".tick text").attr("dy", -4).attr("x", 4));

  // return an update function
  return function (scales, fields) {
    const xAxType = statMeta[fields.x].type;
    if (xAxType == "categorical") {
      xaxis.scale(scales.x).tickFormat((p) => p);
    } else {
      xaxis.scale(scales.x).tickFormat(format(".2r"));
    }

    const yAxType = statMeta[fields.y].type;
    if (yAxType == "categorical") {
      yaxis.scale(scales.y).tickFormat((p) => p);
    } else {
      yaxis.scale(scales.y).tickFormat(format(".2r"));
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
      .on(
        "start",
        () => yaxisg.select(".domain").remove() // https://stackoverflow.com/a/50254240/42559
      )
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0.1))
      // this line causes many <<Error: <text> attribute dy: Expected length,
      // "NaN".>> for unknown reasons, but oddly it seems to work fine
      .call((g) => g.selectAll(".tick text").attr("x", 4).attr("dy", -4));
  };
}

function points(svg, stats, scales, fields) {
  var useTeamColors = $("#teamcolors").checked;

  const container = svg.append("g").attr("class", "points");

  // points
  // https://observablehq.com/@d3/scatterplot-tour
  const points = container
    .selectAll("g")
    .data(stats, (d) => d.name + d.team)
    .join("g")
    .attr("data-player-name", (d) => d.name)
    .attr(
      "transform",
      (d) => `translate(${scales.x(d[fields.x])},${scales.y(d[fields.y])})`
    );
  if (useTeamColors) {
    points
      .append("circle")
      .attr("class", "outer")
      .attr("fill", (d) => teams[d.team].colors[0])
      .attr("r", (d) => scales.r(d[fields.r]));
    points
      .append("circle")
      .attr("class", "inner")
      .attr("fill", (d) => teams[d.team].colors[1])
      .attr("r", (d) => scales.r(d[fields.r]) / 2);
  } else {
    points
      .append("circle")
      .attr("class", "outer")
      .attr("fill", "#1f77b4")
      .attr("r", (d) => scales.r(d[fields.r]));
  }

  return function (stats, scales, fields) {
    useTeamColors = $("#teamcolors").checked;
    selectAll(".player_label").remove();

    // TODO: does this handle entries and exits?
    container
      .selectAll("g")
      .data(stats, (d) => d.name + d.team)
      .join(
        (enter) => {
          var g = enter.append("g");
          if (useTeamColors) {
            g.append("circle")
              .attr("class", "outer")
              .attr("fill", (d) => teams[d.team].colors[0])
              .attr("r", (d) => scales.r(d[fields.r]));
            g.append("circle")
              .attr("class", "inner")
              .attr("fill", (d) => teams[d.team].colors[1])
              .attr("r", (d) => scales.r(d[fields.r]) / 2);
          } else {
            g.append("circle")
              .attr("class", "outer")
              .attr("fill", "#1f77b4")
              .attr("r", (d) => scales.r(d[fields.r]));
          }
          g.call((enter) => {
            enter
              .transition()
              .duration(settings.duration)
              .attr(
                "transform",
                (d) =>
                  `translate(${scales.x(d[fields.x])},${scales.y(d[fields.y])})`
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
              .each((_, i, ns) => {
                select(ns[i])
                  .select("circle.outer")
                  .transition()
                  .duration(settings.duration)
                  .attr("r", (d) => scales.r(d[fields.r]));
                select(ns[i])
                  .select("circle.inner")
                  .transition()
                  .duration(settings.duration)
                  .attr("r", (d) => scales.r(d[fields.r]) / 2);
              })
              .transition()
              .attr(
                "transform",
                (d) =>
                  `translate(${scales.x(d[fields.x])},${scales.y(d[fields.y])})`
              )
              .duration(settings.duration)
          ),
        (exit) => exit.remove()
      );
  };
}

function axisLabels(svg, fields) {
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
    .text("→" + statMeta[fields.x].name);
  const ylabel = svg
    .append("text")
    .attr("class", "y label")
    .attr("text-anchor", "left")
    .attr("x", 15)
    .attr("y", 40)
    .text("↑" + statMeta[fields.y].name);
  const rlabel = svg
    .append("text")
    .attr("class", "r label")
    .attr("text-anchor", "left")
    .attr("x", 10)
    .attr("y", 20)
    .style("display", "none");

  if (isNaN(fields.r)) {
    rlabel.text("⬤ " + statMeta[fields.r].name).style("display", undefined);
  } else {
    rlabel.style("display", "none");
  }

  return function (fields) {
    xlabel.text("→" + statMeta[fields.x].name);
    ylabel.text("↑ " + statMeta[fields.y].name);
    // don't add a radius label if the value is constant
    if (isNaN(fields.r)) {
      rlabel.text("⬤ " + statMeta[fields.r].name).style("display", undefined);
    } else {
      rlabel.style("display", "none");
    }
  };
}

// generate a normally-distributed value with a Box-Muller transform
// https://stackoverflow.com/a/49434653/42559
function randn_bm() {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
  return num;
}

function loading() {
  const svg = select("#canvas");
  const r = 8;
  let t = 0;

  const centerx = settings.width / 2;
  const centery = settings.height / 2;
  const circleGroup = svg
    .append("g")
    .attr("transform", `translate(${centerx}, ${centery})`);
  const circles = circleGroup.append("g");
  const textGroup = svg.append("g");

  // number of circles around the... circle
  const nCircles = 16;
  // radius of the circle around the center
  const groupr = 100;
  // amount to bounce the circles
  const bounce = 100;
  // helpful constant
  const twopi = Math.PI * 2;

  const randcircle = () => {
    for (let i = 0; i < nCircles; i++) {
      let teamNames = Object.keys(teams);
      let team = teams[teamNames[Math.floor(Math.random() * teamNames.length)]];
      circles
        .append("circle")
        .attr(
          "cx",
          (groupr + ((t + i * 5) % bounce)) * Math.sin((twopi / nCircles) * i)
        )
        .attr(
          "cy",
          (groupr + ((t + i * 5) % bounce)) * Math.cos((twopi / nCircles) * i)
        )
        .attr("i", i)
        .attr("fill", team.colors[0])
        .attr("r", r);
      circles
        .append("circle")
        .attr(
          "cx",
          (groupr + ((t + i * 5) % bounce)) * Math.sin((twopi / nCircles) * i)
        )
        .attr(
          "cy",
          (groupr + ((t + i * 5) % bounce)) * Math.cos((twopi / nCircles) * i)
        )
        .attr("i", i)
        .attr("fill", team.colors[1])
        .attr("r", r / 2);
    }
  };

  const loadText = textGroup
    .append("text")
    .attr("text-anchor", "middle")
    .attr("x", settings.width * randn_bm())
    .attr("y", settings.height * randn_bm())
    .attr("font-family", "sans-serif")
    .attr("font-size", 25 + "px")
    .attr("font-weight", "bold")
    .attr("fill", "grey")
    .text("loading");

  randcircle();

  let dx = 2;
  let dy = -2;

  const movetext = () => {
    let x = +loadText.attr("x");
    let y = +loadText.attr("y");
    if (x + dx > settings.width - 100 || x + dx < 100) {
      dx = -dx;
    }
    if (y + dy > settings.height - 20 || y + dy < 20) {
      dy = -dy;
    }

    loadText
      .attr("x", x + dx)
      .attr("y", y + dy)
      .attr("fill", `rgb(${t % 255}, ${(t + 60) % 255}, ${(t + 120) % 255})`);
  };

  return setInterval(() => {
    movetext();
    circles.attr("transform", `rotate(${t / 10})`);
    circles
      .selectAll("circle")
      .attr("cx", (_, idx, nodes) => {
        // the d3 docs suggest that `this` should be nodes[idx], but I'm
        // getting window instead
        const me = select(nodes[idx]);
        const i = +me.attr("i");
        return (
          (groupr + Math.abs(Math.sin(t / 1000 + i / nCircles)) * bounce) *
          Math.sin((twopi / nCircles) * i)
        );
      })
      .attr("cy", (_, idx, nodes) => {
        const me = select(nodes[idx]);
        const i = +me.attr("i");
        return (
          (groupr + Math.abs(Math.sin(t / 1000 + i / nCircles) * bounce)) *
          Math.cos((twopi / nCircles) * i)
        );
      });
    t += 10;
  }, 10);
}

// stats should be a list of player objects
function graph(stats, fields) {
  const svg = select("#canvas");
  svg.selectAll("*").remove();

  var scales = makeScales(stats, fields);
  var [delaunay, voronoiCells] = calcVoronoi(stats, scales, fields);
  const updateAxes = axes(svg, scales);
  const updateAxisLabels = axisLabels(svg, fields);
  const updatePoints = points(svg, stats, scales, fields);
  const updateLabels = pointLabels(svg, scales, fields, voronoiCells);

  const tooltip = select(".tooltip");

  svg.append("g").attr("class", "titleg");

  svg.on("touchmove mousemove", (evt) =>
    hover(evt, tooltip, fields, delaunay, voronoiCells)
  );

  svg.on("touchend mouseleave", () => tooltip.style("visibility", "hidden"));

  // https://observablehq.com/@d3/dot-plot
  return Object.assign(svg.node(), {
    update(stats, fields) {
      scales.y.domain(
        reverse(
          paddedExtent(stats, (s) => s[fields.y], statMeta[fields.y].reversed)
        )
      );
      scales.x.domain(
        paddedExtent(stats, (s) => s[fields.x], statMeta[fields.x].reversed)
      );

      scales = makeScales(stats, fields);
      [delaunay, voronoiCells] = calcVoronoi(stats, scales, fields);
      updateAxes(scales, fields);
      updateAxisLabels(fields);
      updatePoints(stats, scales, fields);
      updateLabels(scales, fields, voronoiCells);

      // If an event listener was previously registered for the same typename
      // on a selected element, the old listener is removed before the new
      // listener is added.
      // https://github.com/d3/selection/blob/v2.0.0/README.md#selection_on
      svg.on("touchmove mousemove", (evt) => {
        return hover(evt, tooltip, fields, delaunay, voronoiCells);
      });
    },
  });
}

const statMeta = {
  pos: {
    name: "Position",
    type: "categorical",
  },
  age: {
    name: "Age",
    type: "numeric",
  },
  g: {
    name: "Games",
    type: "numeric",
  },
  gs: {
    name: "Games Started",
    type: "numeric",
  },
  mp: {
    name: "Minutes Played",
    type: "numeric",
  },
  fg: {
    name: "Field Goals Made",
    type: "numeric",
  },
  fga: {
    name: "Field Goals Attempted",
    type: "numeric",
  },
  fg_pct: {
    name: "Field Goal %",
    type: "numeric",
  },
  fg3: {
    name: "3pt Field Goals Made",
    type: "numeric",
  },
  fg3a: {
    name: "3pt Field Goals Attempted",
    type: "numeric",
  },
  fg3_pct: {
    name: "3pt Field Goal %",
    type: "numeric",
  },
  fg2: {
    name: "2pt Field Goals Made",
    type: "numeric",
  },
  fg2a: {
    name: "2pt Field Goals Attempted",
    type: "numeric",
  },
  fg2_pct: {
    name: "2pt Field Goal %",
    type: "numeric",
  },
  efg_pct: {
    name: "Effective Field Goal %",
    type: "numeric",
  },
  ft: {
    name: "Free Throws Made",
    type: "numeric",
  },
  fta: {
    name: "Free Throw Attempts",
    type: "numeric",
  },
  ft_pct: {
    name: "Free Throw %",
    type: "numeric",
  },
  orb: {
    name: "Offensive Rebounds",
    type: "numeric",
  },
  drb: {
    name: "Defensive Rebounds",
    type: "numeric",
  },
  trb: {
    name: "Total Rebounds",
    type: "numeric",
  },
  ast: {
    name: "Assists",
    type: "numeric",
  },
  stl: {
    name: "Steals",
    type: "numeric",
  },
  blk: {
    name: "Blocks",
    type: "numeric",
  },
  tov: {
    name: "Turnovers",
    type: "numeric",
  },
  pf: {
    name: "Personal Fouls",
    type: "numeric",
  },
  pts: {
    name: "Points",
    type: "numeric",
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
    type: "numeric",
  },
  ts_pct: {
    name: "True Shooting %",
    type: "numeric",
  },
  fg3a_per_fga_pct: {
    name: "3pt Attempted per Field Goal Attempted",
    type: "numeric",
  },
  fta_per_fga_pct: {
    name: "Free Throw Attempted per Field Goal Attempted",
    type: "numeric",
  },
  orb_pct: {
    name: "Offensive Rebound %",
    type: "numeric",
  },
  drb_pct: {
    name: "Defensive Rebound %",
    type: "numeric",
  },
  trb_pct: {
    name: "Total Rebound %",
    type: "numeric",
  },
  ast_pct: {
    name: "Assist %",
    type: "numeric",
  },
  stl_pct: {
    name: "Steal %",
    type: "numeric",
  },
  blk_pct: {
    name: "Block %",
    type: "numeric",
  },
  tov_pct: {
    name: "Turnover %",
    type: "numeric",
  },
  usg_pct: {
    name: "Usage %",
    type: "numeric",
  },
  ows: {
    name: "Offensive Win Shares",
    type: "numeric",
  },
  dws: {
    name: "Defensive Win Shares",
    type: "numeric",
  },
  ws: {
    name: "Win Shares",
    type: "numeric",
  },
  ws_per_48: {
    name: "Win Shares per 48 minutes",
    type: "numeric",
  },
  obpm: {
    name: "Offensive Box Plus-Minus",
    type: "numeric",
  },
  dbpm: {
    name: "Defensive Box Plus-Minus",
    type: "numeric",
  },
  bpm: {
    name: "Box Plus-Minus",
    type: "numeric",
  },
  vorp: {
    name: "VORP",
    type: "numeric",
  },
  fg_per_mp: {
    name: "Field Goals per 36 minutes",
    type: "numeric",
  },
  fga_per_mp: {
    name: "Field Goals Attempted per 36 minutes",
    type: "numeric",
  },
  fg3_per_mp: {
    name: "3pt Field Goals per 36 minutes",
    type: "numeric",
  },
  fg3a_per_mp: {
    name: "3pt Field Goals Attempted per 36 minutes",
    type: "numeric",
  },
  fg2_per_mp: {
    name: "2pt Field Goals per 36 minutes",
    type: "numeric",
  },
  fg2a_per_mp: {
    name: "2pt Field Goals Attempted per 36 minutes",
    type: "numeric",
  },
  ft_per_mp: {
    name: "Free Throws per 36 minutes",
    type: "numeric",
  },
  fta_per_mp: {
    name: "Free Throws Attempted per 36 minutes",
    type: "numeric",
  },
  orb_per_mp: {
    name: "Offensive Rebounds per 36 minutes",
    type: "numeric",
  },
  drb_per_mp: {
    name: "Defensive Rebounds per 36 minutes",
    type: "numeric",
  },
  trb_per_mp: {
    name: "Rebounds per 36 minutes",
    type: "numeric",
  },
  ast_per_mp: {
    name: "Assists per 36 minutes",
    type: "numeric",
  },
  stl_per_mp: {
    name: "Steals per 36 minutes",
    type: "numeric",
  },
  blk_per_mp: {
    name: "Blocks per 36 minutes",
    type: "numeric",
  },
  tov_per_mp: {
    name: "Turnovers per 36 minutes",
    type: "numeric",
  },
  pf_per_mp: {
    name: "Personal Fouls per 36 minutes",
    type: "numeric",
  },
  pts_per_mp: {
    name: "Points per 36 minutes",
    type: "numeric",
  },
  fg_per_poss: {
    name: "Fields Goals per 100 possessions",
    type: "numeric",
  },
  fga_per_poss: {
    name: "Field Goals Attempted per 100 possessions",
    type: "numeric",
  },
  fg3_per_poss: {
    name: "3pt Field Goals per 100 possessions",
    type: "numeric",
  },
  fg3a_per_poss: {
    name: "3pt Field Goal Attempts per 100 possessions",
    type: "numeric",
  },
  fg2_per_poss: {
    name: "2pt Field Goals per 100 possessions",
    type: "numeric",
  },
  fg2a_per_poss: {
    name: "2p Field Goal Attempts per 100 possessions",
    type: "numeric",
  },
  ft_per_poss: {
    name: "Free Throws per 100 possessions",
    type: "numeric",
  },
  fta_per_poss: {
    name: "Free Throws Attempted per 100 possessions",
    type: "numeric",
  },
  orb_per_poss: {
    name: "Offensive Rebounds per 100 possessions",
    type: "numeric",
  },
  drb_per_poss: {
    name: "Defensive Rebounds per 100 possessions",
    type: "numeric",
  },
  trb_per_poss: {
    name: "Rebounds per 100 possessions",
    type: "numeric",
  },
  ast_per_poss: {
    name: "Assists per 100 possessions",
    type: "numeric",
  },
  stl_per_poss: {
    name: "Steals per 100 possessions",
    type: "numeric",
  },
  blk_per_poss: {
    name: "Blocks per 100 possessions",
    type: "numeric",
  },
  tov_per_poss: {
    name: "Turnovers per 100 possessions",
    type: "numeric",
  },
  pf_per_poss: {
    name: "Personal Fouls per 100 possessions",
    type: "numeric",
  },
  pts_per_poss: {
    name: "Points per 100 possessions",
    type: "numeric",
  },
  off_rtg: {
    name: "Offensive Rating",
    type: "numeric",
  },
  def_rtg: {
    name: "Defensive Rating",
    type: "numeric",
    reversed: true,
  },
  raptor_defense: {
    name: "Raptor Defensive Rating",
    type: "numeric",
  },
  raptor_offense: {
    name: "Raptor Offensive Rating",
    type: "numeric",
  },
  war_reg_season: {
    name: "538 Wins Above Replacement",
    type: "numeric",
  },
  mp_per_g: {
    name: "Minutes per Game",
    type: "numeric",
  },
  fg_per_g: {
    name: "Field Goals per Game",
    type: "numeric",
  },
  fga_per_g: {
    name: "Field Goal Attempts per Game",
    type: "numeric",
  },
  fg3_per_g: {
    name: "3pt Field Goals per Game",
    type: "numeric",
  },
  fg3a_per_g: {
    name: "3pt Field Goal Attempts per Game",
    type: "numeric",
  },
  fg2_per_g: {
    name: "2pt Field Goals per Game",
    type: "numeric",
  },
  fg2a_per_g: {
    name: "2pt Field Goal Attempts per Game",
    type: "numeric",
  },
  ft_per_g: {
    name: "Free Throws per Game",
    type: "numeric",
  },
  fta_per_g: {
    name: "Free Throws Attempted per Game",
    type: "numeric",
  },
  orb_per_g: {
    name: "Offensive Rebounds per Game",
    type: "numeric",
  },
  drb_per_g: {
    name: "Defensive Rebounds per Game",
    type: "numeric",
  },
  trb_per_g: {
    name: "Total Rebounds per Game",
    type: "numeric",
  },
  ast_per_g: {
    name: "Assists per Game",
    type: "numeric",
  },
  stl_per_g: {
    name: "Steals per Game",
    type: "numeric",
  },
  blk_per_g: {
    name: "Blocks per Game",
    type: "numeric",
  },
  tov_per_g: {
    name: "Turnovers per Game",
    type: "numeric",
  },
  pf_per_g: {
    name: "Personal Fouls per Game",
    type: "numeric",
  },
  pts_per_g: {
    name: "Points per Game",
    type: "numeric",
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
    colors: ["#888888", "#888888"],
  },
  UTA: { name: "Utah Jazz", colors: ["#002B5C", "#F9A01B", "#00471B"] },
  WAS: {
    name: "Washington Wizards",
    colors: ["#002B5C", "#E31837", "#C4CED4", "#FFFFFF"],
  },
};

function prepare() {
  Object.keys(statMeta)
    .sort()
    .forEach((key) => {
      const meta = statMeta[key];
      if (meta.name == "") {
        return;
      }
      select("#statx")
        .append("option")
        .attr("value", key)
        .attr("id", `statx_${key}`)
        .text(meta.name);
      select("#staty")
        .append("option")
        .attr("value", key)
        .attr("id", `staty_${key}`)
        .text(meta.name);
      // TODO: only append fields to radius that make sense... float only maybe?
      if (["numeric"].indexOf(meta.type) != -1) {
        select("#radius")
          .append("option")
          .attr("value", key)
          .attr("id", `staty_${key}`)
          .text(meta.name);
      }
    });
  select("#statx_ts_pct").attr("selected", true);
  select("#staty_usg_pct").attr("selected", true);
}

async function changeYear(_) {
  const fields = {
    x: $("#statx").value,
    y: $("#staty").value,
    r: $("#radius").value,
  };

  selectAll("#canvas").html("");
  graph(await applyFilter(window.conn), fields);
}

async function changeUseTeamColors(_) {
  const fields = {
    x: $("#statx").value,
    y: $("#staty").value,
    r: $("#radius").value,
  };

  selectAll("#canvas").html("");
  graph(await applyFilter(window.conn), fields);
}

// ultimately if we have more functions we want to support we could actually
// parse a query language? for now let's hack like whoa
//
// TODO: instead of \w we should use whatever the valid characters are in a
// postgres column name? but honestly all of our column names are very simple
// so who cares
const QUANTILE_RE = /quantile\((\w+)\)/;
function parseQuantiles(filter) {
  const quantiles = [];
  let res = null;
  while ((res = QUANTILE_RE.exec(filter)) !== null) {
    let [call, field] = res;
    filter = filter.replace(call, `_${field}_ntile`);
    quantiles.push(field);
  }
  console.log(filter);
  return [filter, quantiles];
}

async function applyFilter(conn) {
  // select the top 5 percentile in fga, over all years:
  // https://duckdb.org/2021/10/13/windowing.html
  //
  // with player_stats as (
  //    select *,
  //           ntile(100) over (order by fga) as fga_pctile
  //    from stats
  // )
  // select * from player_stats
  // where fga_pctile > 95;
  const queryCondition = $("#filter").value;

  const year = $("#yearChooser").value;

  const [cond, medians] = parseQuantiles(queryCondition);

  let stats = {};
  if (medians.length > 0) {
    const median_stmts = medians
      .map((x) => `ntile(100) OVER (ORDER BY ${x}) AS _${x}_ntile`)
      .join(", ");
    stats = await query(
      conn,
      `
      WITH mstats AS (
        SELECT *, ${median_stmts}
        FROM stats
        WHERE year='${year}'
      )
      SELECT *
      FROM mstats
      WHERE year='${year}' and ${cond}`
    );
  } else {
    stats = await query(
      conn,
      `
      SELECT *
      FROM stats
      WHERE year='${year}' and ${queryCondition}`
    );
  }
  window.stats = stats;
  return stats;
}

async function updateSettings(_evt) {
  settings.width = $("#settings-width").value;
  settings.height = $("#settings-height").value;
  settings.minRadius = $("#settings-min-radius").value;
  settings.maxRadius = $("#settings-max-radius").value;

  const fields = {
    x: $("#statx").value,
    y: $("#staty").value,
    r: $("#radius").value,
  };

  selectAll("#canvas").html("");
  graph(await applyFilter(window.conn), fields);
}

function updateAxes(svg) {
  return async (_evt) => {
    svg.update(await applyFilter(window.conn), {
      x: $("#statx").value,
      y: $("#staty").value,
      r: $("#radius").value,
    });
  };
}

function centeredText(txt, x, y, size, lines) {
  const h = txt
    .append("text")
    .attr("y", y)
    .attr("font-family", "sans-serif")
    .attr("font-size", size + "px")
    .attr("font-weight", $("#bold").checked ? "bold" : "normal")
    .attr("fill", "black")
    .attr("transform", `translate(${x})`);

  let dy = size;
  lines.forEach((l) => {
    h.append("tspan")
      .attr("x", "0")
      .attr("text-anchor", "middle")
      .attr("dy", dy)
      .text(l);
  });
}

function changeTitle(svg) {
  const handler = (_evt) => {
    let lines = select("#title").node().value.split("\n");
    const titleg = select(svg).select(".titleg");
    titleg.node().innerHTML = "";
    centeredText(titleg, settings.width / 2, 30, 15, lines);
  };
  handler();
  return handler;
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  const intervalID = loading();

  // I'm not serving this from my own CDN because it seems pretty complicated
  // to do so due to web workers not being able to make CORS requests without
  // annoying workarounds, see:
  //
  // https://github.com/duckdb/duckdb-wasm/discussions/419#discussioncomment-1704798
  // https://stackoverflow.com/questions/21913673/execute-web-worker-from-different-origin
  const JSDELIVR_BUNDLES = duckdb.getJsDelivrBundles();
  const bundle = await duckdb.selectBundle(JSDELIVR_BUNDLES);
  const worker_url = URL.createObjectURL(
    new Blob([`importScripts("${bundle.mainWorker}");`], {
      type: "text/javascript",
    })
  );

  // Instantiate the asynchronus version of DuckDB-wasm
  const worker = new Worker(worker_url);
  const logger = new duckdb.ConsoleLogger();
  const db = new duckdb.AsyncDuckDB(logger, worker);
  await db.instantiate(bundle.mainModule, bundle.pthreadWorker);

  // set a global db variable for easy access
  window.db = db;

  const conn = await db.connect();
  window.conn = conn;

  console.log("creating stats table");
  await conn.query(`
      CREATE TABLE stats AS
          SELECT * FROM "${window.DATA_URL}/stats.parquet"
  `);

  // TODO: pull the updated date from the parquet file once duckdb supports
  //       pulling metadata out of parquet files. Until then, we will pull
  //       the data from a separate file.
  // - https://github.com/duckdb/duckdb/issues/2534
  try {
    const res = await fetch(`${window.DATA_URL}/metadata.json`);
    const j = await res.json();
    const updated = j["updated"];
    console.log("updated: ", updated, "j:", j);
    $("#updated").innerHTML =
      "updated " +
      new Intl.DateTimeFormat([], {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(Date.parse(updated));
  } catch (e) {
    console.log("unable to fetch updated date:", e);
  }

  $("#settings-width").value = settings.width;
  $("#settings-height").value = settings.height;
  $("#settings-min-radius").value = settings.minRadius;
  $("#settings-max-radius").value = settings.maxRadius;

  prepare();

  clearInterval(intervalID);
  const svg = graph(await applyFilter(conn), {
    x: "ts_pct",
    y: "usg_pct",
    r: $("#radius").value,
  });
  $("#settings-width").addEventListener("change", updateSettings);
  $("#settings-height").addEventListener("change", updateSettings);
  $("#settings-min-radius").addEventListener("change", updateSettings);
  $("#settings-max-radius").addEventListener("change", updateSettings);
  $("#teamcolors").addEventListener("change", (evt) =>
    changeUseTeamColors(evt)
  );
  $("#statx").addEventListener("change", updateAxes(svg));
  $("#staty").addEventListener("change", updateAxes(svg));
  $("#radius").addEventListener("change", updateAxes(svg));
  $("#applyFilter").addEventListener("click", updateAxes(svg));
  $("#yearChooser").addEventListener("change", changeYear);
  $("#title").addEventListener("input", changeTitle(svg));
  $("#title").addEventListener("change", changeTitle(svg));
  $("#bold").addEventListener("change", changeTitle(svg));
});
