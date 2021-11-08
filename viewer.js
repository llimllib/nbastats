// TODO
// * data series
//   * we should be rendering _n_ series of data
//   * you should be able to style each series as you wish
//   * but they all should be shown on the same axes
// * organize all the inputs
//   * sections?
//   * ability to open and close sections?
//   * what's a comparable UI?
//   * sorting, autocomplete? glossary?
//     * I tried autocomplete and it wasn't a great experience at first blush
// * show UI indication of legal filters
// * permalinks to a graph with a given filter/year/resolution/etc
// * select multiple years
//   * view a set of players through years
// * nice transitions between years
//   * transitions on graph size change? probs overkill
// * highlight a player or particular set of players
//   * something like, one dot stays lit and the others go grey
// * small multiples by team?
// * teams instead of players
// * labels sometimes overlap each other, or dots
//   * collision detect after labelling?
//     * example: https://observablehq.com/@fil/automated-label-placement-cities
// * ability to customize x and y domains
// * handle players that are coincident better
//   * right now we just have to ensure we ignore null cells anywhere they're used
//   * what even is the right thing to do? I dunno
//   * maybe when you roll over a dot that's obscuring another dot, they separate themselves?
// * the tooltip sometimes goes off the bottom, it should appear above the dot
//   when it's low
//   * convert it to an HTML absolutely positioned tooltip?
//   * I know I have that in one of my other projects
// * would be cool to be able to set a linear or log scale
//   * right now we just choose linear by default but for example, if you
//     choose FT% as the circle size, you see that Andre Drummond looks tiny and
//     everybody else looks huge.
//   * if it were a log scale, the good shooters would jump out at you
// * should I thread a single transition object through all the transitions?
// * checkbox to show all labels no matter what
// * the labels aren't quite where they should be
// * playoffs vs regular season
// * show loading spinner
// * add option to remove traded player stats maybe?
// * fix transferred player bug: select "raptor defensive rating" as y axis and
//   you get a bunch of undefined coordinates and players at (0,0)
// * keep history of your filters in localstorage or something

const $ = (s) => document.querySelector(s);

const settings = {
  padding: { left: 60, top: 60, right: 40, bottom: 40 },
  width: 800,
  height: 800,
  dotRadius: 6,
  maxRadius: 16,
  minRadius: 4,
  duration: 750,
  domainPadding: 0.05,
};

window.DATA_URL = 'https://cdn.billmill.org/nbastats';
// window.DATA_URL = './data';

function hover(event, tooltip, stats, scales, fields, delaunay, cells) {
  const [mx, my] = d3.pointer(event, this);

  const nearest = delaunay.find(mx, my);
  const closestPlayer = cells[nearest][0];

  var rtext = '';
  if (statMeta[fields.r]) {
    rtext = '\n' + statMeta[fields.r].name + ': ' + closestPlayer[fields.r];
  }

  tooltip
    .attr(
      'transform',
      `translate(${scales.x(closestPlayer[fields.x])},${scales.y(
        closestPlayer[fields.y]
      )})`
    )
    .call(
      callout,
      `${closestPlayer.name}
${closestPlayer.team}
${statMeta[fields.x].name}: ${closestPlayer[fields.x]}
${statMeta[fields.y].name}: ${closestPlayer[fields.y]}${rtext}`
    );
}

function orient(pos, r) {
  // TODO: I added a transition to these, which worked for points that were
  // already present but failed for entering points. Figure out why so I can
  // have nice label transitions everywhere
  if (pos == 'top') {
    return (text) => text.attr('text-anchor', 'middle').attr('y', -r);
  } else if (pos == 'right') {
    return (text) =>
      text.attr('text-anchor', 'start').attr('dy', '0.35em').attr('x', r);
  } else if (pos == 'bottom') {
    return (text) =>
      text.attr('text-anchor', 'middle').attr('dy', '0.71em').attr('y', r);
  } else if (pos == 'left') {
    return (text) =>
      text.attr('text-anchor', 'end').attr('dy', '0.35em').attr('x', -r);
  }
}

function orientText(scales, fields) {
  return function([player, cell]) {
    // if two players have the same stats on the selected dimension, the
    // voronoi cell will be null. Skip this player for now - do something more
    // intelligent with coincident players later
    if (!cell) {
      return;
    }
    const [cx, cy] = d3.polygonCentroid(cell);
    const angle =
      (Math.round(
        (Math.atan2(
          cy - scales.y(player[fields.y]),
          cx - scales.x(player[fields.x])
        ) /
          Math.PI) *
        2
      ) +
        4) %
      4;
    const r = scales.r(player[fields.r]) * 1.1;
    d3.select(this).call(
      angle === 0
        ? orient('right', r)
        : angle === 3
          ? orient('top', r)
          : angle === 1
            ? orient('bottom', r)
            : orient('left', r)
    );
  };
}

