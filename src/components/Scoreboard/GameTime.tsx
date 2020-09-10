import React from 'react';
import { Game } from '../../../srcBackend/classes/Game';
import prettyGameTime from '../../functions/prettyGameTime';
import './Scorecard.scss';

interface GameTimeProps {
  game: Game;
}

export default function GameTime({ game }: GameTimeProps) {
  const pregame = (
    <div className="card__date">{prettyGameTime(game.info.date)}</div>
  );

  const active = (
    <>
      <div className="card__time">{game.info.clock}</div>
      <div className="card__quarter">{`Q${game.info.quarter}`}</div>
    </>
  );

  const final = <div className="card__date">Final</div>;

  switch (game.info.state) {
    case 'pre':
      return pregame;

    case 'active':
      return active;

    case 'final':
      return final;

    default:
      return pregame;
  }
}
