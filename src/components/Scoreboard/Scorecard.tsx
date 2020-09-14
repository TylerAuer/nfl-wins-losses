import React from 'react';
import { Game } from '../../../srcBackend/classes/Game';
import { OwnersByTeam } from '../../interfaces';
import TeamRow from './TeamRow';
import './Scorecard.scss';
import GameTime from './GameTime';

interface ScorecardProps {
  game: Game;
  userSelectedOwner: string;
  ownersByTeam: OwnersByTeam;
}

export default function Scorecard({
  game,
  userSelectedOwner,
  ownersByTeam,
}: ScorecardProps) {
  return (
    <div className="card">
      <div className="card__header-row">
        <div>{game.info.stadium}</div>
        <div>{game.info.tvNetwork}</div>
      </div>

      <TeamRow
        userSelectedOwner={userSelectedOwner}
        ownersByTeam={ownersByTeam}
        team={game.info.away}
        score={game.info.awayScore}
        winnerAbbr={game.info.winnerAbbr || null}
      />

      <TeamRow
        userSelectedOwner={userSelectedOwner}
        ownersByTeam={ownersByTeam}
        team={game.info.home}
        score={game.info.homeScore}
        winnerAbbr={game.info.winnerAbbr || null}
      />

      <div className="card__footer-row">
        <div className="card__gambling">
          <div className="card__spread">{game.info.line}</div>
          <div className="card__total">
            {game.info.total ? `O/U: ${game.info.total}` : ''}
          </div>
        </div>
        <div className="card__status">
          <GameTime game={game} />
        </div>
      </div>
    </div>
  );
}