function calcVoronoi(stats, scales, fields) {
  const delaunay = d3.Delaunay.from(
    stats,
    (p) => scales.x(p[fields.x]),
    (p) => scales.y(p[fields.y])
  );
  const voronoi = delaunay.voronoi([
    -1,
    -1,
    settings.width + 1,
    settings.height + 1,
  ]);

  var cells = stats.map((d, i) => [d, voronoi.cellPolygon(i)]);

  return [delaunay, cells];
}

function pointLabels(svg, stats, scales, fields, cells) {
  var orienter = orientText(scales, fields);

  const container = svg
    .append('g')
    .attr('class', 'labels')
    .style('font', '10px sans-serif');

  container
    .selectAll('text')
    .data(cells, ([p, _]) => p.name + p.team)
    .join('text')
    .attr('class', 'pointLabel')
    .each(orienter)
    .attr(
      'transform',
      ([p, _]) => `translate(${scales.x(p[fields.x])},${scales.y(p[fields.y])})`
    )
    .attr('display', ([, cell]) =>
      !cell || -d3.polygonArea(cell) > 3000 ? null : 'none'
    )
    .text(([p, _]) => p.name);

  return function(stats, scales, fields, cells) {
    var orienter = orientText(scales, fields);

    // TODO the label immediately changes orientation instead of
    // transitioning nicely, though it does move with the point
    container
      .selectAll('text')
      .data(cells, ([p, _]) => p.name + p.team)
      .join('text')
      .transition()
      .duration(settings.duration)
      .each(orienter)
      .attr(
        'transform',
        ([p, _]) =>
          `translate(${scales.x(p[fields.x])},${scales.y(p[fields.y])})`
      )
      .attr('display', ([, cell]) =>
        !cell || -d3.polygonArea(cell) > 3000 ? null : 'none'
      )
      .text(([p, _]) => p.name);
  };
}

function paddedExtent(lst, fn, reversed) {
  var [min, max] = d3.extent(lst, fn);
  if (reversed === undefined || !reversed) {
    return [
      min * (1 - settings.domainPadding),
      max * (1 + settings.domainPadding),
    ];
  } else {
    return [
      max * (1 + settings.domainPadding),
      min * (1 - settings.domainPadding),
    ];
  }
}

function makeScales(stats, fields) {
  const xAxType = statMeta[fields.x].type;
  const xreversed = statMeta[fields.x].reversed;
  var x;
  if (xAxType == 'categorical') {
    const domain = new Set(stats.map((p) => p[fields.x]));
    x = d3.scaleBand(domain, [
      settings.padding.left,
      settings.width - settings.padding.right,
    ]);
  } else {
    x = d3
      .scaleLinear()
      .domain(paddedExtent(stats, (s) => s[fields.x], xreversed))
      .range([settings.padding.left, settings.width - settings.padding.right]);
  }

  const yAxType = statMeta[fields.y].type;
  const yreversed = statMeta[fields.y].reversed;
  var y;
  if (yAxType == 'categorical') {
    const domain = new Set(stats.map((p) => p[fields.y]));
    y = d3.scaleBand(domain, [
      settings.padding.top,
      settings.height - settings.padding.bottom,
    ]);
  } else {
    y = d3
      .scaleLinear()
      .domain(d3.reverse(paddedExtent(stats, (s) => s[fields.y], yreversed)))
      .range([settings.padding.top, settings.height - settings.padding.bottom]);
  }

  var r;
  if (!isNaN(fields.r)) {
    // if radius is a number, the scale is just a constant
    r = (_) => parseFloat(fields.r);
  } else {
    r = d3
      .scaleLinear()
      .domain(d3.extent(stats, (s) => s[fields.r]))
      .range([settings.minRadius, settings.maxRadius]);
  }

  return { x: x, y: y, r: r };
}

