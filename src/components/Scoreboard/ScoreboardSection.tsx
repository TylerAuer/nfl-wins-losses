import React from 'react';
import useScoreboard from '../../hooks/useScoreboard';
import Scorecard from './Scorecard';
import './Scoreboard.scss';
import { OwnersByTeam } from '../../interfaces';

// TODO: Figure out how to sort the games in a reasonable way. Probably active
// games first. If a user is selected, would be good to have their games first.
interface ScoreboardSectionProps {
  userSelectedOwner: string;
  ownersByTeam: OwnersByTeam;
  oLoading: boolean;
}

export default function ScoreboardSection({
  userSelectedOwner,
  ownersByTeam,
  oLoading,
}: ScoreboardSectionProps) {
  const { scoreboard, loading: sLoading } = useScoreboard();

  if (sLoading || oLoading) {
    return <h2 className="section-header">Hang in there...loading data</h2>;
  }

  const cards = scoreboard.games.map((game) => {
    return (
      <Scorecard
        key={game.info.id}
        userSelectedOwner={userSelectedOwner}
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
