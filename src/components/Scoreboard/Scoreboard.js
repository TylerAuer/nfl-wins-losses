import React from 'react';
import useScoreboard from '../../hooks/useScoreboard';
import Scorecard from './Scorecard';

import './Scoreboard.scss';

export default function Scoreboard() {
  const { scoreboard, loading } = useScoreboard();

  if (loading) {
    return <h2>Hang in there...loading data</h2>;
  }

  const cards = scoreboard.games.map((g) => {
    return <Scorecard data={g.info} />;
  });

  return (
    <section>
      <h2>Week {scoreboard.week} Scores</h2>
      <div className="scoreboard">{cards}</div>
    </section>
  );
}
