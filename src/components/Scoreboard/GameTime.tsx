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

  const halftime = <div className="card__date">Halftime</div>;
  const final = <div className="card__date">Final</div>;

  switch (game.info.state) {
    case 'pre':
      return pregame;

    // game is IN progress
    case 'in':
      // HALFTIME
      if (game.info.quarter === 2 && game.info.clock === '0:00') {
        return halftime;
      }
      // Not halftime
      return active;

    case 'post':
      return final;

    default:
      return pregame;
  }
}
