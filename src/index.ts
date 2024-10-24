import type { Markish } from "@observablehq/plot";
import type { PlayerData } from "./stats_meta";

import * as duckdb from "@duckdb/duckdb-wasm";
import * as Plot from "@observablehq/plot";
import { base64encode, base64decode } from "byte-base64";
import { extent } from "d3-array";
import { select } from "d3-selection";
import d3ToPng from "d3-svg-to-png";
import { html } from "htl";

import { label } from "./labels";
import { teams } from "./teams";
import { Fields, FieldType } from "./stats_meta";

const $ = (s: string) => document.querySelector(s);
const $$ = (s: string) => document.querySelectorAll(s);

const Label = label(Plot);

const DATA_URL = "https://llimllib.github.io/nba_data";

interface StatsMeta {
  updated: string;
}

type Series = {
  year: string;
  useTeamColors: boolean;
  useLabels: boolean;
  opacity: number;
  useCustomColor: boolean;
  customColor: string;
  filter: string;
  data: PlayerData[];
};

type AnchorPosition = "top" | "right" | "bottom" | "left" | "center";

type GraphOptions = {
  /* This type of a bit of a lie: there are a few Fields that this can be - for
   * example it can be "zzconst8", which is a constant with the value of 8. I
   * can tell typescript "this is a type in Fields" with "keyof typeof Fields"
   * (I think?) but then later on indexing a PlayerData fails because typescript
   * doesn't understand that only constant types can be present in the Fields
   * object, so we've ruled out invalid indexes when we eliminate constant
   * fields. Probably I should separate the types somehow? */
  xfield: keyof PlayerData;
  xfieldType: FieldType;
  yfield: keyof PlayerData;
  yfieldType: FieldType;
  title: string;
  subtitle: string;
  width: number;
  height: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  xIncludeZero: boolean;
  xLabelOffset: number;
  xLabelAnchor: AnchorPosition;
  xLabel: string;
  xTicks: number;
  xPadding: number;
  yIncludeZero: boolean;
  yLabelOffset: number;
  yLabelAnchor: AnchorPosition;
  yTicks: number;
  yLabel: string;
  yPadding: number;
  rField: keyof PlayerData;
  rMin: number;
  rMax: number;
  rLabel: string;
  serieses: Series[];
};

function sanitize(s: string): string {
  return s.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}

function makeMarks(series: Series, options: GraphOptions): Markish[] {
  let marks: Markish[] = [];

  if (series.useLabels) {
    marks = [
      ...marks,
      Label(series.data, {
        x: options.xfield,
        y: options.yfield,
        label: "player_name",
        padding: 10,
        minCellSize: 3000,
      }),
    ];
  }

  const rFunc =
    Fields[options.rField].type == FieldType.Constant
      ? () => Fields[options.rField ?? ""].value
      : (d: PlayerData) => d[options.rField];

  if (series.useTeamColors) {
    marks = [
      ...marks,
      Plot.dot(series.data, {
        x: options.xfield,
        y: options.yfield,
        r: rFunc,
        fill: (d: PlayerData) => {
          if (!teams.get(d["team_abbreviation"])) {
            console.log("missing:", d);
          }
          return teams.get(d["team_abbreviation"])?.colors[0];
        },
        fillOpacity: series.opacity / 100,
      }),
      Plot.dot(series.data, {
        x: options.xfield,
        y: options.yfield,
        r: (d: PlayerData) => (rFunc(d) as number) / 2,
        fill: (d: PlayerData) => teams.get(d.team_abbreviation)?.colors[1],
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
      }),
    );
  } else {
    marks.push(
      Plot.dot(series.data, {
        x: options.xfield,
        y: options.yfield,
        r: rFunc,
        fill: "#888888",
        fillOpacity: series.opacity / 100,
      }),
    );
  }

  return marks;
}

