import React from 'react';
import { Game } from '../../../srcBackend/classes/Game';

interface DownAndDistanceProps {
  game: Game;
}

export default function DownAndDistance({ game }: DownAndDistanceProps) {
  if (!game.info.downAndDistanceText) {
    return null;
  } else {
    return (
      <div className="card__down-and-distance">
        {game.info.downAndDistanceText}
      </div>
    );
  }
}
