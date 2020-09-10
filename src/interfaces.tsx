import { Owner } from '../srcBackend/classes/Owner';
import { Game } from '../srcBackend/classes/Game';

export interface OwnersByTeam {
  [key: string]: {
    wins: Owner | null;
    losses: Owner | null;
  };
}

export interface Scoreboard {
  games: Game[];
  week: number;
}

type RankInfo = {
  owner: Owner;
  tieBreakers: number[];
};

export type Rankings = RankInfo[];
