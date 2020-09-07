import React from 'react';
import useScoreboard from '../../hooks/useScoreboard';
import useOwnersByTeam from '../../hooks/useOwnersByTeam';
import Scorecard from './Scorecard';
import './Scoreboard.scss';

// TODO: Figure out how to sort the games in a reasonable way. Probably active
// games first

export default function Scoreboard({ owner }) {
  const { scoreboard, loading: sLoading } = useScoreboard();
  const { ownersByTeam, loading: oLoading } = useOwnersByTeam();

  if (sLoading || oLoading) {
    return <h2 className="section-header">Hang in there...loading data</h2>;
  }

  const cards = scoreboard.games.map((game) => {
    return (
      <Scorecard
        key={game.info.id}
        owner={owner}
        game={game}
        ownersByTeam={ownersByTeam}
      />
    );
  });

  return (
    <section id="scoreboard">
      <h2 className="section-header">Week {scoreboard.week} Scores</h2>
      <div className="scoreboard">{cards}</div>
    </section>
  );
}
