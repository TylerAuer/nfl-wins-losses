import React from 'react';
import { Game } from '../../../srcBackend/classes/Game';
import { OwnersByTeam } from '../../interfaces';
import TeamRow from './TeamRow';
import GameTime from './GameTime';
import DownAndDistance from './DownAndDistance';
import Gambling from './Gambling';
import * as CSS from 'csstype';
import checkForOwnerInGame from '../../functions/checkForOwnerInGame';
import './Scorecard.scss';

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
  // Style border and box shadow based on game state and if user is the owner
  const standardStyle: CSS.Properties = {
    border: '2px solid black',
    borderRadius: '5px',
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
  };

  const userSelectedOwnerStyle: CSS.Properties = {
    border: '3px solid #23008c',
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
  };

  let styleToUse = standardStyle;

  const gameHasUserSelectedOwner = checkForOwnerInGame(
    game,
    userSelectedOwner,
    ownersByTeam
  );

  if (gameHasUserSelectedOwner) {
    styleToUse = userSelectedOwnerStyle;
  }

  return (
    <div className="card" style={styleToUse}>
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
        <div className="card__gambing-or-down-and-distance">
          <Gambling game={game} />
          <DownAndDistance game={game} />
        </div>
        <div className="card__status">
          <GameTime game={game} />
        </div>
      </div>
    </div>
  );
}
