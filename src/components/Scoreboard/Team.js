import React from 'react';
import './Team.scss';

export default function Team({ ownersByTeam, team, score }) {
  const espnLink = team.info.espnLink;
  const abbr = team.info.abbr;
  const fullName = team.info.fullName;
  const record = team.record;
  const winsOwner = ownersByTeam[abbr].wins;
  const lossesOwner = ownersByTeam[abbr].losses;

  let winsOwnerHtml = '';
  if (winsOwner) {
    winsOwnerHtml = (
      <a href={`#${winsOwner.info.shortName}`} className="team__wins-owner">
        W: {winsOwner.info.shortName}
      </a>
    );
  }

  let lossesOwnerHtml = '';
  if (lossesOwner) {
    lossesOwnerHtml = (
      <a href={`#${lossesOwner.info.shortName}`} className="team__losses-owner">
        L: {lossesOwner.info.shortName}
      </a>
    );
  }

  return (
    <div className="team">
      <a href={espnLink}>
        <img
          className="team__logo"
          alt={`${abbr} logo`}
          src={require(`../../logos/${abbr}.png`)}
        />
      </a>
      <div className="team__name-and-owners">
        <div className="team__team-name">
          <a href={espnLink}>{fullName}</a>
          <span className="team__record">{record}</span>
        </div>
        <div className="team__owners">
          {winsOwnerHtml}
          {lossesOwnerHtml}
        </div>
      </div>
      <div className="team__score">{score}</div>
    </div>
  );
}
