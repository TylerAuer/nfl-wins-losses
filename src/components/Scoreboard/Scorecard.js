import React from 'react';

import './Scorecard.scss';

export default function Scorecard({ data }) {
  const home = data.info.home.info;
  const away = data.info.away.info;

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  // TODO: Extract status (for clock and quarter) to separate component
  // since this will probably be fairly involved once I know the possibilities
  // in the ESPN API
  const activeStatus = (
    <>
      <div className="card__time">{data.clock}</div>
      <div className="card__quarter">{`Q${data.quarter}`}</div>
    </>
  );
  const inactiveStatus = null;
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div className="card">
      <div className="card__header-row">
        <div>{data.info.stadium}</div>
        <div>{data.info.tvNetwork}</div>
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
          <div className="card__owners">W: Connaughton L: Jessica</div>
        </div>
        <div className="card__score">{data.info.awayScore}</div>
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
          <div className="card__owners">W: Connaughton L: Jessica</div>
        </div>
        <div className="card__score">{data.info.homeScore}</div>
      </div>

      <div className="card__footer-row">
        <div className="card__gambling">
          <div className="card__spread">{data.info.line}</div>
          <div className="card__total">O/U: {data.info.total}</div>
        </div>
        <div className="card__status">
          {data.info.quarter !== 0 ? activeStatus : inactiveStatus}
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
