import * as d3 from 'd3';
import prettyRank from '../../functions/prettyRank';

export default async function drawBumpChart(data, target) {
  const oldBumpChart = document.getElementById(target.slice(1));
  oldBumpChart.innerHTML = '';

  const owners = Object.keys(data);
  const listOfWeeks = Object.keys(data[owners[0]]);

  // fraction of bar that should be horizontal
  const widthOfHorizontalSegments = 0.7;

  // set the dimensions and margins of the graph
  const widthWithMargins = 1000;
  const heightWithMargins = 500;
  const margin = {
    left: 70,
    right: 50,
    top: 20,
    bottom: 50,
  };
  const width = widthWithMargins - margin.left - margin.right;
  const height = heightWithMargins - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3
    .select(target)
    .append('svg')
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', `0 0 ${widthWithMargins} ${heightWithMargins}`)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // Scales
  const x = d3.scaleBand().domain(listOfWeeks.reverse()).range([0, width]);
  const xClip = x.bandwidth() * (1 - widthOfHorizontalSegments);

  const y = d3.scaleLinear().domain([1, owners.length]).range([0, height]);

  // Axes
  const xAxis = d3.axisBottom(x).tickSize(0);
  svg
    .append('g')
    .attr('transform', `translate(0, ${height + margin.bottom / 3})`)
    .call(xAxis)
    .call((g) => g.select('.domain').remove())
    .selectAll('text')
    .style('text-anchor', 'middle');

  // Add bars and background white borders for each owner
  owners.forEach((owner) => {
    // outputs => [week, ranking]
    const rankings = Object.entries(data[owner]);

    // Add diagonal backgrounds for weave effect
    svg
      .selectAll(`${owner}-diagonal-lines`)
      .data(rankings.slice(0, rankings.length - 1))
      .enter()
      .append('line')
      .attr('class', `${owner} diagonal__bg`)
      .attr('x1', (d) => x(d[0]) + xClip / 2)
      .attr('x2', (d) => x(d[0]) - xClip / 2)
      .attr('y1', (d) => y(d[1]))
      .attr('y2', (d, i) => {
        if (owner === 'Amy') console.log(d, rankings[i + 1]);
        if (rankings[i + 1]) {
          return y(rankings[i + 1][1]);
        } else {
          return y(d[1]);
        }
      })
      .attr('stroke', 'white')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', '12');

    // Add grey diagonal lines
    svg
      .selectAll(`${owner}-diagonal-lines`)
      .data(rankings.slice(0, rankings.length - 1))
      .enter()
      .append('line')
      .attr('class', `${owner} diagonal__bg`)
      .attr('x1', (d) => x(d[0]) + xClip / 2)
      .attr('x2', (d) => x(d[0]) - xClip / 2)
      .attr('y1', (d) => y(d[1]))
      .attr('y2', (d, i) => {
        if (owner === 'Amy') console.log(d, rankings[i + 1]);
        if (rankings[i + 1]) {
          return y(rankings[i + 1][1]);
        } else {
          return y(d[1]);
        }
      })
      .attr('stroke', 'grey')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', '8');

    // add horizontal lines for each week
    svg
      .selectAll(`${owner}-horizontal-line`)
      .data(rankings)
      .enter()
      .append('line')
      .attr('class', `${owner} horizontal`)
      .attr('x1', (d) => x(d[0]) + xClip / 2)
      .attr('x2', (d) => x(d[0]) + x.bandwidth() - xClip / 2)
      .attr('y1', (d) => y(d[1]))
      .attr('y2', (d) => y(d[1]))
      .attr('stroke', 'grey')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', '8');
  });

  // Add name labels to left side
  svg
    .selectAll('left-labels')
    .data(Object.entries(data))
    .enter()
    .append('text')
    .attr('color', 'black')
    .attr('x', x('Live') + xClip / 2 - 10)
    .attr('y', (d) => y(d[1].Live))
    .text((d) => d[0])
    .attr('font-size', '12px')
    .attr('text-anchor', 'end')
    .attr('alignment-baseline', 'middle');

  // Add name labels to right side
  svg
    .selectAll('right-labels')
    .data(Object.entries(data))
    .enter()
    .append('text')
    .attr('color', 'black')
    .attr('x', x('Pre') + x.bandwidth() - xClip / 2 + 10)
    .attr('y', (d) => y(d[1].Pre))
    .text((d) => `${d[0]}`)
    .attr('font-size', '12px')
    .attr('text-anchor', 'start')
    .attr('alignment-baseline', 'middle');

  // Add background rectangles for ranks
  svg
    .selectAll('left-labels')
    .data(Object.entries(data))
    .enter()
    .append('line')
    .attr('x1', x('Live') + xClip - 20)
    .attr('x2', x('Live') + xClip + 10)
    .attr('y1', (d) => y(d[1].Live))
    .attr('y2', (d) => y(d[1].Live))
    .attr('stroke', 'white')
    .attr('stroke-width', '12');

  // Add Rank Label to left side
  svg
    .selectAll('left-labels')
    .data(Object.entries(data))
    .enter()
    .append('text')
    .attr('color', 'black')
    .attr('x', x('Live') + xClip - 5)
    .attr('y', (d) => y(d[1].Live))
    .text((d) => prettyRank(d[1].Live))
    .attr('font-size', '12px')
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle');
}
