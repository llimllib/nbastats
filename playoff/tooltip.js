// customized from
// https://observablehq.com/@fil/experimental-plot-tooltip-01
window.addEventListener("DOMContentLoaded", async (_evt) => {
  function constant(x) {
    return () => x;
  }

  function arrowTextFormatter(div, value, { direction } = {}) {
    const g = d3.select(div).append("svg").style("overflow", "visible");

    const path = g.append("path").attr("fill", "white").attr("stroke", "black");

    const text = g
      .append("text")
      .style("pointer-events", "all")
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

    const { width, height } = text.node().getBBox();

    const w = 8 * Math.ceil(width / 8);
    const h = 8 * Math.ceil(height / 8);

    if (direction == "down") {
      text.attr("transform", `translate(${-w / 2}, ${30})`);
      path
        .attr("transform", `translate(0, 5)`)
        .attr(
          "d",
          `M${-w / 2 - 10},5 H-5 l5,-5 l5,5 H${w / 2 + 10} v${h + 20} h-${
            w + 20
          } z`
        );
    } else if (direction == "up") {
      text.attr("transform", `translate(${-w / 2}, ${-h - 10})`);
      path
        .attr("transform", `translate(0, ${-h - 35})`)
        .attr(
          "d",
          `M${-w / 2 - 10},5 h${w + 20} v${h + 20} h-${
            w / 2 + 5
          } l-5,5 l-5,-5 h-${w / 2 + 5} z`
        );
    } else if (direction == "right") {
      text.attr("transform", `translate(${24}, ${-h / 2 + 5})`);
      path
        .attr(
          "d",
          `M0,-10 v${h / 2} l-5,5 l5,5 v${h / 2} h${w + 10} v${-h - 10} z`
        )
        .attr("transform", `translate(${14}, ${-h / 2})`);
    }
    // todo: "left"
  }

  const callout = (
    container,
    { formatter, direction, text, x, y, transform, dx, dy } = {}
  ) => {
    if (text) {
      container
        .style("display", null)
        .style("left", `${x + dx}px`)
        .style("top", `${y + dy}px`);
      formatter(
        container.html("").append("div").style("transform", transform).node(),
        text,
        { direction }
      );
    } else {
      container.style("display", "none");
    }
  };

  function ownerFigure(g) {
    const svg = g.ownerSVGElement;
    return svg?.parentElement?.nodeName === "FIGURE" ? svg.parentElement : svg;
  }

  const objectFormatter = ({ columns, bolded = [], width = 300 } = {}) =>
    function (div, obj, { direction } = {}) {
      // TODO: direction

      const bold = (t) => `<b>${t}</b>`;

      const rows = Array.from(columns || Object.keys(obj), (key) =>
        bolded.includes(key)
          ? { key: bold(key), value: bold(obj[key]) }
          : { key, value: obj[key] }
      );

      const table = d3
        .select(div)
        .append("div")
        .style("border", "solid .5px #333")
        .style("border-radius", "5px")
        .style("background", "white")
        .style("padding-top", "5px")
        .style("padding-left", "5px")
        .style("padding-right", "0px")
        .style("max-width", `${width}px`)
        .append(() =>
          Table(rows, {
            width: {
              key: 80,
              value: width - 80,
            },
            format: {
              key: (d) => html`${d}`,
              value: (d) => html`${d}`,
            },
          })
        );

      table.style("overflow", "hidden");
      table.select("tbody").style("pointer-events", "all");
      table.select("thead").remove();
      table.select("form").style("margin", "0");
      table.selectAll("tbody tr td:first-child").style("visibility", "hidden");
    };

  const defaultFormatter = (div, value, { direction } = {}) => {
    if (typeof value === "object")
      return objectFormatter(div, value, { direction });
    return arrowTextFormatter(div, value, { direction });
  };

  class Tooltip extends Plot.Mark {
    constructor(
      data,
      {
        x,
        y,
        z,
        stroke = "black",
        fill = "none",
        r = 4,
        content = (d) => d,
        direction = "down",
        tx,
        ty,
        dx = 0,
        dy = 0,
        onclick,
        onmouseover,
        annotate,
        formatter = defaultFormatter,
        ...options
      } = {}
    ) {
      super(
        data,
        [
          { name: "x", value: x, scale: "x", optional: true },
          { name: "y", value: y, scale: "y", optional: true },
          { name: "z", value: z, optional: true },
          { name: "content", value: content },
        ],
        options
      );

      this.r = r;
      this.fill = fill;
      this.stroke = stroke;
      this.annotate = annotate;
      this.direction = direction;
      this.tx = tx;
      this.ty = ty;
      this.dx = dx;
      this.dy = dy;
      this.onclick = onclick;
      this.onmouseover = onmouseover;
      this.formatter = formatter;
    }
    render(
      index,
      scales,
      { x: X, y: Y, z: Z, content: T },
      { width, height, marginTop, marginRight, marginBottom, marginLeft }
    ) {
      const {
        r,
        stroke,
        fill,
        annotate,
        direction,
        tx,
        ty,
        dx,
        dy,
        onclick,
        onmouseover,
        formatter,
      } = this;
      const x = X
        ? (i) => X[i]
        : constant((marginLeft + width - marginRight) / 2);
      const y = Y
        ? (i) => Y[i]
        : constant((marginTop + height - marginBottom) / 2);

      const quadtree = d3
        .quadtree()
        .x(x)
        .y(y)
        .addAll(index.filter((i) => x(i) !== undefined && y(i) !== undefined));

      const g = d3.create("svg:g");
      const highlights = g.append("g");

      let frozen = -1; // freeze the tooltip on click

      const catcher = g
        .append("rect")
        .attr("height", height)
        .attr("width", width)
        .style("fill", "none")
        .attr("pointer-events", "all")
        .on("pointerenter", () => {})
        .on("pointerout", (event) => frozen === -1 && hide())
        .on("pointermove", move);

      catcher.on("click", (event) => {
        const i = find(event);
        if (frozen > -1 && i > -1 && i !== frozen) {
          show((frozen = i));
        } else {
          frozen = frozen === -1 ? i : -1;
        }
        if (typeof onclick === "function" && i >= 0)
          onclick(event, i, g.node());
      });

      function find(event) {
        const p = d3.pointers(event)[0],
          i = quadtree.find(...p);
        if (Math.hypot(p[0] - x(i), p[1] - y(i)) < 30) return i;
        return -1;
      }

      function move(event) {
        if (frozen > -1) return;
        const i = find(event);
        if (i > -1) {
          show(i);
          if (typeof onmouseover === "function") {
            onmouseover(event, i, g.node());
          }
        } else hide();
      }

      let tooltip;
      let xy;
      hide();

      setTimeout(() => {
        // in case the user uses onclick / onmouseover for dataflow
        const owner = ownerFigure(g.node());
        owner.value = "";
        owner.dispatchEvent(new CustomEvent("input"));
        tooltip =
          this.tooltip ||
          (this.tooltip = d3
            .select(owner.parentElement)
            .insert("div", ":first-child")
            .style("position", "relative")
            .style("height", 0)
            .style("pointer-events", "none")
            .style("font", "10px sans-serif")
            .style("z-index", 2));

        xy = g
          .select(function () {
            return this.parentElement;
          })
          .attr("transform");
        if (xy) xy = xy.replace(/(\d+)/g, "$1px"); // html wants px
      }, 1);

      return g.node();

      function show(i) {
        highlights
          .selectAll("circle")
          .data(index.filter((j) => i === j || (Z && Z[i] === Z[j])))
          .join("circle")
          .attr("r", r)
          .style("fill", fill)
          .style("stroke", stroke)
          .attr("cx", x)
          .attr("cy", y);

        tooltip &&
          tooltip.call(callout, {
            formatter,
            direction,
            text: T[i],
            x: tx === undefined ? x(i) : tx,
            y: ty === undefined ? y(i) : ty,
            transform: xy,
            dx,
            dy,
          });
      }

      function hide() {
        tooltip && tooltip.call(callout);
        highlights.html("");

        if (annotate !== undefined && index.includes(annotate)) {
          setTimeout(() => show(annotate), 200);
        }
      }
    }
  }

  Plot.Tooltip = (data, options) => new Tooltip(data, options);
});
