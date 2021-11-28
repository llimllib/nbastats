const $ = (s) => document.querySelector(s);

const settings = {
  domainPadding: 1,
  padding: { left: 60, top: 60, right: 40, bottom: 40 },
  width: 600,
  height: 600,
  logoSize: 40,
};

window.DATA_URL = "https://cdn.billmill.org/nbastats";
// window.DATA_URL = '../data';

function centeredText(txt, x, y, l1, l2, size) {
  const h = txt
    .append("text")
    .attr("y", y)
    .attr("font-family", "sans-serif")
    .attr("font-size", size || 25 + "px")
    .attr("font-weight", "bold")
    .attr("fill", "grey")
    .attr("transform", `translate(${x})`);

  h.append("tspan").attr("x", "0").attr("text-anchor", "middle").text(l1);
  h.append("tspan")
    .attr("x", "0")
    .attr("dy", size || 25)
    .attr("text-anchor", "middle")
    .text(l2);
}

function squaregraph(stats) {
  const svg = d3.select("#square");

  const [xmin, xmax] = d3.extent(stats, (d) => d.off_rtg);
  const [ymin, ymax] = d3.extent(stats, (d) => d.def_rtg);
  const min = d3.min([xmin, ymin]);
  const max = d3.max([xmax, ymax]);
  const x = d3
    .scaleLinear()
    .domain([min - settings.domainPadding, max + settings.domainPadding])
    .range([0, settings.width]);
  const y = d3
    .scaleLinear()
    .domain([min - settings.domainPadding, max + settings.domainPadding])
    .range([0, settings.height]);

  const xaxis = d3.axisTop(x).tickSize(10).tickSizeOuter(0);
  svg
    .append("g")
    .attr("transform", `translate(0, ${settings.height / 2})`)
    .attr("class", "xaxis")
    .call(xaxis)
    .call((g) => g.selectAll(".domain").attr("stroke-opacity", 0.2))
    .call((g) => g.selectAll(".tick line").remove())
    .call((g) => g.selectAll(".tick text").remove());

  const yaxis = d3.axisRight(y).tickSize(10).tickSizeOuter(0);
  svg
    .append("g")
    .attr("transform", `translate(${settings.width / 2}, 0)`)
    .attr("class", "yaxis")
    .call(yaxis)
    .call((g) => g.selectAll(".domain").attr("stroke-opacity", 0.2))
    .call((g) => g.selectAll(".tick line").remove())
    .call((g) => g.selectAll(".tick text").remove());

  svg
    .append("g")
    .attr("class", "midline")
    .append("line")
    .attr("x1", 80)
    .attr("y1", 80)
    .attr("x2", settings.width - 80)
    .attr("y2", settings.height - 80)
    .attr("stroke", "lightgray");

  const container = svg.append("g").attr("class", "points");
  container
    .append("g")
    .attr("class", "logos")
    .selectAll("image")
    .data(stats)
    .join("image")
    .attr("x", (d) => x(d.off_rtg) - settings.logoSize / 2)
    .attr("y", (d) => y(d.def_rtg) - settings.logoSize / 2)
    .attr("width", settings.logoSize)
    .attr("height", settings.logoSize)
    .attr("href", (d) => `../logos/${d.name}.svg`);

  const txt = svg.append("g").attr("class", "explanatory_text");
  centeredText(txt, 30, 25, "Good", "Defense", 15);
  centeredText(
    txt,
    settings.width - 45,
    settings.height - 20,
    "Good",
    "Offense",
    15
  );
  centeredText(txt, settings.width - 45, 25, "Good", "at both", 15);
  centeredText(txt, 30, settings.height - 20, "Bad", "at both", 15);

  // tooltip modified from
  // https://next.observablehq.com/@giorgiofighera/histogram-with-tooltips-and-bars-highlighted-on-mouse-over
  const tooltip = d3.select(".tooltip");
  svg
    .selectAll("image")
    .on("mouseover", function (_evt, d) {
      d3.select(this).attr("stroke-width", "2").attr("stroke", "black");
      tooltip
        .style("visibility", "visible")
        .html(
          `<strong>${d.name}</strong> (${d.wins}-${d.losses})<br>Offensive Rating: ${d.off_rtg}<br>Defensive Rating: ${d.def_rtg}`
        );
    })
    .on("mousemove", function (evt) {
      tooltip
        .style("top", evt.pageY - 10 + "px")
        .style("left", evt.pageX + 10 + "px");
    })
    .on("mouseout", function () {
      d3.select(this).attr("stroke-width", "0");

      tooltip.style("visibility", "hidden");
    });
}

