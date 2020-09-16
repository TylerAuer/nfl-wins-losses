import React, { useEffect } from 'react';
import useBump from '../../hooks/useBump';
import drawBumpChart from './drawBumpChart';
import './BumpChart.scss';

export default function BumpChartSection() {
  const { bumpData, loading } = useBump();

  useEffect(() => {
    if (!loading) {
      drawBumpChart(bumpData, '#bump-chart');
    }
  }, [bumpData, loading]);

  return (
    <section className="bump">
      <h2 className="section-header">Rankings By Week</h2>
      <div id="bump-chart"></div>
    </section>
  );
}
