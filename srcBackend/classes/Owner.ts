import { Pick } from './Pick';

interface OwnerProps {
  fullName: 'string'; // Tyler Auer
  shortName: 'string'; // Tyler

  roundOnePickNumber: number;
  leagueID: number;

  round1Pick: Pick;
  round2Pick: Pick;
  round3Pick: Pick;
  round4Pick: Pick;
  round5Pick: Pick;
  round6Pick: Pick;
}

export class Owner {
  constructor(info: OwnerProps) {
    Object.assign(this, info); // destructures TeamProps object
  }

  currentScore(): number {
    // Total points based on wins or losses and matching pick type
    return 0;
  }

  tieBreakers(): number[] {
    /** Returns an array of tiebreakers
     * Total Points
     * Round 6 points
     * Round 5 points
     * ...
     * Round 1 points
     * 10 - roundOnePickNumber (so highest is always better)
     */
    return [this.currentScore(), 0];
  }
}
