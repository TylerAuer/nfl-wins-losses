import { Pick } from './Pick';

export interface OwnerProps {
  fullName: string; // Tyler Auer
  shortName: string; // Tyler

  roundOnePickNumber: number;
  leagueID: number;

  draft: Pick[];
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
      this.info.draft[5].points,
      this.info.draft[4].points,
      this.info.draft[3].points,
      this.info.draft[2].points,
      this.info.draft[1].points,
      this.info.draft[0].points,
      11 - this.info.roundOnePickNumber,
    ];
  }
}