// https://observablehq.com/@d3/styled-axes
function axes(svg, stats, scales) {
  var xaxis = d3
    .axisTop(scales.x)
    .tickSize(settings.height - settings.padding.top)
    .tickFormat(d3.format('.2r'));

  const xaxisg = svg
    .append('g')
    .attr('transform', `translate(0, ${settings.height - 20})`)
    .attr('class', 'xaxis')
    .call(xaxis)
    .call((g) => g.select('.domain').remove())
    .call((g) => g.selectAll('.tick line').attr('stroke-opacity', 0.1))
    .call((g) => g.selectAll('.tick text').attr('y', 0).attr('dx', -15));

  const yaxis = d3
    .axisRight(scales.y)
    .tickSize(settings.width - settings.padding.right)
    .tickFormat(d3.format('.2r'));

  const yaxisg = svg
    .append('g')
    .attr('transform', `translate(20, 0)`)
    .attr('class', 'yaxis')
    .call(yaxis)
    .call((g) => g.select('.domain').remove())
    .call((g) => g.selectAll('.tick line').attr('stroke-opacity', 0.1))
    .call((g) => g.selectAll('.tick text').attr('dy', -4).attr('x', 4));

  // return an update function
  return function(stats, scales, fields) {
    const xAxType = statMeta[fields.x].type;
    if (xAxType == 'categorical') {
      xaxis.scale(scales.x).tickFormat((p) => p);
    } else {
      xaxis.scale(scales.x).tickFormat(d3.format('.2r'));
    }

    const yAxType = statMeta[fields.y].type;
    if (yAxType == 'categorical') {
      yaxis.scale(scales.y).tickFormat((p) => p);
    } else {
      yaxis.scale(scales.y).tickFormat(d3.format('.2r'));
    }

    xaxisg
      .transition()
      .duration(settings.duration)
      .call(xaxis)
      .on('start', function() {
        xaxisg.select('.domain').remove(); // https://stackoverflow.com/a/50254240/42559
      })
      .call((g) => g.select('.domain').remove())
      .call((g) => g.selectAll('.tick line').attr('stroke-opacity', 0.1))
      // this looks better with dx set to 15, but then is wong for categorical
      // variables; TODO: update this value when categoricals are selected and
      // remove it when unselected
      .call((g) => g.selectAll('.tick text').attr('y', 0).attr('dx', -15));

    yaxisg
      .transition()
      .duration(settings.duration)
      .call(yaxis)
      .on(
        'start',
        () => yaxisg.select('.domain').remove() // https://stackoverflow.com/a/50254240/42559
      )
      .call((g) => g.select('.domain').remove())
      .call((g) => g.selectAll('.tick line').attr('stroke-opacity', 0.1))
      // this line causes many <<Error: <text> attribute dy: Expected length,
      // "NaN".>> for unknown reasons, but oddly it seems to work fine
      .call((g) => g.selectAll('.tick text').attr('x', 4).attr('dy', -4));
  };
}

function points(svg, stats, scales, fields) {
  var useTeamColors = $('#teamcolors').checked;

  const container = svg.append('g').attr('class', 'points');

  // points
  // https://observablehq.com/@d3/scatterplot-tour
  const points = container
    .selectAll('g')
    .data(stats, (d) => d.name + d.team)
    .join('g')
    .attr('data-player-name', (d) => d.name)
    .attr(
      'transform',
      (d) => `translate(${scales.x(d[fields.x])},${scales.y(d[fields.y])})`
    );
  if (useTeamColors) {
    points
      .append('circle')
      .attr('class', 'outer')
      .attr('fill', (d) => teams[d.team].colors[0])
      .attr('r', (d) => scales.r(d[fields.r]));
    points
      .append('circle')
      .attr('class', 'inner')
      .attr('fill', (d) => teams[d.team].colors[1])
      .attr('r', (d) => scales.r(d[fields.r]) / 2);
  } else {
    points
      .append('circle')
      .attr('class', 'outer')
      .attr('fill', '#1f77b4')
      .attr('r', (d) => scales.r(d[fields.r]));
  }

  return function(stats, scales, fields) {
    useTeamColors = $('#teamcolors').checked;
    d3.selectAll('.player_label').remove();

    // TODO: does this handle entries and exits?
    container
      .selectAll('g')
      .data(stats, (d) => d.name + d.team)
      .join(
        (enter) => {
          var g = enter.append('g');
          if (useTeamColors) {
            g.append('circle')
              .attr('class', 'outer')
              .attr('fill', (d) => teams[d.team].colors[0])
              .attr('r', (d) => scales.r(d[fields.r]));
            g.append('circle')
              .attr('class', 'inner')
              .attr('fill', (d) => teams[d.team].colors[1])
              .attr('r', (d) => scales.r(d[fields.r]) / 2);
          } else {
            g.append('circle')
              .attr('class', 'outer')
              .attr('fill', '#1f77b4')
              .attr('r', (d) => scales.r(d[fields.r]));
          }
          g.call((enter) => {
            enter
              .transition()
              .duration(settings.duration)
              .attr(
                'transform',
                (d) =>
                  `translate(${scales.x(d[fields.x])},${scales.y(d[fields.y])})`
              );
          });
          return g;
        },
        (update) =>
          // XXX: the problem here is that we need to update the radius of the
          // two circles inside the g, and I don't really know how to do that. I
          // think it's important that the sizes transition nicely instead of
          // jump to smaller?
          update.call((update) =>
            update
              .each((p, i, ns) => {
                d3.select(ns[i])
                  .select('circle.outer')
                  .transition()
                  .duration(settings.duration)
                  .attr('r', (d) => scales.r(d[fields.r]));
                d3.select(ns[i])
                  .select('circle.inner')
                  .transition()
                  .duration(settings.duration)
                  .attr('r', (d) => scales.r(d[fields.r]) / 2);
              })
              .transition()
              .attr(
                'transform',
                (d) =>
                  `translate(${scales.x(d[fields.x])},${scales.y(d[fields.y])})`
              )
              .duration(settings.duration)
          ),
        (exit) => exit.remove()
      );
  };
}

