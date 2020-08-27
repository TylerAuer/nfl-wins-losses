import { Pick } from './Pick';

interface OwnerProps {
  fullName: 'string'; // Tyler Auer
  shortName: 'string'; // Tyler

  roundOnePickNumber: number;
  leagueID: number;

  picks: Pick[];
}

export class Owner {
  constructor(public info: OwnerProps) {}

  get currentScore(): number {
    // Total points based on wins or losses and matching pick type
    return 0;
  }

  get tieBreakers(): number[] {
    return [
      this.currentScore,
      this.info.picks[5].points,
      this.info.picks[4].points,
      this.info.picks[3].points,
      this.info.picks[2].points,
      this.info.picks[1].points,
      this.info.picks[0].points,
      11 - this.info.roundOnePickNumber,
    ];
  }
}
