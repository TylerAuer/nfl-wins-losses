import React, { useEffect } from 'react';
import drawBumpChart from './drawBumpChart';
import './BumpChart.scss';

export default function BumpChartSection() {
  useEffect(() => {
    drawBumpChart('#bump-chart');
  }, []);

  return (
    <section className="bump">
      <h2 className="section-header">Rankings By Week</h2>
      <div id="bump-chart"></div>
    </section>
  );
}
