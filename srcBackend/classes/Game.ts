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

  quarter: number;
  clock: string;

  stadium: string;
  tvNetwork: string;

  winnerAbbr?: string; // team abbreviation

  homeWinPercentage?: number; // ex: 0.02, 0, 0.29000000000000004
  awayWinPercentage?: number;

  downAndDistanceText?: string; // "3rd & 11 at ATL 10"
  whoHasTheBall?: string; // appears to be the team ID as a string
}

export class Game {
  constructor(public info: GameProps) {}

  //homeWinProbability: number;
  //awayWinProbability: number;
}