function axisLabels(svg, fields) {
  // axis labels
  //
  // I like the axis labels on health & wealth:
  // https://observablehq.com/@mbostock/the-wealth-health-of-nations
  const xlabel = svg
    .append('text')
    .attr('class', 'x label')
    .attr('text-anchor', 'end')
    .attr('x', settings.width - 20)
    .attr('y', settings.height - 5)
    .text('→' + statMeta[fields.x].name);
  const ylabel = svg
    .append('text')
    .attr('class', 'y label')
    .attr('text-anchor', 'left')
    .attr('x', 15)
    .attr('y', 40)
    .text('↑' + statMeta[fields.y].name);
  const rlabel = svg
    .append('text')
    .attr('class', 'r label')
    .attr('text-anchor', 'left')
    .attr('x', 10)
    .attr('y', 20)
    .style('display', 'none');

  if (isNaN(fields.r)) {
    rlabel.text('⬤ ' + statMeta[fields.r].name).style('display', undefined);
  } else {
    rlabel.style('display', 'none');
  }

  return function(fields) {
    xlabel.text('→' + statMeta[fields.x].name);
    ylabel.text('↑ ' + statMeta[fields.y].name);
    // don't add a radius label if the value is constant
    if (isNaN(fields.r)) {
      rlabel.text('⬤ ' + statMeta[fields.r].name).style('display', undefined);
    } else {
      rlabel.style('display', 'none');
    }
  };
}

// stats should be a list of player objects
function graph(stats, fields) {
  const svg = d3.select('#canvas');

  var scales = makeScales(stats, fields);
  var [delaunay, voronoiCells] = calcVoronoi(stats, scales, fields);
  const updateAxes = axes(svg, stats, scales);
  const updateAxisLabels = axisLabels(svg, fields);
  const updatePoints = points(svg, stats, scales, fields);
  const updateLabels = pointLabels(svg, stats, scales, fields, voronoiCells);

  // https://observablehq.com/@d3/line-chart-with-tooltip
  var tooltip = svg.append('g').attr('class', 'tooltip');

  svg.on('touchmove mousemove', (evt) =>
    hover(evt, tooltip, stats, scales, fields, delaunay, voronoiCells)
  );

  svg.on('touchend mouseleave', () => tooltip.call(callout, null));

  // https://observablehq.com/@d3/dot-plot
  return Object.assign(svg.node(), {
    update(stats, fields) {
      scales.y.domain(
        d3.reverse(
          paddedExtent(stats, (s) => s[fields.y], statMeta[fields.y].reversed)
        )
      );
      scales.x.domain(
        paddedExtent(stats, (s) => s[fields.x], statMeta[fields.x].reversed)
      );

      scales = makeScales(stats, fields);
      [delaunay, voronoiCells] = calcVoronoi(stats, scales, fields);
      updateAxes(stats, scales, fields);
      updateAxisLabels(fields);
      updatePoints(stats, scales, fields);
      updateLabels(stats, scales, fields, voronoiCells);

      // If an event listener was previously registered for the same typename
      // on a selected element, the old listener is removed before the new
      // listener is added.
      // https://github.com/d3/d3-selection/blob/v2.0.0/README.md#selection_on
      svg.on('touchmove mousemove', (evt) => {
        return hover(
          evt,
          tooltip,
          stats,
          scales,
          fields,
          delaunay,
          voronoiCells
        );
      });

      // remove the tooltip and redraw it; otherwise it won't properly appear
      // above everything else. SVG has no z-order; last drawn thing wins
      tooltip.remove();
      tooltip = svg.append('g').attr('class', 'tooltip');
    },
  });
}

// https://observablehq.com/@d3/line-chart-with-tooltip
function callout(g, value) {
  if (!value) return g.style('display', 'none');

  g.style('display', null)
    .style('pointer-events', 'none')
    .style('font', '10px sans-serif');

  const path = g
    .selectAll('path')
    .data([null])
    .join('path')
    .attr('fill', 'white')
    .attr('stroke', 'black');

  const text = g
    .selectAll('text')
    .data([null])
    .join('text')
    .call((text) =>
      text
        .selectAll('tspan')
        .data((value + '').split(/\n/))
        .join('tspan')
        .attr('x', 0)
        .attr('y', (d, i) => `${i * 1.1}em`)
        .style('font-weight', (_, i) => (i ? null : 'bold'))
        .text((d) => d)
    );

  // I don't know why eslint won't accept the _ as a legally unused var :shrug:
  /* eslint-disable no-unused-vars */
  const { _, y, width: w, height: h } = text.node().getBBox();
  /* eslint-enable */

  text.attr('transform', `translate(${-w / 2},${15 - y})`);
  path.attr(
    'd',
    `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`
  );
}

