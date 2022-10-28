import * as duckdb from "@duckdb/duckdb-wasm";
import * as Plot from "@observablehq/plot";
import { select } from "d3-selection";
import d3ToPng from "d3-svg-to-png";
import { html } from "htl";

import { tooltip } from "./tooltip-mark";
import { label } from "./labels";
import { teams } from "./teams";
import { Fields } from "./stats_meta";

const $ = (s: string) => document.querySelector(s);

// TODO: all stats are currently considering a player on their final team for
//       the year (I think?). Is that the best we can do?
// TODO: allow re-ordering of series
// TODO: get nice names for all stats
// TODO: add stat values to labels

// https://observablehq.com/@fil/experimental-plot-tooltip-01#addTooltip
const Tooltip = tooltip(Plot);
const Label = label(Plot);

const DATA_URL = process.env.DATA_URL;

type Series = {
  year: string;
  useTeamColors: boolean;
  useLabels: boolean;
  filter: string;
  data: any[];
};

type GraphOptions = {
  title: string;
  subtitle: string;
  xfield: string;
  yfield: string;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  xLabelOffset: number;
  // "top"|"right"|"bottom"|"left"|"center"
  // but actually typing it was making me insane
  xLabelAnchor: string;
  xLabel: string;
  xTicks: number;
  xPadding: number;
  yLabelOffset: number;
  yLabelAnchor: string;
  yTicks: number;
  yLabel: string;
  yPadding: number;
};

function makeMarks(series: Series, xfield: string, yfield: string): any[] {
  let marks: any[] = [];

  // For now, we're going to tie tooltips and labels together - it doesn't make
  // much sense to allow tooltips for a series that isn't labeled, I don't
  // think. Possibly revisit.
  //
  // Put these before the dots, so that if we mistakenly overlap text on a dot,
  // the text goes behind the dot and it's still hover-able
  if (series.useLabels) {
    marks = [
      ...marks,
      Tooltip(series.data, { x: xfield, y: yfield, content: "PLAYER_NAME" }),
      Label(series.data, {
        x: xfield,
        y: yfield,
        label: "PLAYER_NAME",
        padding: 10,
        minCellSize: 3000,
      }),
    ];
  }

  if (series.useTeamColors) {
    marks = [
      ...marks,
      Plot.dot(series.data, {
        x: xfield,
        y: yfield,
        r: 8,
        fill: (d: any) => {
          if (!teams.get(d["TEAM_ABBREVIATION"])) {
            console.log("missing:", d);
          }
          return teams.get(d["TEAM_ABBREVIATION"])?.colors[0];
        },
      }),
      Plot.dot(series.data, {
        x: xfield,
        y: yfield,
        r: 4,
        fill: (d: any) => teams.get(d["TEAM_ABBREVIATION"])?.colors[1],
      }),
    ];
  } else {
    marks.push(
      Plot.dot(series.data, { x: xfield, y: yfield, r: 4, fill: "#888888" })
    );
  }

  return marks;
}

// Q: Does it make sense to allow series to carry their own x and y fields? In
// that case we would want to facet on them?
//   - for now I'm going to restrict the graph to have one xfield and yfield,
//     but this is an area for research
async function main(serieses: Series[], options: GraphOptions): Promise<void> {
  const chartSize = 800;
  const marks = serieses.map((series) =>
    makeMarks(series, options.xfield, options.yfield)
  );
  if (options.title != "") {
    marks.push(
      Plot.text([options.title], {
        frameAnchor: "top",
        fontSize: 25,
        fontVariant: "bold",
        fontFamily: "serif",
        dy: 10 - options.marginTop,
      })
    );
  }

  if (options.subtitle != "") {
    marks.push(
      Plot.text([options.subtitle], {
        frameAnchor: "top",
        fontSize: 15,
        fontFamily: "serif",
        dy: 35 - options.marginTop,
      })
    );
  }

  const chart = Plot.plot({
    width: chartSize,
    height: chartSize,
    marginTop: options.marginTop,
    marginRight: options.marginRight,
    marginBottom: options.marginBottom,
    marginLeft: options.marginLeft,
    grid: true,
    style: {
      background: "#fff9eb",
    },
    x: {
      label: options.xLabel.length > 0 ? options.xLabel : options.xfield,
      labelOffset: options.xLabelOffset,
      labelAnchor: options.xLabelAnchor,
      ticks: options.xTicks,
      nice: true,
      inset: options.xPadding,
    },
    y: {
      label: options.yLabel.length > 0 ? options.yLabel : options.yfield,
      labelOffset: options.yLabelOffset,
      labelAnchor: options.yLabelAnchor,
      ticks: options.yTicks,
      nice: true,
      inset: options.yPadding,
    },
    marks: marks.flat(),
  });
  select(chart).attr("overflow", "visible");

  // serialize the options and store them in the URL
  // TODO: serialize the series info as well
  const url = new URL(window.location.toString());
  const stateUrl = `${url.origin}${url.pathname}?options=${btoa(
    JSON.stringify(options)
  )}`;
  window.history.replaceState(null, "", stateUrl);

  const plot = $("#plot") as HTMLElement;
  plot.innerHTML = "";
  select(chart).classed("plot", true);
  plot.append(chart);
}

