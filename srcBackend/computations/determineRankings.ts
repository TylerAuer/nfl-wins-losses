import { Owner } from '../classes/Owner';

interface Ranking {
  tieBreakers: number[];
  owner: Owner;
}

export default function determineRankings(owners: {
  [key: string]: Owner;
}): Ranking[] {
  // Make array of owners with tieBreakers
  const listOfOwners = Object.values(owners).map(
    (owner): Ranking => {
      return {
        owner: owner,
        tieBreakers: owner.tieBreakers,
      };
    }
  );

  // Sort according to tieBreaking rules by find first index in the tiebreaker
  // array that isn't a tie and seeing which value is higher
  //
  // See Owner class definition for details of tieBreaker array and procedure
  listOfOwners.sort((a, b): number => {
    let i = 0;
    while (a.tieBreakers[i] === b.tieBreakers[i]) {
      i++;
    }
    return b.tieBreakers[i] > a.tieBreakers[i] ? 1 : -1;
  });

  return listOfOwners;
}