const statMeta = {
  pos: {
    name: 'Position',
    type: 'categorical',
  },
  age: {
    name: 'Age',
    type: 'numeric',
  },
  g: {
    name: 'Games',
    type: 'numeric',
  },
  gs: {
    name: 'Games Started',
    type: 'numeric',
  },
  mp: {
    name: 'Minutes Played',
    type: 'numeric',
  },
  fg: {
    name: 'Field Goals Made',
    type: 'numeric',
  },
  fga: {
    name: 'Field Goals Attempted',
    type: 'numeric',
  },
  fg_pct: {
    name: 'Field Goal %',
    type: 'numeric',
  },
  fg3: {
    name: '3pt Field Goals Made',
    type: 'numeric',
  },
  fg3a: {
    name: '3pt Field Goals Attempted',
    type: 'numeric',
  },
  fg3_pct: {
    name: '3pt Field Goal %',
    type: 'numeric',
  },
  fg2: {
    name: '2pt Field Goals Made',
    type: 'numeric',
  },
  fg2a: {
    name: '2pt Field Goals Attempted',
    type: 'numeric',
  },
  fg2_pct: {
    name: '2pt Field Goal %',
    type: 'numeric',
  },
  efg_pct: {
    name: 'Effective Field Goal %',
    type: 'numeric',
  },
  ft: {
    name: 'Free Throws Made',
    type: 'numeric',
  },
  fta: {
    name: 'Free Throw Attempts',
    type: 'numeric',
  },
  ft_pct: {
    name: 'Free Throw %',
    type: 'numeric',
  },
  orb: {
    name: 'Offensive Rebounds',
    type: 'numeric',
  },
  drb: {
    name: 'Defensive Rebounds',
    type: 'numeric',
  },
  trb: {
    name: 'Total Rebounds',
    type: 'numeric',
  },
  ast: {
    name: 'Assists',
    type: 'numeric',
  },
  stl: {
    name: 'Steals',
    type: 'numeric',
  },
  blk: {
    name: 'Blocks',
    type: 'numeric',
  },
  tov: {
    name: 'Turnovers',
    type: 'numeric',
  },
  pf: {
    name: 'Personal Fouls',
    type: 'numeric',
  },
  pts: {
    name: 'Points',
    type: 'numeric',
  },
  name: {
    name: 'name',
    type: 'categorical',
  },
  team: {
    name: 'Team',
    type: 'categorical',
  },
  per: {
    name: 'PER',
    type: 'numeric',
  },
  ts_pct: {
    name: 'True Shooting %',
    type: 'numeric',
  },
  fg3a_per_fga_pct: {
    name: '3pt Attempted per Field Goal Attempted',
    type: 'numeric',
  },
  fta_per_fga_pct: {
    name: 'Free Throw Attempted per Field Goal Attempted',
    type: 'numeric',
  },
  orb_pct: {
    name: 'Offensive Rebound %',
    type: 'numeric',
  },
  drb_pct: {
    name: 'Defensive Rebound %',
    type: 'numeric',
  },
  trb_pct: {
    name: 'Total Rebound %',
    type: 'numeric',
  },
  ast_pct: {
    name: 'Assist %',
    type: 'numeric',
  },
  stl_pct: {
    name: 'Steal %',
    type: 'numeric',
  },
  blk_pct: {
    name: 'Block %',
    type: 'numeric',
  },
  tov_pct: {
    name: 'Turnover %',
    type: 'numeric',
  },
  usg_pct: {
    name: 'Usage %',
    type: 'numeric',
  },
  ows: {
    name: 'Offensive Win Shares',
    type: 'numeric',
  },
  dws: {
    name: 'Defensive Win Shares',
    type: 'numeric',
  },
  ws: {
    name: 'Win Shares',
    type: 'numeric',
  },
  ws_per_48: {
    name: 'Win Shares per 48 minutes',
    type: 'numeric',
  },
  obpm: {
    name: 'Offensive Box Plus-Minus',
    type: 'numeric',
  },
  dbpm: {
    name: 'Defensive Box Plus-Minus',
    type: 'numeric',
  },
  bpm: {
    name: 'Box Plus-Minus',
    type: 'numeric',
  },
  vorp: {
    name: 'VORP',
    type: 'numeric',
  },
  fg_per_mp: {
    name: 'Field Goals per 36 minutes',
    type: 'numeric',
  },
  fga_per_mp: {
    name: 'Field Goals Attempted per 36 minutes',
    type: 'numeric',
  },
  fg3_per_mp: {
    name: '3pt Field Goals per 36 minutes',
    type: 'numeric',
  },
  fg3a_per_mp: {
    name: '3pt Field Goals Attempted per 36 minutes',
    type: 'numeric',
  },
  fg2_per_mp: {
    name: '2pt Field Goals per 36 minutes',
    type: 'numeric',
  },
  fg2a_per_mp: {
    name: '2pt Field Goals Attempted per 36 minutes',
    type: 'numeric',
  },
  ft_per_mp: {
    name: 'Free Throws per 36 minutes',
    type: 'numeric',
  },
  fta_per_mp: {
    name: 'Free Throws Attempted per 36 minutes',
    type: 'numeric',
  },
  orb_per_mp: {
    name: 'Offensive Rebounds per 36 minutes',
    type: 'numeric',
  },
  drb_per_mp: {
    name: 'Defensive Rebounds per 36 minutes',
    type: 'numeric',
  },
  trb_per_mp: {
    name: 'Rebounds per 36 minutes',
    type: 'numeric',
  },
  ast_per_mp: {
    name: 'Assists per 36 minutes',
    type: 'numeric',
  },
  stl_per_mp: {
    name: 'Steals per 36 minutes',
    type: 'numeric',
  },
  blk_per_mp: {
    name: 'Blocks per 36 minutes',
    type: 'numeric',
  },
  tov_per_mp: {
    name: 'Turnovers per 36 minutes',
    type: 'numeric',
  },
  pf_per_mp: {
    name: 'Personal Fouls per 36 minutes',
    type: 'numeric',
  },
  pts_per_mp: {
    name: 'Points per 36 minutes',
    type: 'numeric',
  },
  fg_per_poss: {
    name: 'Fields Goals per 100 possessions',
    type: 'numeric',
  },
  fga_per_poss: {
    name: 'Field Goals Attempted per 100 possessions',
    type: 'numeric',
  },
  fg3_per_poss: {
    name: '3pt Field Goals per 100 possessions',
    type: 'numeric',
  },
  fg3a_per_poss: {
    name: '3pt Field Goal Attempts per 100 possessions',
    type: 'numeric',
  },
  fg2_per_poss: {
    name: '2pt Field Goals per 100 possessions',
    type: 'numeric',
  },
  fg2a_per_poss: {
    name: '2p Field Goal Attempts per 100 possessions',
    type: 'numeric',
  },
  ft_per_poss: {
    name: 'Free Throws per 100 possessions',
    type: 'numeric',
  },
  fta_per_poss: {
    name: 'Free Throws Attempted per 100 possessions',
    type: 'numeric',
  },
  orb_per_poss: {
    name: 'Offensive Rebounds per 100 possessions',
    type: 'numeric',
  },
  drb_per_poss: {
    name: 'Defensive Rebounds per 100 possessions',
    type: 'numeric',
  },
  trb_per_poss: {
    name: 'Rebounds per 100 possessions',
    type: 'numeric',
  },
  ast_per_poss: {
    name: 'Assists per 100 possessions',
    type: 'numeric',
  },
  stl_per_poss: {
    name: 'Steals per 100 possessions',
    type: 'numeric',
  },
  blk_per_poss: {
    name: 'Blocks per 100 possessions',
    type: 'numeric',
  },
  tov_per_poss: {
    name: 'Turnovers per 100 possessions',
    type: 'numeric',
  },
  pf_per_poss: {
    name: 'Personal Fouls per 100 possessions',
    type: 'numeric',
  },
  pts_per_poss: {
    name: 'Points per 100 possessions',
    type: 'numeric',
  },
  off_rtg: {
    name: 'Offensive Rating',
    type: 'numeric',
  },
  def_rtg: {
    name: 'Defensive Rating',
    type: 'numeric',
    reversed: true,
  },
  raptor_defense: {
    name: 'Raptor Defensive Rating',
    type: 'numeric',
  },
  raptor_offense: {
    name: 'Raptor Offensive Rating',
    type: 'numeric',
  },
  war_reg_season: {
    name: '538 Wins Above Replacement',
    type: 'numeric',
  },
  mp_per_g: {
    name: 'Minutes per Game',
    type: 'numeric',
  },
  fg_per_g: {
    name: 'Field Goals per Game',
    type: 'numeric',
  },
  fga_per_g: {
    name: 'Field Goal Attempts per Game',
    type: 'numeric',
  },
  fg3_per_g: {
    name: '3pt Field Goals per Game',
    type: 'numeric',
  },
  fg3a_per_g: {
    name: '3pt Field Goal Attempts per Game',
    type: 'numeric',
  },
  fg2_per_g: {
    name: '2pt Field Goals per Game',
    type: 'numeric',
  },
  fg2a_per_g: {
    name: '2pt Field Goal Attempts per Game',
    type: 'numeric',
  },
  ft_per_g: {
    name: 'Free Throws per Game',
    type: 'numeric',
  },
  fta_per_g: {
    name: 'Free Throws Attempted per Game',
    type: 'numeric',
  },
  orb_per_g: {
    name: 'Offensive Rebounds per Game',
    type: 'numeric',
  },
  drb_per_g: {
    name: 'Defensive Rebounds per Game',
    type: 'numeric',
  },
  trb_per_g: {
    name: 'Total Rebounds per Game',
    type: 'numeric',
  },
  ast_per_g: {
    name: 'Assists per Game',
    type: 'numeric',
  },
  stl_per_g: {
    name: 'Steals per Game',
    type: 'numeric',
  },
  blk_per_g: {
    name: 'Blocks per Game',
    type: 'numeric',
  },
  tov_per_g: {
    name: 'Turnovers per Game',
    type: 'numeric',
  },
  pf_per_g: {
    name: 'Personal Fouls per Game',
    type: 'numeric',
  },
  pts_per_g: {
    name: 'Points per Game',
    type: 'numeric',
  },
};

