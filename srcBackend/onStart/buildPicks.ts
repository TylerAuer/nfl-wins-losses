import { CsvReader } from '../utils/CsvReader';
import { Pick, PickProps } from '../classes/Pick';
import { Team } from '../classes/Team';

export function buildPicks(teams: { [key: string]: Team }): Pick[] {
  // LOAD CSV FILE
  const pickCsv = new CsvReader('picks.csv');
  pickCsv.read();
  const pickData: string[][] = pickCsv.data;

  // Map pick data from CSV to new instance of Pick
  const picks = pickData.map(
    (pick: string[]): Pick => {
      const props: PickProps = {
        id: parseInt(pick[1]),
        round: parseInt(pick[0]),
        team: teams[pick[3]],
        winsOrLosses: pick[4] === 'W' ? 'wins' : 'losses',
      };

      return new Pick(props);
    }
  );

  // Return that array
  return picks;
}
