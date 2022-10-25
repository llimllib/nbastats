import * as duckdb from "@duckdb/duckdb-wasm";
import * as Plot from "@observablehq/plot";
import { select } from "d3-selection";
import { html } from "htl";

import { tooltip } from "./tooltip-mark";
import { label } from "./labels";
import { teams } from "./teams";
import { Fields } from "./stats_meta";

const $ = (s: string) => document.querySelector(s);

// TODO: all stats are currently considering a player on their final team for
//       the year. Is that the best we can do?
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
  data: any[];
};

function makeMarks(series: Series, xfield: string, yfield: string): any[] {
  let marks: any[] = [];

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

  // For now, we're going to tie tooltips and labels together - it doesn't make
  // much sense to allow tooltips for a series that isn't labeled, I don't
  // think. Possibly revisit.
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

  return marks;
}

// Q: Does it make sense to allow series to carry their own x and y fields? In
// that case we would want to facet on them?
//   - for now I'm going to restrict the graph to have one xfield and yfield,
//     but this is an area for research
async function main(
  data: Series[],
  xfield: string,
  xtitle: string,
  yfield: string,
  ytitle: string
): Promise<void> {
  console.log(xfield, yfield, data)
  const chartSize = 800;
  const marks = data.map((series) => makeMarks(series, xfield, yfield));
  const chart = Plot.plot({
    width: chartSize,
    height: chartSize,
    grid: true,
    style: {
      background: "#fff9eb",
    },
    x: {
      label: xtitle,
      ticks: 5,
    },
    y: {
      label: ytitle,
      ticks: 5,
    },
    marks: marks.flat(),
  });
  select(chart).attr("overflow", "visible");

  const plot = $("#plot") as HTMLElement;
  plot.innerHTML = "";
  plot.append(chart);
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

function reGraph(
  conn: duckdb.AsyncDuckDBConnection
): (event: any) => Promise<void> {
  return async (_: Event) => {
    const serieses = await getSerieses(conn);
    const xField = ($(".xField") as HTMLInputElement).value;
    const yField = ($(".yField") as HTMLInputElement).value;
    await main(serieses, xField, xField, yField, yField);
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

// getSeries Reads each series and turns its choices into a Series object for
// graphing. No other function should be reaching into a series to check its
// values.
async function getSerieses(
  conn: duckdb.AsyncDuckDBConnection
): Promise<Series[]> {
  return await Promise.all(
    Array.from(document.querySelectorAll(".series")).map(async (series) => {
      const year = (series.querySelector(".yearChooser") as HTMLInputElement)
        .value;
      const useTeamColors = (
        series.querySelector(".useTeamColors") as HTMLInputElement
      ).checked;
      const useLabels = (series.querySelector(".useLabels") as HTMLInputElement)
        .checked;
      const data = await query(
        conn,
        `
      WITH player_stats AS (
        select *, ntile(100) over (order by fga) as fga_pctile
        FROM players
        WHERE year='${year}'
      )
      SELECT *
      FROM player_stats
      WHERE fga_pctile > 30`
      );
      return {
        year: year,
        useTeamColors: useTeamColors,
        useLabels: useLabels,
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

  const graphOptions = html` X:
    <select class="xField">
      ${xfields}
    </select>
    Y:
    <select class="yField">
      ${yfields}
    </select>`;
  $(".graph-options")?.appendChild(graphOptions);
  graphOptions
    .querySelector(".xField")
    .addEventListener("change", reGraph(conn));
  graphOptions
    .querySelector(".yField")
    .addEventListener("change", reGraph(conn));
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
