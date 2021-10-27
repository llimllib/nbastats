// TODO:
// * last 15 games only option
const $ = (s) => document.querySelector(s);

const settings = {
  padding: { left: 60, top: 60, right: 40, bottom: 40 },
  width: 600,
  height: 600,
  logoSize: 50,
};

window.DATA_URL = 'https://cdn.billmill.org/nbastats';
// window.DATA_URL = '../data';

function centeredText(txt, x, y, l1, l2) {
  const h = txt.append("text")
    .attr("y", y)
    .attr("font-family", "sans-serif")
    .attr("font-size", "25px")
    .attr("font-weight", "bold")
    .attr("fill", "grey")
    .attr("transform", `translate(${x})`);

  h.append("tspan")
    .attr("x", "0")
    .attr("text-anchor", "middle")
    .text(l1);
  h.append("tspan")
    .attr("x", "0")
    .attr("dy", "25")
    .attr("text-anchor", "middle")
    .text(l2);
}

// stats should be a list of player objects
function graph(stats) {
  const svg = d3.select('#canvas');

  // Rotate the stats through 45* and use that as the domain
  const angle = -Math.PI / 4,
    oext = d3.extent(stats, d => d.off_rtg),
    dext = d3.extent(stats, d => d.def_rtg),
    ocenter = (oext[0] + oext[1]) / 2,
    dcenter = (dext[0] + dext[1]) / 2;

  const xt = (x, y, theta) => {
    return (x - ocenter) * Math.cos(theta) - (y - dcenter) * Math.sin(theta);
  }

  const yt = (x, y, theta) => {
    return (x - ocenter) * Math.sin(theta) + (y - dcenter) * Math.cos(theta);
  }

  // rotate the off_rtg and def_rtg around the center of the rating space
  stats.forEach(d => {
    d.off_rtg_trans = xt(d.off_rtg, d.def_rtg, angle);
    d.def_rtg_trans = yt(d.off_rtg, d.def_rtg, angle);
  });
  console.log(stats.map(d => `${d.off_rtg_trans}, ${d.def_rtg_trans}`))

  const toext = d3.extent(stats, d => d.off_rtg_trans),
    omargin = (toext[1] - toext[0]) * .1,
    xmin = toext[0] - omargin,
    xmax = toext[1] + omargin;

  const x = d3.scaleLinear()
    .domain([xmin, xmax])
    .range([0, settings.width]);

  const tdext = d3.extent(stats, d => d.def_rtg_trans),
    dmargin = (tdext[1] - tdext[0]) * .1,
    ymin = tdext[0] - dmargin,
    ymax = tdext[1] + dmargin;

  const y = d3.scaleLinear()
    .domain([ymin, ymax])
    .range([0, settings.height]);

  const xAxis = g => g
    .call(d3.axisBottom(x).tickSizeOuter(0));

  const yAxis = g => g
    .call(d3.axisLeft(y).tickSizeOuter(0));

  // TODO: figure out the actual lines instead of just using points that are
  // definitely out of the range? it's kind of a PITA?
  svg.append("g")
    .attr("class", "xticks")
    .selectAll("line")
    .data([100, 105, 110, 115, 120, 125])
    .join("line")
    .attr("x1", d => x(xt(d, 0, angle)))
    .attr("y1", d => y(yt(d, 0, angle)))
    .attr("x2", d => x(xt(d, 200, angle)))
    .attr("y2", d => y(yt(d, 200, angle)))
    .attr("stroke", "lightgray");

  svg.append("g")
    .attr("class", "xticks")
    .selectAll("line")
    .data([100, 105, 110, 115, 120, 125])
    .join("line")
    .attr("x1", d => x(xt(0, d, angle)))
    .attr("y1", d => y(yt(0, d, angle)))
    .attr("x2", d => x(xt(200, d, angle)))
    .attr("y2", d => y(yt(200, d, angle)))
    .attr("stroke", "lightgray");

  const txt = svg.append("g")
    .attr("class", "explanatory_text");

  centeredText(txt, 50, 30, "Better", "Defense");
  centeredText(txt, settings.width - 50, 30, "Better", "Offense");
  centeredText(txt, 50, settings.height - 60, "Worse", "Offense");
  centeredText(txt, settings.width - 50, settings.height - 60, "Worse", "Defense");

  // Needs to be after the ticks to appear over them
  svg.append("g")
    .attr("class", "logos")
    .selectAll("image")
    .data(stats)
    .join("image")
    .attr("x", d => x(d.off_rtg_trans) - (settings.logoSize / 2))
    .attr("y", d => y(d.def_rtg_trans) - (settings.logoSize / 2))
    .attr("width", settings.logoSize)
    .attr("height", settings.logoSize)
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
  const res = await fetch(`${window.DATA_URL}/2022/team_stats.json`);
  const statsObj = await res.json();
  window.stats = Object.values(statsObj.teams);

  graph(window.stats);
});
