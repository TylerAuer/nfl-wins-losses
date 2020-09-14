import React from 'react';
import useScoreboard from '../../hooks/useScoreboard';
import Scorecard from './Scorecard';
import { OwnersByTeam } from '../../interfaces';
import checkForOwnerInGame from '../../functions/checkForOwnerInGame';
import './Scoreboard.scss';

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

  // Sort scorecard
  scoreboard.games.sort((a, b) => {
    const isAActive = checkForOwnerInGame(a, userSelectedOwner, ownersByTeam);
    const isBActive = checkForOwnerInGame(b, userSelectedOwner, ownersByTeam);
    if (isAActive && !isBActive) {
      return -1;
    } else if (isBActive && !isAActive) {
      return 1;
    } else {
      if (a.info.isFinished && !b.info.isFinished) {
        return 1;
      } else if (b.info.isFinished && !a.info.isFinished) {
        return -1;
      } else {
        return parseInt(b.info.id) - parseInt(a.info.id);
      }
    }
  });

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
