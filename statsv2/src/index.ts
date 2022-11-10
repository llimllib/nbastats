import * as duckdb from "@duckdb/duckdb-wasm";
import * as Plot from "@observablehq/plot";
import { base64encode, base64decode } from "byte-base64";
import { extent } from "d3-array";
import { select } from "d3-selection";
import d3ToPng from "d3-svg-to-png";
import { html } from "htl";

import { tooltip } from "./tooltip";
import { label } from "./labels";
import { teams } from "./teams";
import { Fields, FieldType } from "./stats_meta";

const $ = (s: string) => document.querySelector(s);

// TODO: all stats are currently considering a player on their final team for
//       the year (I think?). Is that the best we can do?
// TODO: allow re-ordering of series
// TODO: get nice names for all stats
// TODO: add stat values to tooltips
// TODO: allow year to vary in makeQuery (?)
//       - idea is a chart like: steph curry ts% every year
// TODO: custom annotations (mvp: text with x/y coords)
// TODO: fix tooltip scrollbar bug
// TODO: tooltips only work on the top-most labelled layer, fix them
// TODO: delay rendering on page load until all filters and series have been
//       setup

// https://observablehq.com/@fil/experimental-plot-tooltip-01#addTooltip
const Tooltip = tooltip(Plot);
const Label = label(Plot);

const DATA_URL = process.env.DATA_URL;

type Series = {
  year: string;
  useTeamColors: boolean;
  useLabels: boolean;
  opacity: number;
  useCustomColor: boolean;
  customColor: string;
  filter: string;
  data: any[];
};

type GraphOptions = {
  xfield: string;
  xfieldType: FieldType;
  yfield: string;
  yfieldType: FieldType;
  title: string;
  subtitle: string;
  width: number;
  height: number;
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
  rField: string;
  rMin: number;
  rMax: number;
  rLabel: string;
  serieses: Series[];
};

function sanitize(s: string): string {
  return s.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}

function makeMarks(series: Series, options: GraphOptions): any[] {
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
      Label(series.data, {
        x: options.xfield,
        y: options.yfield,
        label: "PLAYER_NAME",
        padding: 10,
        minCellSize: 3000,
      }),
    ];
  }

  const rFunc =
    Fields[options.rField].type == FieldType.Constant
      ? (_: any) => Fields[options.rField].value
      : (d: any) => d[options.rField];

  console.log("rfunc", rFunc);

  if (series.useTeamColors) {
    marks = [
      ...marks,
      Plot.dot(series.data, {
        x: options.xfield,
        y: options.yfield,
        r: rFunc,
        fill: (d: any) => {
          if (!teams.get(d["TEAM_ABBREVIATION"])) {
            console.log("missing:", d);
          }
          return teams.get(d["TEAM_ABBREVIATION"])?.colors[0];
        },
        fillOpacity: series.opacity / 100,
      }),
      Plot.dot(series.data, {
        x: options.xfield,
        y: options.yfield,
        r: (d: any) => (rFunc(d) as number) / 2,
        fill: (d: any) => teams.get(d["TEAM_ABBREVIATION"])?.colors[1],
        fillOpacity: series.opacity / 100,
      }),
    ];
  } else if (series.useCustomColor) {
    marks.push(
      Plot.dot(series.data, {
        x: options.xfield,
        y: options.yfield,
        r: rFunc,
        fill: series.customColor,
        fillOpacity: series.opacity / 100,
      })
    );
  } else {
    marks.push(
      Plot.dot(series.data, {
        x: options.xfield,
        y: options.yfield,
        r: rFunc,
        fill: "#888888",
        fillOpacity: series.opacity / 100,
      })
    );
  }

  return marks;
}

