import { Team } from './Team';

interface PickProps {
  team: Team;
  winsOrLosses: 'wins' | 'losses';
  round: number;
}

export class Pick {
  constructor(public info: PickProps) {}
}