// Q: Does it make sense to allow series to carry their own x and y fields? In
// that case we would want to facet on them?
//   - for now I'm going to restrict the graph to have one xfield and yfield,
//     but this is an area for research
async function main(options: GraphOptions): Promise<void> {
  const marks = options.serieses
    .map((series) => makeMarks(series, options))
    .flat();
  if (options.title != "") {
    marks.push(
      Plot.text([options.title], {
        frameAnchor: "top",
        fontSize: 25,
        fontVariant: "bold",
        fontFamily: "serif",
        dy: 10 - options.marginTop,
      }),
    );
  }

  if (options.subtitle != "") {
    marks.push(
      Plot.text([options.subtitle], {
        frameAnchor: "top",
        fontSize: 15,
        fontFamily: "serif",
        dy: 35 - options.marginTop,
      }),
    );
  }

  console.log("making chart with options:", options);

  const alldata = Array.from(
    new Set(options.serieses.reduce((dat, obj) => [...dat, ...obj.data], [])),
  );
  alldata.forEach((d) => {
    const xlabel = options.xLabel == "" ? options.xfield : options.xLabel;
    const ylabel = options.yLabel == "" ? options.yfield : options.yLabel;
    d.tooltip = `${d.player_name}
${d.team_abbreviation}
${xlabel}: ${d[options.xfield]}
${ylabel}: ${d[options.yfield]}`;
  });

  const constantR = Fields[options.rField].type == FieldType.Constant;
  const rDomain = constantR
    ? [
        (Fields[options.rField].value as number) / 2,
        Fields[options.rField].value as number,
      ]
    : extent(alldata, (d) => d[options.rField] as number);
  rDomain[0] = (rDomain[0] ?? 0) / 2;

  const rRange = constantR
    ? [
        (Fields[options.rField].value as number) / 2,
        Fields[options.rField].value,
      ]
    : [options.rMin, options.rMax];

  // Add a tooltip for every piece of data shown on the graph, regardless of
  // whether labels are on or not. This can be helpful, or confusing; for
  // example it doesn't show _which series_ it belongs to
  marks.push(
    Plot.tip(
      alldata,
      Plot.pointer({
        x: options.xfield,
        y: options.yfield,
        title: (d: PlayerData) => d.tooltip,
      }),
    ),
  );

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
      inset: options.xPadding,
      label: options.xLabel.length > 0 ? options.xLabel : options.xfield,
      labelOffset: options.xLabelOffset,
      labelAnchor: options.xLabelAnchor,
      nice: true,
      ticks: options.xTicks,
      tickFormat: options.xfieldType == FieldType.Year ? "c" : undefined,
      zero: options.xIncludeZero,
    },
    y: {
      inset: options.yPadding,
      label: options.yLabel.length > 0 ? options.yLabel : options.yfield,
      labelOffset: options.yLabelOffset,
      labelAnchor: options.yLabelAnchor,
      nice: true,
      ticks: options.yTicks,
      tickFormat: options.yfieldType == FieldType.Year ? "c" : undefined,
      zero: options.yIncludeZero,
    },
    r: {
      domain: rDomain,
      range: rRange,
    },
    marks: [...marks],
  });

  const svg = select(chart);
  svg.attr("overflow", "visible");

  // TODO: radius scale legend
  if (!constantR) {
    const g = svg.append("g").attr("class", "rLabel");
    g.append("circle")
      .attr("cx", 25)
      .attr("cy", 27)
      .attr("r", 4)
      .style("fill", "black");
    g.append("text")
      .attr("x", 32)
      .attr("y", 30)
      .attr("text-anchor", "start")
      .text(options.rLabel == "" ? options.rField : options.rLabel);
  }

  // serialize the options and store them in the URL. The value of the function
  // must actually be any, so disable eslint here
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const jsonOptions = JSON.stringify(options, (key: string, val: any) =>
    key == "data" ? undefined : val,
  );
  const url = new URL(window.location.toString());
  const stateUrl = `${url.origin}${url.pathname}?options=${encodeURIComponent(
    base64encode(jsonOptions),
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
      mainWorker: "duckdb/duckdb-browser-mvp.worker.js",
    },
    eh: {
      mainModule: "duckdb-eh.wasm",
      mainWorker: "duckdb/duckdb-browser-eh.worker.js",
    },
  };
  // Select a bundle based on browser checks
  const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);

  // Instantiate the asynchronus version of DuckDB-wasm
  if (!bundle.mainWorker) {
    throw new Error("should never happen: bundle.mainWorker missing");
  }
  const worker = new Worker(bundle.mainWorker);
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

// conn.query fundamentally returns anything, we can't and don't want to type
// it as anything other than `any`
/* eslint-disable @typescript-eslint/no-explicit-any */
async function query(
  conn: duckdb.AsyncDuckDBConnection,
  query: string,
): Promise<any[]> {
  const data = await conn.query(query);
  return data.toArray().map((x) => x.toJSON());
}
/* eslint-enable @typescript-eslint/no-explicit-any */

async function plotURLOptions(
  conn: duckdb.AsyncDuckDBConnection,
): Promise<void> {
  const options = JSON.parse(
    base64decode(
      decodeURIComponent(
        new URL(window.location.toString()).searchParams.get(
          "options",
        ) as string,
      ),
    ),
  ) as GraphOptions;

  // TODO: we should find a way to map these automatically, it is very easy to
  // miss one when adding/removing a field
  setValue("#width", options.width);
  setValue("#height", options.height);
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
  setValue("#xIncludeZero", options.xIncludeZero);
  setValue("#xTicks", options.xTicks);
  setValue("#xLabelOffset", options.xLabelOffset);
  setValue("#xPadding", options.xPadding);
  setValue("#xLabelAnchor", options.xLabelAnchor);
  setValue("#xLabel", options.xLabel);
  setValue("#yIncludeZero", options.yIncludeZero);
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
    xfield: xfield as keyof PlayerData,
    xfieldType: Fields[xfield].type,
    yfield: inputValue("#yField") as keyof PlayerData,
    yfieldType: Fields[yfield].type,
    title: inputValue("#title"),
    subtitle: inputValue("#subtitle"),
    width: numValue("#width"),
    height: numValue("#height"),
    marginTop: numValue("#marginTop"),
    marginRight: numValue("#marginRight"),
    marginBottom: numValue("#marginBottom"),
    marginLeft: numValue("#marginLeft"),
    xIncludeZero: isChecked("#xIncludeZero"),
    xTicks: numValue("#xTicks"),
    xLabelOffset: numValue("#xLabelOffset"),
    xPadding: numValue("#xPadding"),
    xLabelAnchor: inputValue("#xLabelAnchor") as AnchorPosition,
    xLabel: inputValue("#xLabel"),
    yIncludeZero: isChecked("#yIncludeZero"),
    yTicks: numValue("#yTicks"),
    yLabelOffset: numValue("#yLabelOffset"),
    yPadding: numValue("#yPadding"),
    yLabelAnchor: inputValue("#yLabelAnchor") as AnchorPosition,
    yLabel: inputValue("#yLabel"),
    rField: inputValue("#rField") as keyof PlayerData,
    rMin: numValue("#rMin"),
    rMax: numValue("#rMax"),
    rLabel: inputValue("#rLabel"),
    serieses: await getSerieses(conn),
  });
}

// this sucks, what's a better way to figure out if we're on the first run?
let firstRun = true;

function rePlot(
  conn: duckdb.AsyncDuckDBConnection,
): (evt?: Event) => Promise<void> {
  return async () => {
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
      try {
        await plotURLOptions(conn);
      } catch (e) {
        console.error(e);
        await plotFields(conn);
      }
    } else {
      plotFields(conn);
    }
    firstRun = false;
  };
}

async function addSeries(conn: duckdb.AsyncDuckDBConnection): Promise<void> {
  const n = Array.from(document.querySelectorAll(".series")).length + 1;

  // disable the remove series button if there's only one element
  ($(".remove-series") as HTMLInputElement).disabled = n == 1;

  const seriesNode = html`<div class="series" id="series${n}">
      <div class="controlrow">
        Year: <select class="year" id="year${n}">
          <option value="2025" selected>2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
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
      </div>
      <div class="controlrow">
        <label for="useTeamColors${n}">Use Team Colors</label>
          <input type="checkbox" id="useTeamColors${n}" class="useTeamColors" checked></input>
        <label for="useLabels${n}">Use labels</label>
          <input type="checkbox" id="useLabels${n}" class="useLabels" checked></input>
        <label for="opacity${n}">Opacity</label>
          <input type="number" id="opacity${n}" class="opacity number2" value="100"></input>
      </div>
      <div class="controlrow">
        <label for="customColor${n}">Custom color</label>
          <input type="checkbox" id="customColor${n}" class="customColor"></input>
        <label for="color${n}">choose color:</label>
          <input type="color" id="color${n}" class="color" value="#000000" />
        <br />
      </div>
      <div class="controlrow">
        <label for="filter${n}">filter:</label>
          <input id="filter${n}" class="filter" value="quantile(fga) > 66"></input>
        <br />
      </div>
      <div class="controlrow">
        <button class="moveSeriesUp" id="moveSeriesUp${n}" disabled>↑</button>
        <button class="moveSeriesDown" id="moveSeriesDown${n}" disabled>↓</button>
      </div>
    </div>`;

  // wait for the element to hit the dom before re-plotting
  const observer = new MutationObserver(async (_, obs) => {
    const series = document.getElementById(`series${n}`);
    if (series) {
      rePlot(conn)();

      [
        ".year",
        ".useTeamColors",
        ".useLabels",
        ".opacity",
        ".customColor",
        ".color",
        ".filter",
      ].forEach(
        (s) =>
          series.querySelector(s)?.addEventListener("change", rePlot(conn)),
      );

      series
        .querySelector(".moveSeriesUp")
        ?.addEventListener("click", moveSeriesUp);
      series
        .querySelector(".moveSeriesDown")
        ?.addEventListener("click", moveSeriesDown);

      // if there's more than one series, enable moveSeriesUp and
      // moveSeriesDown buttons, then disable the first and the last,
      // respectively
      const seriesN = Array.from(document.querySelectorAll(".series")).length;
      ($$(".moveSeriesUp") as NodeListOf<Element>).forEach(
        (node) => ((node as HTMLInputElement).disabled = seriesN == 1),
      );
      ($$(".moveSeriesDown") as NodeListOf<Element>).forEach(
        (node) => ((node as HTMLInputElement).disabled = seriesN == 1),
      );

      // disable the first up button and last down button
      ($(".moveSeriesUp") as HTMLInputElement).disabled = true;
      const downButtons = Array.from(
        $$(".moveSeriesDown") as NodeListOf<Element>,
      );
      (downButtons[downButtons.length - 1] as HTMLInputElement).disabled = true;

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

function moveSeriesUp(evt: Event) {
  const upButton = evt.target as HTMLElement;

  if (!upButton.parentElement) {
    throw new Error("unable to find parent element");
  }
  const series = upButton.parentElement;
  const prevSib = series?.previousSibling;
  const serieses = series?.parentElement;
  serieses?.removeChild(series);
  serieses?.insertBefore(series, prevSib);
}

function moveSeriesDown(evt: Event) {
  const downButton = evt.target as HTMLElement;

  if (!downButton.parentElement) {
    throw new Error("unable to find parent element");
  }
  const series = downButton?.parentElement;
  const nextSib = series?.nextSibling;
  const serieses = series?.parentElement;
  serieses?.removeChild(series);
  nextSib?.after(series);
}

async function removeSeries(conn: duckdb.AsyncDuckDBConnection): Promise<void> {
  const serieses = Array.from(document.querySelectorAll(".series"));

  if (serieses.length == 1) {
    return;
  }

  // if there are two series, disable the remove series button as we're about
  // to remove the second
  ($(".remove-series") as HTMLInputElement).disabled = serieses.length == 2;

  serieses[serieses.length - 1].remove();

  rePlot(conn)();
}

const QUANTILE_RE = /quantile\((\w+)\)/;
function parseQuantiles(filter: string): [string, string[]] {
  const quantiles = [];
  let res = null;
  while ((res = QUANTILE_RE.exec(filter)) !== null) {
    const [call, field] = res;
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

function isChecked(selector: string, node: Element = document.body): boolean {
  return (node.querySelector(selector) as HTMLInputElement).checked
    ? true
    : false;
}

function inputValue(selector: string, node: Element = document.body): string {
  return (node.querySelector(selector) as HTMLInputElement).value;
}

function setValue(selector: string, value: string | number | boolean): void {
  try {
    if (typeof value == "boolean") {
      (document.querySelector(selector) as HTMLInputElement).checked = value;
    } else if (typeof value == "number") {
      (document.querySelector(selector) as HTMLInputElement).value =
        value.toString();
    } else {
      (document.querySelector(selector) as HTMLInputElement).value = value;
    }
  } catch (err) {
    console.error(
      `Failed setting selector ${selector} to value ${value}:\n${err}`,
    );
  }
}

function numValue(selector: string, node: Element = document.body): number {
  return (node.querySelector(selector) as HTMLInputElement).valueAsNumber;
}

// getSeries Reads each series and turns its choices into a Series object for
// graphing. No other function should be reaching into a series to check its
// values.
async function getSerieses(
  conn: duckdb.AsyncDuckDBConnection,
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

      const data = (await query(conn, makeQuery(filter, year))) as PlayerData[];
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
    }),
  );
}

function addGraphOptions(conn: duckdb.AsyncDuckDBConnection) {
  const xDefault = "ts_pct";
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

  const yDefault = "usg_pct";
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

  const graphOptions = html`<div>
    <div class="controlrow">
      <button id="swapAxes">🔄 swap x and y</button>
      <button id="clearOptions">🧹 clear options</button>
      <button id="download">⬇️ download</button>
    </div>

    <div class="controlgroup">
      <h3>Graph Options</h3>
      <div class="controlrow">
        Width:
        <input type="number" class="number2" id="width" value="800" />
        Height:
        <input type="number" class="number2" id="height" value="800" />
      </div>
      <div class="controlrow">Title: <input type="text" id="title" /></div>
      <div class="controlrow">
        Subtitle: <input type="text" id="subtitle" />
      </div>
      <div class="controlrow">
        margin top:
        <input type="number" class="margin number" id="marginTop" value="40" />
        right:
        <input
          type="number"
          class="margin number"
          id="marginRight"
          value="50"
        />
        bottom:
        <input
          type="number"
          class="margin number"
          id="marginBottom"
          value="40"
        />
        left:
        <input type="number" class="margin number" id="marginLeft" value="60" />
      </div>
    </div>

    <div class="controlgroup">
      <h3>X axis</h3>
      <div class="controlrow">
        <select id="xField">
          ${xfields}
        </select>
      </div>
      <div class="controlrow">
        ticks:
        <input type="number" class="axis number" id="xTicks" value="5" />
        label offset:
        <input type="number" class="axis number" id="xLabelOffset" value="30" />
        padding:
        <input type="number" class="axis number" id="xPadding" value="5" />
        label anchor:
        <select id="xLabelAnchor">
          <option value="right">right</option>
          <option value="left">left</option>
          <option value="center" selected>center</option>
        </select>
      </div>
      <div class="controlrow">
        label: <input type="text" id="xLabel" value="true shooting %" />
        <label for="xIncludeZero">Start range at 0</label>
          <input type="checkbox" id="xIncludeZero"></input>
      </div>
    </div>

    <div class="controlgroup">
      <h3>Y axis</h3>
      <div class="controlrow">
        <select id="yField">
          ${yfields}
        </select>
      </div>
      <div class="controlrow">
        ticks:
        <input type="number" class="axis number" id="yTicks" value="5" />
        label offset:
        <input type="number" class="axis number" id="yLabelOffset" value="40" />
        padding:
        <input type="number" class="axis number" id="yPadding" value="5" />
        label anchor:
        <select id="yLabelAnchor">
          <option value="top" selected>top</option>
          <option value="bottom">bottom</option>
          <option value="center">center</option>
        </select>
      </div>
      <div class="controlrow">
        label: <input type="text" id="yLabel" value="usage percentage" />
        <label for="yIncludeZero">Start range at 0</label>
          <input type="checkbox" id="yIncludeZero"></input>
      </div>
    </div>

    <div class="controlgroup">
      <h3>R axis</h3>
      <div class="controlrow">
        <select id="rField">
          ${rfields}
        </select>
      </div>
      <div class="controlrow">
        min size:
        <input type="number" class="axis number" id="rMin" value="4" /> max
        size:
        <input type="number" class="axis number" id="rMax" value="8" />
      </div>
      <div class="controlrow">label: <input type="text" id="rLabel" /></div>
    </div>
  </div>`;
  console.log(graphOptions);
  $(".graph-options")?.insertAdjacentElement("afterbegin", graphOptions);
  // $(".graph-options")?.insertBefore($(".serieses") as Element, graphOptions);

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
    "#xIncludeZero",
    "#xTicks",
    "#xLabelOffset",
    "#xLabelAnchor",
    "#xLabel",
    "#xPadding",
    "#yIncludeZero",
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
    rePlot(conn)();
  });

  graphOptions.querySelector("#clearOptions").addEventListener("click", () => {
    const url = new URL(window.location.toString());
    const stateUrl = `${url.origin}${url.pathname}`;
    window.history.replaceState(null, "", stateUrl);
  });
}

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC",
  };

  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
}

window.addEventListener("DOMContentLoaded", async (_: Event) => {
  const res = await fetch(`${DATA_URL}/metadata.json`);
  const data = (await res.json()) as StatsMeta;
  ($(".updated") as HTMLElement).innerText = `data updated on ${formatDate(
    new Date(data.updated),
  )} UTC`;

  const conn = await initDuckDb();
  window.conn = conn;

  addGraphOptions(conn);
  $(".add-series")?.addEventListener("click", () => addSeries(conn));
  $(".remove-series")?.addEventListener("click", () => removeSeries(conn));

  // Add the first series, and wire up the add series button for adding more
  addSeries(conn);
});