// Q: Does it make sense to allow series to carry their own x and y fields? In
// that case we would want to facet on them?
//   - for now I'm going to restrict the graph to have one xfield and yfield,
//     but this is an area for research
async function main(options: GraphOptions): Promise<void> {
  const marks = options.serieses.map((series) => makeMarks(series, options));
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

  console.log("making chart with options:", options);

  const alldata = Array.from(
    new Set(options.serieses.reduce((dat, obj) => [...dat, ...obj.data], []))
  );
  alldata.forEach((d) => {
    const xlabel = options.xLabel == "" ? options.xfield : options.xLabel;
    const ylabel = options.yLabel == "" ? options.yfield : options.yLabel;
    d.tooltip = `${d.PLAYER_NAME}
${d.TEAM_ABBREVIATION}
${xlabel}: ${d[options.xfield]}
${ylabel}: ${d[options.yfield]}`;
  });

  const constantR = Fields[options.rField].type == FieldType.Constant;
  const rDomain = constantR
    ? [
        (Fields[options.rField].value as number) / 2,
        Fields[options.rField].value as number,
      ]
    : extent(alldata, (d) => d[options.rField]);

  const rRange = constantR
    ? [
        (Fields[options.rField].value as number) / 2,
        Fields[options.rField].value,
      ]
    : [options.rMin, options.rMax];

  const chart = Plot.plot({
    width: options.width,
    height: options.height,
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
      tickFormat: options.xfieldType == FieldType.Year ? "c" : undefined,
    },
    y: {
      label: options.yLabel.length > 0 ? options.yLabel : options.yfield,
      labelOffset: options.yLabelOffset,
      labelAnchor: options.yLabelAnchor,
      ticks: options.yTicks,
      nice: true,
      inset: options.yPadding,
      tickFormat: options.yfieldType == FieldType.Year ? "c" : undefined,
    },
    r: {
      domain: rDomain,
      range: rRange,
    },
    // We can only have one `Tooltip` mark. Give it the sum of all the data in
    // all the serieses
    marks: [
      ...marks,
      Tooltip(alldata, {
        x: options.xfield,
        y: options.yfield,
        content: "tooltip",
      }),
    ].flat(),
  });

  const svg = select(chart);
  svg.attr("overflow", "visible");

  // TODO: radius scale legend
  // if (!constantR) {
  //   svg
  //     .append("circle")
  //     .attr("cx", 20)
  //     .attr("cy", 20)
  //     .attr("r", 6)
  //     .style("fill", "black");
  //   svg
  //     .append("text")
  //     .attr("x", 30)
  //     .attr("y", 20)
  //     .text(options.rLabel)
  //     .style("font-size", "15px")
  //     .attr("alignment-baseline", "middle");
  // }

  // serialize the options and store them in the URL
  const jsonOptions = JSON.stringify(options, (key: string, val: any) =>
    key == "data" ? undefined : val
  );
  const url = new URL(window.location.toString());
  const stateUrl = `${url.origin}${url.pathname}?options=${encodeURIComponent(
    base64encode(jsonOptions)
  )}`;
  window.history.replaceState(null, "", stateUrl);

  const plot = $("#plot") as HTMLElement;
  plot.innerHTML = "";
  select(chart).classed("plot", true);
  plot.append(chart);
}

function download() {
  const title = inputValue("#title");
  d3ToPng("svg.plot", title.length > 0 ? sanitize(title) : "plot", {
    scale: 1,
    quality: 0.92,
    download: true,
    // This is in the javascript but not in the type file.
    // https://github.com/JuanIrache/d3-svg-to-png/pull/17
    // background: 'white'
  });
}

async function initDuckDb(): Promise<duckdb.AsyncDuckDBConnection> {
  // TODO: figure this out in prod
  //
  // I've not been serving this from my own CDN because it seems pretty
  // complicated to do so due to web workers not being able to make CORS
  // requests without annoying workarounds, see:
  //
  // https://github.com/duckdb/duckdb-wasm/discussions/419#discussioncomment-1704798
  // https://stackoverflow.com/questions/21913673/execute-web-worker-from-different-origin
  const MANUAL_BUNDLES: duckdb.DuckDBBundles = {
    mvp: {
      mainModule: "duckdb-mvp.wasm",
      mainWorker: "duckdb-browser-mvp.worker.js",
    },
    eh: {
      mainModule: "duckdb-eh.wasm",
      mainWorker: "duckdb-browser-eh.worker.js",
    },
  };
  // Select a bundle based on browser checks
  const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);
  // Instantiate the asynchronus version of DuckDB-wasm

  // Instantiate the asynchronus version of DuckDB-wasm
  const worker = new Worker(bundle.mainWorker!);
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