// rg -o --replace '$1' --no-filename 'teams/(\w{3})' data/**/stats.json | sort | uniq
// to get every team abbreivation in the data set. Remember teams change! NJN
// -> BKN for ex
//
// I gave the New Jersey Nets the same colors as the Brooklyn nets, but I
// should probably go back and get their real colors
const teams = {
  ATL: {
    name: 'Atlanta Hawks',
    colors: ['#C8102E', '#FDB927', '#000000', '#9EA2A2'],
  },
  BOS: {
    name: 'Boston Celtics',
    colors: ['#008348', '#BB9753', '#000000', '#A73832', '#FFFFFF'],
  },
  BRK: { name: 'Brooklyn Nets', colors: ['#000000', '#FFFFFF', '#707271'] },
  CHA: { name: 'Charlotte Bobcats', colors: ['#f26532', '#2f598c', '#959da0'] },
  CHI: { name: 'Chicago Bulls', colors: ['#CE1141', '#000000'] },
  CHO: {
    name: 'Charlotte Hornets',
    colors: ['#00788C', '#1D1160', '#A1A1A4', '#FFFFFF'],
  },
  CLE: {
    name: 'Cleveland Cavaliers',
    colors: ['#6F263D', '#FFB81C', '#041E42', '#000000'],
  },
  DAL: {
    name: 'Dallas Mavericks',
    colors: ['#0064B1', '#00285E', '#BBC4CA', '#000000'],
  },
  DEN: {
    name: 'Denver Nuggets',
    colors: ['#0E2240', '#FEC524', '#8B2131', '#244289'],
  },
  DET: {
    name: 'Detroit Pistons',
    colors: ['#1D428A', '#C8102E', '#BEC0C2', '#000000', '#FFFFFF'],
  },
  GSW: { name: 'Golden State Warriors', colors: ['#1D428A', '#FDB927'] },
  HOU: {
    name: 'Houston Rockets',
    colors: ['#CE1141', '#000000', '#9EA2A2', '#373A36', '#FFFFFF'],
  },
  IND: { name: 'Indiana Pacers', colors: ['#002D62', '#FDBB30', '#BEC0C2'] },
  LAC: {
    name: 'Los Angeles Clippers',
    colors: ['#C8102E', '#1D428A', '#000000', '#BEC0C2', '#FFFFFF'],
  },
  LAL: {
    name: 'Los Angeles Lakers',
    colors: ['#552583', '#FDB927', '#000000'],
  },
  MEM: {
    name: 'Memphis Grizzlies',
    colors: ['#5D76A9', '#12173F', '#707271', '#F5B112'],
  },
  MIA: { name: 'Miami Heat', colors: ['#000000', '#98002E', '#F9A01B'] },
  MIL: {
    name: 'Milwaukee Bucks',
    colors: ['#00471B', '#EEE1C6', '#0077C0', '#000000', '#FFFFFF'],
  },
  MIN: {
    name: 'Minnesota Timberwolves',
    colors: ['#0C2340', '#78BE20', '#236192', '#9EA2A2', '#FFFFFF'],
  },
  NJN: { name: 'New Jersey Nets', colors: ['#000000', '#FFFFFF', '#707271'] },
  NOH: {
    name: 'New Orleans Hornets',
    colors: ['#00788C', '#1D1160', '#A1A1A4', '#FFFFFF'],
  },
  NOP: {
    name: 'New Orleans Pelicans',
    colors: ['#0A2240', '#8C734B', '#CE0E2D'],
  },
  NYK: {
    name: 'New York Knicks',
    colors: ['#006BB6', '#F58426', '#BEC0C2', '#000000', '#FFFFFF'],
  },
  OKC: {
    name: 'Oklahoma City Thunder',
    colors: ['#007AC1', '#EF3B24', '#FDBB30', '#002D62'],
  },
  ORL: { name: 'Orlando Magic', colors: ['#0077C0', '#000000', '#C4CED4'] },
  PHI: {
    name: 'Philadelphia 76ers',
    colors: ['#006BB6', '#ED174C', '#C4CED4', '#000000', '#002B5C', '#FFFFFF'],
  },
  PHO: {
    name: 'Phoenix Suns',
    colors: ['#1D1160', '#E56020', '#000000', '#63727A', '#F9A01B'],
  },
  POR: {
    name: 'Portland Trailblazers',
    colors: ['#E03A3E', '#000000', '#FFFFFF'],
  },
  SAC: { name: 'Sacramento Kings', colors: ['#5A2B81', '#63727A', '#000000'] },
  SAS: { name: 'San Antonio Spurs', colors: ['#000000', '#C4CED4'] },
  TOR: {
    name: 'Toronto Raptors',
    colors: ['#CE1141', '#000000', '#393A96', '#B4975A', '#FFFFFF'],
  },
  TOT: {
    name: 'Season Total',
    comment:
      "bbref uses TOT to indicate a player's season total if they were on more than one team",
    colors: ['#888888', '#888888'],
  },
  UTA: { name: 'Utah Jazz', colors: ['#002B5C', '#F9A01B', '#00471B'] },
  WAS: {
    name: 'Washington Wizards',
    colors: ['#002B5C', '#E31837', '#C4CED4', '#FFFFFF'],
  },
};

