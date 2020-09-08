import React from 'react';
import prettyGameTime from '../../functions/prettyGameTime';
import Team from './Team';
import './Scorecard.scss';

export default function Scorecard({ game, owner, ownersByTeam }) {
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

  const inactiveStatus = (
    <div className="card__date">{prettyGameTime(game.info.date)}</div>
  );
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div className="card">
      <div className="card__header-row">
        <div>{game.info.stadium}</div>
        <div>{game.info.tvNetwork}</div>
      </div>

      <Team
        owner={owner}
        ownersByTeam={ownersByTeam}
        team={game.info.away}
        score={game.info.awayScore}
      />

      <Team
        owner={owner}
        ownersByTeam={ownersByTeam}
        team={game.info.home}
        score={game.info.homeScore}
      />

      <div className="card__footer-row">
        <div className="card__gambling">
          <div className="card__spread">{game.info.line}</div>
          <div className="card__total">
            {game.info.total ? `O/U: ${game.info.total}` : ''}
          </div>
        </div>
        <div className="card__status">
          {game.info.quarter !== 0 ? activeStatus : inactiveStatus}
        </div>
      </div>
    </div>
  );
}