async function plotURLOptions(
  conn: duckdb.AsyncDuckDBConnection
): Promise<void> {
  const options = JSON.parse(
    base64decode(
      decodeURIComponent(
        new URL(window.location.toString()).searchParams.get(
          "options"
        ) as string
      )
    )
  ) as GraphOptions;

  setValue("#xField", options.xfield);
  setValue("#yField", options.yfield);
  setValue("#title", options.title);
  setValue("#subtitle", options.subtitle);
  setValue("#width", options.width);
  setValue("#height", options.height);
  setValue("#marginTop", options.marginTop);
  setValue("#marginRight", options.marginRight);
  setValue("#marginBottom", options.marginBottom);
  setValue("#marginLeft", options.marginLeft);
  setValue("#xTicks", options.xTicks);
  setValue("#xLabelOffset", options.xLabelOffset);
  setValue("#xPadding", options.xPadding);
  setValue("#xLabelAnchor", options.xLabelAnchor);
  setValue("#xLabel", options.xLabel);
  setValue("#yTicks", options.yTicks);
  setValue("#yLabelOffset", options.yLabelOffset);
  setValue("#yPadding", options.yPadding);
  setValue("#yLabelAnchor", options.yLabelAnchor);
  setValue("#yLabel", options.yLabel);
  setValue("#rField", options.rField);
  setValue("#rMin", options.rMin);
  setValue("#rMax", options.rMax);
  setValue("#rLabel", options.rLabel);

  options.serieses.forEach(async (series: Series, i: number) => {
    const n = i + 1;

    // Try to find the series to fill in; if we don't find it, add one to the
    // page. If it does exist, just fill it in
    if (!document.querySelector(`#series${n}`)) {
      // wait for the new series to hit the dom before setting values
      const observer = new MutationObserver(async (_, obs) => {
        const seriesElt = document.getElementById(`series${n}`);
        if (seriesElt) {
          setValue(`#series${i + 1} .year`, series.year);
          setValue(`#series${i + 1} .useTeamColors`, series.useTeamColors);
          setValue(`#series${i + 1} .useLabels`, series.useLabels);
          setValue(`#series${i + 1} .opacity`, series.opacity);
          setValue(`#series${i + 1} .filter`, series.filter);

          obs.disconnect();
          return;
        }
      });
      observer.observe(document, {
        childList: true,
        subtree: true,
      });
      await addSeries(conn);
    } else {
      setValue(`#series${i + 1} .year`, series.year);
      setValue(`#series${i + 1} .useTeamColors`, series.useTeamColors);
      setValue(`#series${i + 1} .useLabels`, series.useLabels);
      setValue(`#series${i + 1} .opacity`, series.opacity);
      setValue(`#series${i + 1} .filter`, series.filter);
    }
  });

  options.serieses = await getSerieses(conn);

  await main(options);
}

async function plotFields(conn: duckdb.AsyncDuckDBConnection): Promise<void> {
  const xfield = inputValue("#xField");
  const yfield = inputValue("#yField");
  await main({
    xfield: xfield,
    xfieldType: Fields[xfield].type,
    yfield: inputValue("#yField"),
    yfieldType: Fields[yfield].type,
    title: inputValue("#title"),
    subtitle: inputValue("#subtitle"),
    width: numValue("#width"),
    height: numValue("#height"),
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
    yPadding: numValue("#yPadding"),
    yLabelAnchor: inputValue("#yLabelAnchor"),
    yLabel: inputValue("#yLabel"),
    rField: inputValue("#rField"),
    rMin: numValue("#rMin"),
    rMax: numValue("#rMax"),
    rLabel: inputValue("#rLabel"),
    serieses: await getSerieses(conn),
  });
}

