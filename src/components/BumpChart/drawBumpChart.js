import * as d3 from 'd3';
import prettyRank from '../../functions/prettyRank';

export default async function drawBumpChart(data, target) {
  const oldBumpChart = document.getElementById(target.slice(1));
  oldBumpChart.innerHTML = '';

  const owners = Object.keys(data);
  const listOfWeeks = Object.keys(data[owners[0]]);
  console.log(listOfWeeks);

  // fraction of bar that should be horizontal
  let widthOfHorizontalSegments;
  if (listOfWeeks.length <= 4) {
    widthOfHorizontalSegments = 0.7;
  } else if (listOfWeeks.length <= 8) {
    widthOfHorizontalSegments = 0.6;
  } else if (listOfWeeks.length <= 12) {
    widthOfHorizontalSegments = 0.5;
  } else {
    widthOfHorizontalSegments = 0.4;
  }

  // set the dimensions and margins of the graph
  const widthWithMargins = 900;
  const heightWithMargins = 500;
  const margin = {
    left: 0,
    right: 0,
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

  const color = d3
    .scaleLinear()
    .domain([1, owners.length])
    .range(['slategrey', 'linen']);

  // Axes
  const xAxis = d3.axisBottom(x).tickSize(height + 15);
  svg
    .append('g')
    .attr('transform', `translate(0, 0)`)
    .call(xAxis)
    .call((g) => g.select('.domain').remove())
    .selectAll('text')
    .style('text-anchor', 'middle');

  svg
    .selectAll('line')
    .attr('stroke', 'lightsteelblue')
    .attr('stroke-width', '1')
    .attr('stroke-dasharray', '6 4');

  // Add bars and background white borders for each owner
  owners.forEach((owner) => {
    // outputs => [week, ranking]
    const rankings = Object.entries(data[owner]);

    // Add diagonal backgrounds for weave effect
    svg
      .selectAll(`${owner}-diagonal-bg`)
      .data(rankings.slice(0, rankings.length - 1))
      .enter()
      .append('line')
      .attr('class', `${owner} diagonal__bg`)
      .attr('x1', (d) => x(d[0]) + xClip / 2)
      .attr('x2', (d) => x(d[0]) - xClip / 2)
      .attr('y1', (d) => y(d[1]))
      .attr('y2', (d, i) => {
        if (rankings[i + 1]) {
          return y(rankings[i + 1][1]);
        } else {
          return y(d[1]);
        }
      })
      .attr('stroke', 'white')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', '15');

    // Add grey diagonal lines
    svg
      .selectAll(`${owner}-diagonal-lines`)
      .data(rankings.slice(0, rankings.length - 1))
      .enter()
      .append('line')
      .attr('class', `${owner} diagonal__lines`)
      .attr('x1', (d) => x(d[0]) + xClip / 2)
      .attr('x2', (d) => x(d[0]) - xClip / 2)
      .attr('y1', (d) => y(d[1]))
      .attr('y2', (d, i) => {
        if (rankings[i + 1]) {
          return y(rankings[i + 1][1]);
        } else {
          return y(d[1]);
        }
      })
      .attr('stroke', (d) => color(rankings[rankings.length - 1][1]))
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
      .attr('stroke', (d) => color(rankings[rankings.length - 1][1]))
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', '8');
  });

  // Add Rank and Name Label to left side
  svg
    .selectAll('rank-text')
    .data(Object.entries(data))
    .enter()
    .append('text')
    .attr('class', `bump__label`)
    .attr('color', 'black')
    .attr('x', x('Live') + xClip / 2)
    .attr('y', (d) => y(d[1].Live))
    .attr('dy', '-10')
    .text((d) => `${prettyRank(d[1].Live)} - ${d[0]}`)
    .attr('font-size', '12px')
    .attr('text-anchor', 'start')
    .attr('alignment-baseline', 'middle');

  // Add Name Labels to right side
  //
  // After week 4, the preseason rankings are no longer included in the
  // bump JSON data from the server. So the label needs to come from the
  // "Wk 1" key
  svg
    .selectAll('right-labels')
    .data(Object.entries(data))
    .enter()
    .append('text')
    .attr('class', `bump__label`)
    .attr('color', 'black')
    .attr('x', (d) => {
      if (d[1].Pre) {
        return x('Pre') + x.bandwidth() - xClip / 2;
      } else {
        return x('Wk 1') + x.bandwidth() - xClip / 2;
      }
    })
    .attr('y', (d) => {
      if (d[1].Pre) {
        return y(d[1].Pre);
      } else {
        return y(d[1]['Wk 1']);
      }
    })
    .attr('dy', '-12')
    .text((d) => `${d[0]}`)
    .attr('font-size', '12px')
    .attr('text-anchor', 'end')
    .attr('alignment-baseline', 'middle');
}
