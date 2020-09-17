import { Team } from './Team';

export interface GameProps {
  id: string;
  date: string;

  state: string;
  isFinished: boolean;

  home: Team;
  away: Team;

  homeScore: string;
  awayScore: string;

  line: string;
  total: number;

  // TODO: Not sure if the API provides this information for live games
  // possession: Possession;
  // down: number;
  // distance: number;

  quarter: number;
  clock: string;

  stadium: string;
  tvNetwork: string;

  winnerAbbr?: string; // team abbreviation
}

export class Game {
  constructor(public info: GameProps) {}

  //homeWinProbability: number;
  //awayWinProbability: number;
}
