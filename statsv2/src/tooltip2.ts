import { create, pointer, select } from "d3-selection";
import { quadtree } from "d3-quadtree";

// If you have two layers on top of each other, there needs to be coordination
// between them to determine which of them ought to display the tooltip.
//
// As this currently stands, "last layer wins" and the tooltip is only
// displayed for that layer; I'm not sure how to do better with observable
// plot at all; there's no normal method for having access to all marks

interface Style {
  width: number;
  height: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
}

type TooltipOptions = {
  x: string;
  y: string;
  content: string;
};

interface Channels {
  x: number[];
  y: number[];
  content: string[];
}

function constant(x: any) {
  return () => x;
}

export function tooltip(Plot: any): any {
  class Tooltip extends Plot.Mark {
    constructor(data: any[], options: TooltipOptions) {
      super(
        data,
        [
          { name: "x", value: options.x, scale: "x", optional: true },
          { name: "y", value: options.y, scale: "y", optional: true },
          { name: "content", value: options.content },
        ],
        options
      );
      this.data = data;
      this.x = options.x;
      this.y = options.y;
      this.content = options.content;
      // we don't want this name to collide with the user's stylesheets
      this.tooltipClass = "__plot-tooltip__";

      // This will be a d3 selection pointing to the tooltip
      this.tooltip = undefined;
    }

    render(index: any, scales: any, channels: Channels, style: Style): any {
      const {
        marginTop,
        marginRight,
        marginLeft,
        marginBottom,
        width,
        height,
      } = style;
      // TODO: this is taken from the other tooltip. Can I just pass in the
      // scale? I don't understand the const bit
      const x = channels.x
        ? (i: any) => channels.x[i]
        : constant((marginLeft + width - marginRight) / 2);
      const y = scales.y
        ? (i: any) => channels.y[i]
        : constant((marginTop + height - marginBottom) / 2);

      this.tree = quadtree()
        .x(x)
        .y(y)
        .addAll(
          index.filter((i: any) => x(i) !== undefined && y(i) !== undefined)
        );
      console.log("🎄", this.tree);

      const g = create("svg:g");
      this.g = g;
      g.attr("class", "tooltip-dummy");
      setTimeout(() => {
        const svg = (g.node() as SVGElement).ownerSVGElement;
        this.svg = svg;
        this.tooltip = select(`.${this.tooltipClass}`);
        if (this.tooltip.empty()) {
          this.tooltip = select(svg?.parentElement as HTMLElement)
            .append("div")
            .attr("class", this.tooltipClass)
            .style("position", "absolute")
            .style("background", "rgba(69, 77, 93, .9)")
            .style("border-radius", ".2rem")
            .style("color", "#fff")
            .style("display", "block")
            .style("font-size", "14px")
            .style("padding", ".2rem .4rem")
            .style("text-overflow", "ellipsis")
            .style("white-space", "pre")
            .style("z-index", "300")
            .style("visibility", "hidden");
        } else {
          console.error("Do not include more than one Tooltip mark in a graph");
        }

        select(svg).on("touchmove mousemove", this.hover.bind(this));
        select(svg).on("touchend mouseleave", () =>
          this.tooltip.style("visibility", "hidden")
        );
      });
      return g.node();
    }

    hover(evt: any): boolean {
      // get the mouse coördinates relative to the owning SVG
      const [mx, my] = pointer(evt, this.svg);
      const i = this.tree.find(mx, my);

      // for reasons I don't understand, we need the coordinates from the g for
      // the tooltip. I don't thoroughly understand how absolute positioning
      // works, I guess.
      const [px, py] = pointer(evt, this.g);
      this.tooltip
        .style("visibility", "visible")
        .style("top", `${py - 10}px`)
        .style("left", `${px + 10}px`)
        .html(this.data[i][this.content]);

      // TODO: only show the point if it's within some closeness range
      // if (Math.hypot(p[0] - x(i), p[1] - y(i)) < 30) return i;

      return true;
    }
  }

  return function tooltip(data: any[], options: TooltipOptions): any {
    return new Tooltip(data, options);
  };
}
