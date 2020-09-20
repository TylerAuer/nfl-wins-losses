import React from 'react';
import { Game } from '../../../srcBackend/classes/Game';

interface GamblingProps {
  game: Game;
}

export default function Gambling({ game }: GamblingProps) {
  if (!game.info.line || !game.info.total) {
    return null;
  } else {
    return (
      <div className="card__gambling">
        <div className="card__spread">{game.info.line}</div>
        <div className="card__total">
          {game.info.total ? `O/U: ${game.info.total}` : ''}
        </div>
      </div>
    );
  }
}