// this sucks, what's a better way to figure out if we're on the first run?
let firstRun = true;

function rePlot(
  conn: duckdb.AsyncDuckDBConnection
): (event: any) => Promise<void> {
  return async (_: Event) => {
    // if it's the page's first run, and there is an options object in the URL,
    // get the options object from the URL and use it to set the options fields
    // and draw the graph.
    //
    // Otherwise, or if that fails for any reason (like, say there's an invalid
    // options object or the options have changed), draw the graph from the
    // settings on the page.
    if (
      firstRun &&
      new URL(window.location.toString()).searchParams.get("options")
    ) {
      firstRun = false;
      try {
        await plotURLOptions(conn);
      } catch (e) {
        console.error(e);
        await plotFields(conn);
      }
    } else {
      plotFields(conn);
    }
  };
}

async function addSeries(conn: duckdb.AsyncDuckDBConnection): Promise<void> {
  const n = Array.from(document.querySelectorAll(".series")).length + 1;

  // disable the remove series button if there's only one element
  ($(".remove-series") as HTMLInputElement).disabled = n == 1;

  const seriesNode = html`<div class="series" id="series${n}">
        Year: <select class="year" id="year${n}">
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
          <option value="any">any</option>
          </select>
        <label for="useTeamColors${n}">Use Team Colors</label>
          <input type="checkbox" id="useTeamColors${n}" class="useTeamColors" checked></input>
        <label for="useLabels${n}">Use labels</label>
          <input type="checkbox" id="useLabels${n}" class="useLabels" checked></input>
        <label for="opacity${n}">Opacity</label>
          <input type="number" id="opacity${n}" class="opacity number" value="100"></input>
        <label for="customColor${n}">Custom color</label>
          <input type="checkbox" id="customColor${n}" class="customColor"></input>
        <label for="color${n}">choose color:</label>
          <input type="color" id="color${n}" class="color" value="#000000" />
        <br />
        <label for="filter${n}">filter:</label>
          <input id="filter${n}" class="filter" value="quantile(fga) > 30"></input>
      </div>`;

  // wait for the element to hit the dom before re-plotting
  const observer = new MutationObserver(async (_, obs) => {
    const series = document.getElementById(`series${n}`);
    if (series) {
      rePlot(conn)(null);

      [
        ".year",
        ".useTeamColors",
        ".useLabels",
        ".opacity",
        ".customColor",
        ".color",
        ".filter",
      ].forEach((s) =>
        series.querySelector(s)?.addEventListener("change", rePlot(conn))
      );

      obs.disconnect();
      return;
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  $(".serieses")?.appendChild(seriesNode);
}

async function removeSeries(conn: duckdb.AsyncDuckDBConnection): Promise<void> {
  const serieses = Array.from(document.querySelectorAll(".series"));
  if (serieses.length == 1) {
    return;
  }
  serieses[serieses.length - 1].remove();

  rePlot(conn)(null);
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

function makeQuery(filter: string, year: string): string {
  const [cond, medians] = parseQuantiles(filter);
  if (year != "any") {
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
        WHERE year=${year} and ${filter}`;
  } else {
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
          WHERE ${cond}`;
    }
    return `
        SELECT *
        FROM players
        WHERE ${filter}`;
  }
}

function isChecked(selector: string, node: Element): boolean {
  return (node.querySelector(selector) as HTMLInputElement).checked
    ? true
    : false;
}

function inputValue(selector: string, node: Element = document.body): string {
  return (node.querySelector(selector) as HTMLInputElement).value;
}

function setValue(selector: string, value: any): void {
  if (typeof value == "boolean") {
    (document.querySelector(selector) as HTMLInputElement).checked = value;
  } else {
    (document.querySelector(selector) as HTMLInputElement).value = value;
  }
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
    Array.from(document.querySelectorAll(".series")).map(async (series, i) => {
      const n = i + 1;
      const year = inputValue(`#year${n}`, series);
      const useTeamColors = isChecked(`#useTeamColors${n}`, series);
      const useLabels = isChecked(`#useLabels${n}`, series);
      const opacity = numValue(`#opacity${n}`, series);
      const useCustomColor = isChecked(`#customColor${n}`, series);
      const customColor = inputValue(`#color${n}`, series);
      const filter = inputValue(`#filter${n}`, series);

      const data = await query(conn, makeQuery(filter, year));
      return {
        year: year,
        useTeamColors: useTeamColors,
        useLabels: useLabels,
        opacity: opacity,
        useCustomColor: useCustomColor,
        customColor: customColor,
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

  const rDefault = "zzconst8";
  const rfields = Object.keys(Fields)
    .sort()
    .map((key: string) => {
      if (key == rDefault) {
        return html.fragment`<option value="${key}" selected>${Fields[key].name}</option>`;
      } else {
        return html.fragment`<option value="${key}">${Fields[key].name}</option>`;
      }
    });

  const graphOptions = html`
    <div class="flex">
      <h3>X axis</h3>
      <select id="xField">
        ${xfields}
      </select>
      <br />
      ticks:
      <input type="number" class="axis number" id="xTicks" value="5" /> label
      offset:
      <input type="number" class="axis number" id="xLabelOffset" value="30" />
      padding:
      <input type="number" class="axis number" id="xPadding" value="5" />
      label anchor:
      <select id="xLabelAnchor">
        <option value="right" selected>right</option>
        <option value="left">left</option>
        <option value="center">center</option>
      </select>
      <br />
      label: <input type="text" id="xLabel" />
    </div>
    <button id="swapAxes">🔄 swap x and y</button>
    <div>
      <h3>Y axis</h3>
      <select id="yField">
        ${yfields}
      </select>
      <br />
      ticks:
      <input type="number" class="axis number" id="yTicks" value="5" /> label
      offset:
      <input type="number" class="axis number" id="yLabelOffset" value="40" />
      padding:
      <input type="number" class="axis number" id="yPadding" value="5" />
      label anchor:
      <select id="yLabelAnchor">
        <option value="top" selected>top</option>
        <option value="bottom">bottom</option>
        <option value="center">center</option>
      </select>
      <br />
      label: <input type="text" id="yLabel" />
    </div>
    <div>
      <h3>R axis</h3>
      <select id="rField">
        ${rfields}
      </select>
      min size:
      <input type="number" class="axis number" id="rMin" value="4" /> max size:
      <input type="number" class="axis number" id="rMax" value="8" />
      label: <input type="text" id="rLabel" />
    </div>
    <div>
      <h3>Graph Options</h3>
      Width:
      <input type="number" class="number2" id="width" value="800" />
      Height:
      <input type="number" class="number2" id="height" value="800" />
    </div>
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
    <div></div>
    <div></div>
    <div>
      <button id="download">download</button>
    </div>
  `;
  $(".graph-options")?.appendChild(graphOptions);

  // hook up each graph setting to redraw the graph
  [
    "#xField",
    "#yField",
    "#width",
    "#height",
    "#title",
    "#subtitle",
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
    "#rField",
    "#rMin",
    "#rMax",
    "#rLabel",
  ].forEach((cls) => {
    graphOptions.querySelector(cls).addEventListener("change", rePlot(conn));
    graphOptions.querySelector(cls).addEventListener("input", rePlot(conn));
  });

  graphOptions.querySelector("#download").addEventListener("click", download);

  graphOptions.querySelector("#swapAxes").addEventListener("click", () => {
    const a = inputValue("#xField");
    setValue("#xField", inputValue("#yField"));
    setValue("#yField", a);
    rePlot(conn)(null);
  });
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
