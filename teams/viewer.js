const $ = (s) => document.querySelector(s);

const settings = {
  padding: { left: 60, top: 60, right: 40, bottom: 40 },
  width: 800,
  height: 800,
  size: 800,
  logoSize: 50,
};

// stolen from https://next.observablehq.com/@duynguyen1678/propublicas-covid-arrow-map
// no idea where it came from
function arrowPath(r, l, w, b, h, { x0 = 0, y0 = 0 } = {}) {
  // r: base radius
  // l: length of line
  // w: (stroke-)width of line
  // b: base length of tip. Make sure that r < b
  // h: height of tip

  const sin = w / r / 2;
  const x = r * Math.sqrt(1 - sin * sin);
  const hb = b / 2;
  return (
    `M${x0},${y0 + hb}` +
    `a${r},${r} 0 0 1 ${r + x},${-w / 2}` +
    `h${l}` +
    `v${-(hb - w / 2)}` +
    `l${h},${hb}` +
    `l${-h},${hb}` +
    `v${-(hb - w / 2)}` +
    `h${-l}` +
    `A${r},${r} 0 0 1 ${x0},${y0 + hb}`
  );
}

// stats should be a list of player objects
function graph(stats) {
  const svg = d3.select('#canvas');


  // Rotate the stats through 45* and use that as the domain
  const sin_th = Math.cos(Math.PI / 4),
    cos_th = Math.cos(Math.PI / 4),
    rot_stats = stats.map(t => [t.off_rtg, t.def_rtg])
      .map(([x, y]) => [x * cos_th - y * sin_th, x * sin_th + y * cos_th]),
    toext = d3.extent(rot_stats, d => d[0]),
    tdext = d3.extent(rot_stats, d => d[1]);

  const oext = d3.extent(stats, d => d.off_rtg),
    omargin = (oext[1] - oext[0]) * .2,
    xmin = oext[0] - omargin,
    xmax = oext[1] + omargin;

  const x = d3.scaleLinear()
    .domain([xmax, xmin])
    .range([0, settings.size]);

  const dext = d3.extent(stats, d => d.def_rtg),
    dmargin = (dext[1] - dext[0]) * .2,
    ymin = dext[0] - dmargin,
    ymax = dext[1] + dmargin;

  const y = d3.scaleLinear()
    .domain([ymin, ymax])
    .range([0, settings.size]);

  const xAxis = g => g
    .attr("transform", `translate(0,${settings.size / 2})`)
    .call(d3.axisBottom(x).tickSizeOuter(0));

  const yAxis = g => g
    .attr("transform", `translate(${settings.size / 2},0)`)
    .call(d3.axisLeft(y).tickSizeOuter(0));

  const g = svg.append("g")
    .attr("transform", `rotate(45, ${settings.size / 2}, ${settings.size / 2})`);

  g.append("g")
    .attr("class", "xticks")
    .selectAll("line")
    .data([100, 105, 110, 115, 120, 125])
    .join("line")
    .attr("x1", d => x(d))
    .attr("y1", y(0))
    .attr("x2", d => x(d))
    .attr("y2", y(200))
    .attr("stroke", "lightgray");

  g.append("g")
    .attr("class", "yticks")
    .selectAll("line")
    .data([100, 105, 110, 115, 120, 125])
    .join("line")
    .attr("x1", x(0))
    .attr("y1", d => y(d))
    .attr("x2", x(200))
    .attr("y2", d => y(d))
    .attr("stroke", "lightgray");

  // Better offense arrow
  const oarrx = x(118), oarry = y(115);
  g.append("path")
    .attr("d", arrowPath(1, 150, 2, 12, 12, { x0: oarrx, y0: oarry - 6 }))
    .attr("transform", `rotate(180, ${oarrx}, ${oarry})`)
    .attr("fill", "black");
  const darrx = x(110), darry = y(108);
  g.append("path")
    .attr("d", arrowPath(1, 150, 2, 12, 12, { x0: darrx, y0: darry - 6 }))
    .attr("transform", `rotate(-90, ${darrx}, ${darry})`)
    .attr("fill", "black");

  const legend = svg.append("g")
    .attr("class", "legend")
    .attr("font-family", "sans-serif")
    .attr("font-size", "30px")
    .attr("font-weight", "bold")
  legend.append("text")
    .attr("x", 48)
    .attr("y", 100)
    .text("Better")
  legend.append("text")
    .attr("x", 35)
    .attr("y", 130)
    .text("Offense");
  legend.append("text")
    .attr("x", 668)
    .attr("y", 100)
    .text("Better")
  legend.append("text")
    .attr("x", 655)
    .attr("y", 130)
    .text("Defense");

  g.append("g")
    .attr("class", "logos")
    .selectAll("image")
    .data(stats)
    .join("image")
    .attr("x", d => x(d.off_rtg) - (settings.logoSize / 2))
    .attr("y", d => y(d.def_rtg) - (settings.logoSize / 2))
    .attr("width", settings.logoSize)
    .attr("height", settings.logoSize)
    .attr("transform", d => `rotate(-45,
      ${x(d.off_rtg) - (settings.logoSize / 2)},
${y(d.def_rtg) - (settings.logoSize / 2)})`)
    .attr("href", d => `../logos/${d.name}.svg`);

  // tooltip modified from
  // https://next.observablehq.com/@giorgiofighera/histogram-with-tooltips-and-bars-highlighted-on-mouse-over
  const tooltip = d3.select(".tooltip");
  svg.selectAll("image")
    .on("mouseover", function(_evt, d) {
      d3.select(this)
        .attr('stroke-width', '2')
        .attr("stroke", "black");
      tooltip
        .style("visibility", "visible")
        .html(`<strong>${d.name}</strong> (${d.wins}-${d.losses})<br>Offensive Rating: ${d.off_rtg}<br>Defensive Rating: ${d.def_rtg}`);
    })
    .on("mousemove", function(evt) {
      tooltip
        .style("top", evt.pageY - 10 + "px")
        .style("left", evt.pageX + 10 + "px");
    })
    .on("mouseout", function() {
      d3.select(this).attr('stroke-width', '0');

      tooltip.style("visibility", "hidden");
    });
}

window.addEventListener('DOMContentLoaded', async (_evt) => {
  const res = await fetch('../data/2021/team_stats.json');
  const statsObj = await res.json();
  window.stats = Object.values(statsObj);

  graph(window.stats);
});
