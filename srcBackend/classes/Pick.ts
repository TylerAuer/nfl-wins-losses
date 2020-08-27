import { Team } from './Team';

export interface PickProps {
  id: number;
  team: Team;
  winsOrLosses: 'wins' | 'losses';
  round: number;
}

export class Pick {
  constructor(public info: PickProps) {}

  get points(): number {
    if (this.info.winsOrLosses === 'wins') {
      return this.info.team.wins;
    } else {
      return this.info.team.losses;
    }
  }
}