// stats should be a list of player objects
function tiltedgraph(stats) {
  const svg = d3.select("#canvas");

  // Rotate the stats through 45* and use that as the domain
  const angle = -Math.PI / 4,
    oext = d3.extent(stats, (d) => d.off_rtg),
    dext = d3.extent(stats, (d) => d.def_rtg),
    ocenter = (oext[0] + oext[1]) / 2,
    dcenter = (dext[0] + dext[1]) / 2;

  const xt = (x, y, theta) => {
    return (x - ocenter) * Math.cos(theta) - (y - dcenter) * Math.sin(theta);
  };

  const yt = (x, y, theta) => {
    return (x - ocenter) * Math.sin(theta) + (y - dcenter) * Math.cos(theta);
  };

  // rotate the off_rtg and def_rtg around the center of the rating space
  stats.forEach((d) => {
    d.off_rtg_trans = xt(d.off_rtg, d.def_rtg, angle);
    d.def_rtg_trans = yt(d.off_rtg, d.def_rtg, angle);
  });
  console.log(stats.map((d) => `${d.off_rtg_trans}, ${d.def_rtg_trans}`));

  const toext = d3.extent(stats, (d) => d.off_rtg_trans),
    omargin = (toext[1] - toext[0]) * 0.1,
    xmin = toext[0] - omargin,
    xmax = toext[1] + omargin;

  const x = d3.scaleLinear().domain([xmin, xmax]).range([0, settings.width]);

  const tdext = d3.extent(stats, (d) => d.def_rtg_trans),
    dmargin = (tdext[1] - tdext[0]) * 0.1,
    ymin = tdext[0] - dmargin,
    ymax = tdext[1] + dmargin;

  const y = d3.scaleLinear().domain([ymin, ymax]).range([0, settings.height]);

  const yaxis = d3.axisRight(y).tickSize(10).tickSizeOuter(0);
  svg
    .append("g")
    .attr("transform", `translate(${settings.width / 2}, 0)`)
    .attr("class", "yaxis")
    .call(yaxis)
    .call((g) => g.selectAll(".domain").attr("stroke-opacity", 0.2))
    .call((g) => g.selectAll(".tick line").remove())
    .call((g) => g.selectAll(".tick text").remove());

  // I want a line at a net rating of 0
  const xaxis = d3.axisTop(x).tickSize(10).tickSizeOuter(0);
  svg
    .append("g")
    .attr("transform", `translate(0, ${y(0)})`)
    .attr("class", "xaxis")
    .call(xaxis)
    .call((g) => g.selectAll(".domain").attr("stroke-opacity", 0.2))
    .call((g) => g.selectAll(".tick line").remove())
    .call((g) => g.selectAll(".tick text").remove());

  // These are the diagonal lines that kenpom has - I think for now we're
  // better off without them, they're confusing
  // TODO: figure out the actual lines instead of just using points that are
  // definitely out of the range? it's kind of a PITA?
  // svg
  //   .append("g")
  //   .attr("class", "xticks")
  //   .selectAll("line")
  //   .data([95, 100, 105, 110, 115, 120, 125])
  //   .join("line")
  //   .attr("x1", (d) => x(xt(d, 0, angle)))
  //   .attr("y1", (d) => y(yt(d, 0, angle)))
  //   .attr("x2", (d) => x(xt(d, 200, angle)))
  //   .attr("y2", (d) => y(yt(d, 200, angle)))
  //   .attr("stroke", "lightgray");

  // svg
  //   .append("g")
  //   .attr("class", "yticks")
  //   .selectAll("line")
  //   .data([95, 100, 105, 110, 115, 120, 125])
  //   .join("line")
  //   .attr("x1", (d) => x(xt(0, d, angle)))
  //   .attr("y1", (d) => y(yt(0, d, angle)))
  //   .attr("x2", (d) => x(xt(200, d, angle)))
  //   .attr("y2", (d) => y(yt(200, d, angle)))
  //   .attr("stroke", "lightgray");

  const txt = svg.append("g").attr("class", "explanatory_text");

  centeredText(txt, 50, 30, "Defensively", "Focused", 15);
  centeredText(txt, settings.width - 50, 30, "Offensively", "Focused", 15);
  txt
    .append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", "15px")
    .attr("font-weight", "bold")
    .attr("fill", "grey")
    .attr("transform", `translate(${settings.width / 2 - 10}, 100) rotate(-90)`)
    .append("tspan")
    .text("net rating →");

  // Needs to be after the ticks to appear over them
  svg
    .append("g")
    .attr("class", "logos")
    .selectAll("image")
    .data(stats)
    .join("image")
    .attr("x", (d) => x(d.off_rtg_trans) - settings.logoSize / 2)
    .attr("y", (d) => y(d.def_rtg_trans) - settings.logoSize / 2)
    .attr("width", settings.logoSize)
    .attr("height", settings.logoSize)
    .attr("href", (d) => `../logos/${d.name}.svg`);

  // tooltip modified from
  // https://next.observablehq.com/@giorgiofighera/histogram-with-tooltips-and-bars-highlighted-on-mouse-over
  const tooltip = d3.select(".tooltip");
  svg
    .selectAll("image")
    .on("mouseover", function (_evt, d) {
      d3.select(this).attr("stroke-width", "2").attr("stroke", "black");
      tooltip
        .style("visibility", "visible")
        .html(
          `<strong>${d.name}</strong> (${d.wins}-${d.losses})<br>Offensive Rating: ${d.off_rtg}<br>Defensive Rating: ${d.def_rtg}`
        );
    })
    .on("mousemove", function (evt) {
      tooltip
        .style("top", evt.pageY - 10 + "px")
        .style("left", evt.pageX + 10 + "px");
    })
    .on("mouseout", function () {
      d3.select(this).attr("stroke-width", "0");

      tooltip.style("visibility", "hidden");
    });
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  const res = await fetch(`${window.DATA_URL}/2022/team_stats.json`);
  const statsObj = await res.json();
  window.stats = Object.values(statsObj.teams);

  tiltedgraph(window.stats);
  squaregraph(window.stats);
});
