import React from 'react';
import { Pick } from '../../../srcBackend/classes/Pick';
import './TeamCell.scss';

interface TeamCellProps {
  pick: Pick;
  points: number;
}

export default function TeamCell({ pick, points }: TeamCellProps) {
  const type = pick.info.winsOrLosses;
  const team = pick.info.team.info;
  const abbr = team.abbr;

  return (
    <div className="team-cell">
      <a href={team.espnLink}>
        <img
          className={`team-cell__logo team-cell__logo--${type}`}
          alt={abbr}
          src={require(`../../logos/${abbr}.png`)}
        />
      </a>
      <div className={`team-cell__points team-cell__points--${type}`}>
        {points}
      </div>
    </div>
  );
}
