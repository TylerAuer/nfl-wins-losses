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
      this.currentScore, // total points
      this.info.draft[5].points, // points from pick in round 6
      this.info.draft[4].points, // points from pick in round 5
      this.info.draft[3].points, // points from pick in round 4
      this.info.draft[2].points, // points from pick in round 3
      this.info.draft[1].points, // points from pick in round 2
      this.info.draft[0].points, // points from pick in round 1
      this.info.roundOnePickNumber, // later pick in rd 1
    ];
  }
}
