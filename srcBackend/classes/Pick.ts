import { Team } from './Team';

interface PickProps {
  team: Team;
  winsOrLosses: 'wins' | 'losses';
  round: number;
}

export class Pick {
  constructor(info: PickProps) {
    Object.assign(this, info);
  }
}
