import { Owner } from '../srcBackend/classes/Owner';
import { Game } from '../srcBackend/classes/Game';
import { Division, Conference } from '../srcBackend/enums';

export interface TeamOwners {
  wins: Owner | null;
  losses: Owner | null;
  division: Division;
  conference: Conference;
  abbr?: string;
}

export interface OwnersByTeam {
  [key: string]: TeamOwners;
}

export interface ConferenceDivisions {
  NORTH: TeamOwners[];
  SOUTH: TeamOwners[];
  EAST: TeamOwners[];
  WEST: TeamOwners[];
}

export interface TeamsByDivision {
  NFC: ConferenceDivisions;
  AFC: ConferenceDivisions;
}

export interface Scoreboard {
  games: Game[];
  week: number;
}

export interface RankInfo {
  owner: Owner;
  tieBreakers: number[];
}

export type Rankings = RankInfo[];
