// simplest possible plot - if it's plotted, the tooltip lib gets confused
// and uses it, so disabled
async function main() {
  const res = await fetch(`data.json`);
  const stats = await res.json();
  const dotplot = Plot.dot(stats, {
    x: "usg_pct",
    y: "ts_pct",
    stroke: "team",
    title: "name",
  }).plot();
  document.body.append(dotplot);
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  await main();
});