function prepare() {
  Object.keys(statMeta)
    .sort()
    .forEach((key) => {
      const meta = statMeta[key];
      if (meta.name == '') {
        return;
      }
      d3.select('#statx')
        .append('option')
        .attr('value', key)
        .attr('id', `statx_${key}`)
        .text(meta.name);
      d3.select('#staty')
        .append('option')
        .attr('value', key)
        .attr('id', `staty_${key}`)
        .text(meta.name);
      // TODO: only append fields to radius that make sense... float only maybe?
      if (['numeric'].indexOf(meta.type) != -1) {
        d3.select('#radius')
          .append('option')
          .attr('value', key)
          .attr('id', `staty_${key}`)
          .text(meta.name);
      }
    });
  d3.select('#statx_ts_pct').attr('selected', true);
  d3.select('#staty_usg_pct').attr('selected', true);
}

async function changeYear(evt) {
  const res = await fetch(`${window.DATA_URL}/${evt.target.value}/stats.json`);
  window.stats = await res.json();

  $("#updated").innerHTML = "updated " + new Intl.DateTimeFormat([],
    { dateStyle: 'medium', timeStyle: 'short' })
    .format(Date.parse(window.stats.updated));

  const fields = {
    x: $('#statx').value,
    y: $('#staty').value,
    r: $('#radius').value,
  };

  d3.selectAll('#canvas').html('');
  graph(applyFilter(window.stats.players), fields);
}

