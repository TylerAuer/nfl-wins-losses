import React from 'react';
import useScoreboard from '../../hooks/useScoreboard';
import Scorecard from './Scorecard';

import './Scoreboard.scss';

// TODO: Figure out how to sort the games in a reasonable way. Probably active
// games first

export default function Scoreboard() {
  const { scoreboard, loading } = useScoreboard();

  if (loading) {
    return <h2>Hang in there...loading data</h2>;
  }

  const cards = scoreboard.games.map((g) => {
    return <Scorecard data={g.info} />;
  });

  return (
    <section className="scoreboard">
      <h2 className="scoreboard__title">Week {scoreboard.week} Scores</h2>
      <div className="scoreboard">{cards}</div>
    </section>
  );
}
