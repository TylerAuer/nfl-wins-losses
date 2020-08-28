import React from 'react';

import './Scorecard.scss';

export default function Scorecard({ game, ownersByTeam }) {
  const home = game.info.home.info;
  const away = game.info.away.info;

  // Make strings for each team's owners and winners
  const awayWinsOwner = ownersByTeam[away.abbr].wins;
  // If no owner return empty string, otherwise link to owner in ratings
  const awayWinsOwnerString = awayWinsOwner ? (
    <a href={`#${awayWinsOwner.info.shortName}`} className="card__wins-owner">
      {`W: ${awayWinsOwner.info.shortName}`}
    </a>
  ) : (
    ''
  );

  const awayLossesOwner = ownersByTeam[away.abbr].losses;
  const awayLossesOwnerString = awayLossesOwner ? (
    <a href={`#${awayLossesOwner.info.shortName}`}>
      {`L: ${awayLossesOwner.info.shortName}`}
    </a>
  ) : (
    ''
  );

  const homeWinsOwner = ownersByTeam[home.abbr].wins;
  const homeWinsOwnerString = homeWinsOwner ? (
    <a href={`#${homeWinsOwner.info.shortName}`} className="card__wins-owner">
      {`W: ${homeWinsOwner.info.shortName}`}
    </a>
  ) : (
    ''
  );

  const homeLossesOwner = ownersByTeam[home.abbr].losses;
  const homeLossesOwnerString = homeLossesOwner ? (
    <a href={`#${homeLossesOwner.info.shortName}`}>
      {`L: ${homeLossesOwner.info.shortName}`}
    </a>
  ) : (
    ''
  );

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  // TODO: Extract status (for clock and quarter) to separate component
  // since this will probably be fairly involved once I know the possibilities
  // in the ESPN API
  const activeStatus = (
    <>
      <div className="card__time">{game.clock}</div>
      <div className="card__quarter">{`Q${game.quarter}`}</div>
    </>
  );
  const inactiveStatus = null;
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div className="card">
      <div className="card__header-row">
        <div>{game.info.stadium}</div>
        <div>{game.info.tvNetwork}</div>
      </div>

      <div className="card__team-row">
        <a href={away.espnLink}>
          <img
            className="card__logo"
            alt={`${away.abbr} logo`}
            src={require(`../../logos/${away.abbr}.png`)}
          />
        </a>
        <div className="card__name-and-owners">
          <div className="card__team-name">
            <a href={away.espnLink}>{away.fullName}</a>
            <span className="card__record">{away.record}</span>
          </div>
          <div className="card__owners">
            {awayWinsOwnerString}
            {awayLossesOwnerString}
          </div>
        </div>
        <div className="card__score">{game.info.awayScore}</div>
      </div>

      <div className="card__team-row">
        <a href={home.espnLink}>
          <img
            className="card__logo"
            alt={`${home.abbr} logo`}
            src={require(`../../logos/${home.abbr}.png`)}
          />
        </a>
        <div className="card__name-and-owners">
          <div className="card__team-name">
            <a href={home.espnLink}>{home.fullName}</a>
            <span className="card__record">{home.record}</span>
          </div>
          <div className="card__owners">
            {homeWinsOwnerString}
            {homeLossesOwnerString}
          </div>
        </div>
        <div className="card__score">{game.info.homeScore}</div>
      </div>

      <div className="card__footer-row">
        <div className="card__gambling">
          <div className="card__spread">{game.info.line}</div>
          <div className="card__total">O/U: {game.info.total}</div>
        </div>
        <div className="card__status">
          {game.info.quarter !== 0 ? activeStatus : inactiveStatus}
        </div>
      </div>
    </div>
  );
}

// awayScore: "0"
// clock: "0:00"
// date: "2020-09-11T00:20:00.000Z"
// homeScore: "0"
// id: "401220225"
// isFinished: false
// line: "KC -10.0"
// quarter: 0
// stadium: "Arrowhead Stadium"
// state: "pre"
// total: 55
// tvNetwork: "NBC"

// away: {desc: {espnId: 34, espnUid: "s:20~l:28~t:34",…}, wins: 0, losses: 0, ties: 0}
// home: {desc: {espnId: 12, espnUid: "s:20~l:28~t:12",…}, wins: 0, losses: 0, ties: 0}