function changeUseTeamColors(_) {
  const fields = {
    x: $('#statx').value,
    y: $('#staty').value,
    r: $('#radius').value,
  };

  d3.selectAll('#canvas').html('');
  graph(applyFilter(window.stats.players), fields);
}

// return a function (player, field, n) -> bool that will return true if a
// player is above the nth quantile in the given field and false otherwise
function makeQuantiler(stats) {
  return function(player, field, n) {
    return player[field] > d3.quantile(stats, n / 100, (p) => p[field]);
  };
}

function applyFilter(stats) {
  // This is here to be available for the eval, so it appears unused
  /* eslint-disable no-unused-vars */
  const quantile = makeQuantiler(stats);

  // example filters:
  // player.usg_pct > 26 && player.fga > 80
  // ['BOS', 'MIA', 'BRK'].indexOf(player.team) != -1 && player.fga > 30
  // player.team == 'BOS'
  // quantile(player, 'fga', 80) || quantile(player, 'trb', 80)
  const activeStats = stats.filter((player) => eval($('#filter').value));
  /* eslint-enable */
  return activeStats;
}

function updateSettings(_evt) {
  settings.width = $('#settings-width').value;
  settings.height = $('#settings-height').value;
  settings.minRadius = $('#settings-min-radius').value;
  settings.maxRadius = $('#settings-max-radius').value;

  const fields = {
    x: $('#statx').value,
    y: $('#staty').value,
    r: $('#radius').value,
  };

  d3.selectAll('#canvas').html('');
  graph(applyFilter(window.stats.players), fields);
}

function updateAxes(svg) {
  return (_evt) => {
    svg.update(applyFilter(window.stats.players), {
      x: $('#statx').value,
      y: $('#staty').value,
      r: $('#radius').value,
    });
  };
}

window.addEventListener('DOMContentLoaded', async (_evt) => {
  const res = await fetch(`${window.DATA_URL}/2022/stats.json`);
  window.stats = await res.json();

  $("#updated").innerHTML = "updated " + new Intl.DateTimeFormat([],
    { dateStyle: 'medium', timeStyle: 'short' })
    .format(Date.parse(window.stats.updated));

  $('#settings-width').value = settings.width;
  $('#settings-height').value = settings.height;
  $('#settings-min-radius').value = settings.minRadius;
  $('#settings-max-radius').value = settings.maxRadius;

  prepare();

  const svg = graph(applyFilter(window.stats.players), {
    x: 'ts_pct',
    y: 'usg_pct',
    r: $('#radius').value,
  });
  $('#settings-width').addEventListener('change', updateSettings);
  $('#settings-height').addEventListener('change', updateSettings);
  $('#settings-min-radius').addEventListener('change', updateSettings);
  $('#settings-max-radius').addEventListener('change', updateSettings);
  $('#yearChooser').addEventListener('change', changeYear);
  $('#teamcolors').addEventListener('change', (evt) =>
    changeUseTeamColors(evt)
  );
  $('#statx').addEventListener('change', updateAxes(svg));
  $('#staty').addEventListener('change', updateAxes(svg));
  $('#radius').addEventListener('change', updateAxes(svg));
  $('#applyFilter').addEventListener('click', updateAxes(svg));
});
