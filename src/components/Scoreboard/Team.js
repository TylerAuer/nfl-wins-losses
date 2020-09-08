import React from 'react';
import './Team.scss';

export default function Team({ owner, ownersByTeam, team, score }) {
  const espnLink = team.info.espnLink;
  const abbr = team.info.abbr;
  const fullName = team.info.fullName;
  const record = team.record;
  const winsOwner = ownersByTeam[abbr].wins;
  const lossesOwner = ownersByTeam[abbr].losses;

  let winsOwnerHtml = '';
  if (winsOwner) {
    const isActiveOwner = winsOwner.info.shortName === owner;
    winsOwnerHtml = (
      <a
        href={`#${winsOwner.info.shortName}`}
        className="team__wins-owner"
        style={{
          color: isActiveOwner && 'red',
          fontWeight: isActiveOwner && 'bold',
        }}
      >
        W: {winsOwner.info.shortName}
      </a>
    );
  }

  let lossesOwnerHtml = '';
  if (lossesOwner) {
    const isActiveOwner = lossesOwner.info.shortName === owner;
    lossesOwnerHtml = (
      <a
        href={`#${lossesOwner.info.shortName}`}
        className="team__losses-owner"
        style={{
          color: isActiveOwner && 'red',
          fontWeight: isActiveOwner && 'bold',
        }}
      >
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
