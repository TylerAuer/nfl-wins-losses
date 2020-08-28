import React from 'react';
import './TeamCell.scss';

export default function ({ pick, points }) {
  const type = pick.winsOrLosses;
  const team = pick.team.info;
  const abbr = team.abbr;

  return (
    <div className="team-cell">
      <a href={team.espnLink}>
        <img
          className={`team-cell__logo team-cell__logo--${type}`}
          alt={'fd'}
          src={require(`../../logos/${abbr}.png`)}
        />
      </a>
      <div className={`team-cell__points team-cell__points--${type}`}>
        {points} {type}
      </div>
    </div>
  );
}
