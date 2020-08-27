import { Team } from './Team';

export interface GameProps {
  id: string;
  date: Date;

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
}

export class Game {
  constructor(info: GameProps) {
    Object.assign(this, info); // destructures GameProps object
  }

  //homeWinProbability: number;
  //awayWinProbability: number;
}
