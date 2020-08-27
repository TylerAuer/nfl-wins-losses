import React from 'react';

import './Scorecard.scss';

export default function Scorecard({ data }) {
  const home = data.home.desc;
  const away = data.away.desc;

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
    <div className="card" key={data.id}>
      <div className="card__header-row">
        <div>{data.stadium}</div>
        <div>{data.tvNetwork}</div>
      </div>

      <div className="card__team-row">
        <img
          className="card__logo"
          alt={`${away.abbr} logo`}
          src={require(`../../logos/${away.abbr}.png`)}
        />
        <div className="card__name-and-owners">
          <div className="card__team-name">
            {away.fullName}
            <span className="card__record">{data.away.record}</span>
          </div>
          <div className="card__owners">W: Connaughton L: Jessica</div>
        </div>
        <div className="card__score">{data.awayScore}</div>
      </div>

      <div className="card__team-row">
        <img
          className="card__logo"
          alt={`${home.abbr} logo`}
          src={require(`../../logos/${home.abbr}.png`)}
        />

        <div className="card__name-and-owners">
          <div className="card__team-name">
            {home.fullName}
            <span className="card__record">{data.home.record}</span>
          </div>
          <div className="card__owners">W: Connaughton L: Jessica</div>
        </div>
        <div className="card__score">{data.homeScore}</div>
      </div>

      <div className="card__footer-row">
        <div className="card__gambling">
          <div className="card__spread">{data.line}</div>
          <div className="card__total">O/U: {data.total}</div>
        </div>
        <div className="card__status">
          {data.quarter !== 0 ? activeStatus : inactiveStatus}
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