function download() {
  // testing
  d3ToPng("svg.plot", "plot", {
    scale: 1,
    quality: 0.92,
    download: true,
    // This is in the javascript but not in the type file. File a pull request
    // if this library is useful.
    // background: 'white'
  });
}

async function initDuckDb(): Promise<duckdb.AsyncDuckDBConnection> {
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
  const conn = await db.connect();
  await conn.query(`
      CREATE TABLE players AS
          SELECT * FROM "${DATA_URL}/playerstats.parquet"
  `);

  return conn;
}

async function query(
  conn: duckdb.AsyncDuckDBConnection,
  query: string
): Promise<any[]> {
  const data = await conn.query(query);
  return data.toArray().map((x) => x.toJSON());
}

// this sucks, what's a better way to figure out if we're on the first run?
let firstRun = true;

function reGraph(
  conn: duckdb.AsyncDuckDBConnection
): (event: any) => Promise<void> {
  return async (_: Event) => {
    const serieses = await getSerieses(conn);
    if (firstRun) {
      firstRun = false;
      const options = JSON.parse(
        atob(
          new URL(window.location.toString()).searchParams.get(
            "options"
          ) as string
        )
      );
      // TODO: now set the options HTML elements to the value from the options
      //       object
      await main(serieses, options);
    } else {
      const xField = ($("#xField") as HTMLInputElement).value;
      const yField = ($("#yField") as HTMLInputElement).value;
      await main(serieses, {
        title: inputValue("#title"),
        subtitle: inputValue("#subtitle"),
        xfield: xField,
        yfield: yField,
        marginTop: numValue("#marginTop"),
        marginRight: numValue("#marginRight"),
        marginBottom: numValue("#marginBottom"),
        marginLeft: numValue("#marginLeft"),
        xTicks: numValue("#xTicks"),
        xLabelOffset: numValue("#xLabelOffset"),
        xPadding: numValue("#xPadding"),
        xLabelAnchor: inputValue("#xLabelAnchor"),
        xLabel: inputValue("#xLabel"),
        yTicks: numValue("#yTicks"),
        yLabelOffset: numValue("#yLabelOffset"),
        yLabelAnchor: inputValue("#yLabelAnchor"),
        yLabel: inputValue("#yLabel"),
        yPadding: numValue("#yPadding"),
      });
    }
  };
}

async function addSeries(conn: duckdb.AsyncDuckDBConnection): Promise<void> {
  const n = Array.from(document.querySelectorAll(".series")).length + 1;

  const seriesNode = html`<div class="series">
        Year: <select class="yearChooser">
          <option value="2023" selected>2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          </select>
        <label for="useTeamColors${n}">Use Team Colors</label>
          <input type="checkbox" id="useTeamColors${n}" class="useTeamColors" checked></input>
        <label for="useLabels${n}">Use labels</label>
          <input type="checkbox" id="useLabels${n}" class="useLabels" checked></input>
        <label for="filter{n}">Use labels</label>
          <input id="filter${n}" class="filter" value="quantile(fga) > 30"></input>
      </div>`;
  $(".serieses")?.appendChild(seriesNode);
  seriesNode
    .querySelector(".yearChooser")
    .addEventListener("change", reGraph(conn));
  seriesNode
    .querySelector(".useTeamColors")
    .addEventListener("change", reGraph(conn));
  seriesNode
    .querySelector(".useLabels")
    .addEventListener("change", reGraph(conn));
  seriesNode.querySelector(".filter").addEventListener("change", reGraph(conn));

  const serieses = await getSerieses(conn);

  // disable the remove series button if there's only one element
  ($(".remove-series") as HTMLInputElement).disabled = serieses.length == 1;

  reGraph(conn)(null);
}

async function removeSeries(conn: duckdb.AsyncDuckDBConnection): Promise<void> {
  const serieses = Array.from(document.querySelectorAll(".series"));
  if (serieses.length == 1) {
    return;
  }
  serieses[serieses.length - 1].remove();

  reGraph(conn)(null);
}

const QUANTILE_RE = /quantile\((\w+)\)/;
function parseQuantiles(filter: string): [string, string[]] {
  const quantiles = [];
  let res = null;
  while ((res = QUANTILE_RE.exec(filter)) !== null) {
    let [call, field] = res;
    filter = filter.replace(call, `_${field}_ntile`);
    quantiles.push(field);
  }
  return [filter, quantiles];
}

// TODO: allow year to vary (?)
function makeQuery(filter: string, year: string): string {
  const [cond, medians] = parseQuantiles(filter);
  if (medians.length > 0) {
    const median_stmts = medians
      .map((x) => `ntile(100) OVER (ORDER BY ${x}) AS _${x}_ntile`)
      .join(", ");
    return `
        WITH player_stats AS (
          select *, ${median_stmts}
          FROM players
          WHERE year='${year}'
        )
        SELECT *
        FROM player_stats
        WHERE year=${year} and ${cond}`;
  }
  return `
      SELECT *
      FROM players
      WHERE ${filter}`;
}

