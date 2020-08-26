import { Team } from './Team';

enum Status {
  pregame = 'pregame',
  live = 'live',
  halftime = 'halftime',
  postgame = 'postgame',
}

enum Possession {
  home = 'home',
  away = 'away',
}

interface GameProps {
  status: Status;

  home: Team;
  away: Team;

  homeScore: number;
  awayScore: number;

  line: string;
  total: number;

  possession: Possession;
  down: number;
  distance: number;
  quarter: string;
  timeLeft: string;

  stadium: string;
  network: string;
  dateTime: Date;
}

export class Game {
  constructor(public info: GameProps) {}

  //homeWinProbability: number;
  //awayWinProbability: number;
}
