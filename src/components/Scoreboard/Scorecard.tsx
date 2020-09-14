import React from 'react';
import { Game } from '../../../srcBackend/classes/Game';
import { OwnersByTeam } from '../../interfaces';
import TeamRow from './TeamRow';
import GameTime from './GameTime';
import * as CSS from 'csstype';
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
    border: '3px solid #ff00b7',
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
  };

  // Get owners for each team
  const awayWinsOwner =
    ownersByTeam[game.info.away.info.abbr].wins?.info.shortName;
  const awayLossesOwner =
    ownersByTeam[game.info.away.info.abbr].losses?.info.shortName;
  const homeWinsOwner =
    ownersByTeam[game.info.home.info.abbr].wins?.info.shortName;
  const homeLossesOwner =
    ownersByTeam[game.info.home.info.abbr].losses?.info.shortName;

  let styleToUse = standardStyle;
  if (
    userSelectedOwner === awayWinsOwner ||
    userSelectedOwner === awayLossesOwner ||
    userSelectedOwner === homeWinsOwner ||
    userSelectedOwner === homeLossesOwner
  ) {
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