function isChecked(selector: string, node: Element): boolean {
  return (node.querySelector(selector) as HTMLInputElement).checked
    ? true
    : false;
}

function inputValue(selector: string, node: Element = document.body): string {
  return (node.querySelector(selector) as HTMLInputElement).value;
}

function numValue(selector: string, node: Element = document.body): number {
  return (node.querySelector(selector) as HTMLInputElement).valueAsNumber;
}

// getSeries Reads each series and turns its choices into a Series object for
// graphing. No other function should be reaching into a series to check its
// values.
async function getSerieses(
  conn: duckdb.AsyncDuckDBConnection
): Promise<Series[]> {
  return await Promise.all(
    Array.from(document.querySelectorAll(".series")).map(async (series) => {
      const year = inputValue(".yearChooser", series);
      const useTeamColors = isChecked(".useTeamColors", series);
      const useLabels = isChecked(".useLabels", series);
      const filter = inputValue(".filter", series);

      const data = await query(conn, makeQuery(filter, year));
      return {
        year: year,
        useTeamColors: useTeamColors,
        useLabels: useLabels,
        filter: filter,
        data: data,
      };
    })
  );
}

function addGraphOptions(conn: duckdb.AsyncDuckDBConnection) {
  const xDefault = "TS_PCT";
  // Iterating on this consumes it somehow? so do it twice. Yo no comprendo
  const xfields = Object.keys(Fields)
    .sort()
    .map((key: string) => {
      // You can't do "selected" as a ternary because if you try to return
      // "selected" as a string, htl complains. See "Errors on invalid bindings"
      // here: https://www.npmjs.com/package/htl
      if (key == xDefault) {
        return html.fragment`<option value="${key}" selected>${Fields[key].name}</option>`;
      } else {
        return html.fragment`<option value="${key}">${Fields[key].name}</option>`;
      }
    });

  const yDefault = "USG_PCT";
  const yfields = Object.keys(Fields)
    .sort()
    .map((key: string) => {
      if (key == yDefault) {
        return html.fragment`<option value="${key}" selected>${Fields[key].name}</option>`;
      } else {
        return html.fragment`<option value="${key}">${Fields[key].name}</option>`;
      }
    });

  const graphOptions = html`
    X:
    <select id="xField">
      ${xfields}
    </select>
    Y:
    <select id="yField">
      ${yfields}
    </select>
    <div>
      Title: <input type="text" id="title" /><br />
      Subtitle: <input type="text" id="subtitle" />
    </div>
    <div>
      margin top:
      <input type="number" class="margin number" id="marginTop" value="40" />
      right:
      <input type="number" class="margin number" id="marginRight" value="50" />
      bottom:
      <input type="number" class="margin number" id="marginBottom" value="40" />
      left:
      <input type="number" class="margin number" id="marginLeft" value="60" />
    </div>
    <div>
      x ticks:
      <input type="number" class="axis number" id="xTicks" value="5" /> x label
      offset:
      <input type="number" class="axis number" id="xLabelOffset" value="30" /> x
      padding:
      <input type="number" class="axis number" id="xPadding" value="5" /> x
      label anchor:
      <select id="xLabelAnchor">
        <option value="right" selected>right</option>
        <option value="left">left</option>
        <option value="center">center</option>
      </select>
      label: <input type="text" id="xLabel" />
    </div>
    <div>
      y ticks:
      <input type="number" class="axis number" id="yTicks" value="5" /> y label
      offset:
      <input type="number" class="axis number" id="yLabelOffset" value="40" /> y
      padding:
      <input type="number" class="axis number" id="yPadding" value="5" /> y
      label anchor:
      <select id="yLabelAnchor">
        <option value="top" selected>top</option>
        <option value="bottom">bottom</option>
        <option value="center">center</option>
      </select>
      label: <input type="text" id="yLabel" />
    </div>
    <div>
      <button id="download">download</button>
    </div>
  `;
  $(".graph-options")?.appendChild(graphOptions);

  // hook up each graph setting to redraw the graph
  [
    "#title",
    "#subtitle",
    "#xField",
    "#yField",
    "#marginTop",
    "#marginRight",
    "#marginLeft",
    "#marginBottom",
    "#xTicks",
    "#xLabelOffset",
    "#xLabelAnchor",
    "#xLabel",
    "#xPadding",
    "#yTicks",
    "#yLabelOffset",
    "#yLabelAnchor",
    "#yLabel",
    "#yPadding",
  ].forEach((cls) => {
    graphOptions.querySelector(cls).addEventListener("change", reGraph(conn));
    graphOptions.querySelector(cls).addEventListener("input", reGraph(conn));
  });

  graphOptions.querySelector("#download").addEventListener("click", download);
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  const conn = await initDuckDb();
  window.conn = conn;

  addGraphOptions(conn);
  $(".add-series")?.addEventListener("click", () => addSeries(conn));
  $(".remove-series")?.addEventListener("click", () => removeSeries(conn));

  // Add the first series, and wire up the add series button for adding more
  addSeries(conn);
});
