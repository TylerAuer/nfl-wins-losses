import { CsvReader } from '../utils/CsvReader';
import { Owner, OwnerProps } from '../classes/Owner';
import { Pick, PickProps } from '../classes/Pick';
import { Team } from '../classes/Team';

export function buildOwners(picks: Pick[]): { [key: string]: Owner } {
  // LOAD CSV FILE
  const ownerCsv = new CsvReader('owners.csv');
  ownerCsv.read();
  const ownerData: string[][] = ownerCsv.data;

  const owners = {};
  for (let row of ownerData) {
    const ownerProps: OwnerProps = {
      fullName: row[1],
      shortName: row[0],
      roundOnePickNumber: parseInt(row[2]),
      leagueID: 1,
      draft: [
        picks[parseInt(row[2]) - 1],
        picks[parseInt(row[3]) - 1],
        picks[parseInt(row[4]) - 1],
        picks[parseInt(row[5]) - 1],
        picks[parseInt(row[6]) - 1],
        picks[parseInt(row[7]) - 1],
      ],
    };

    owners[row[0]] = new Owner(ownerProps);
  }

  return owners;
}
