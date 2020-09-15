import { Request, Response } from 'express';
import { cache } from '../cache';
import { Log } from '../Log';
import { CsvReader } from '../utils/CsvReader';
import determineRankings from '../computations/determineRankings';

type OwnerRow = string[];

interface BumpData {
  [key: string]: {
    currentRank: number;
    rankHistory: number[];
  };
}

const sendBump = (req: Request, res: Response): void => {
  if (cache.has('bump')) {
    res.send('CACHE:' + cache.get('bump'));
    Log.send('Bump Chart Data');
  } else {
    // bump data is not cached
    // so, generate it, send it, and cache it
    const csv = new CsvReader('rankingsByWeek.csv');
    csv.read();
    const csvRankings = csv.data.slice(1); // slice removes header row

    const bumpData: BumpData = {};

    const currentRankings = determineRankings(req.app.locals.owners);

    csvRankings.forEach((ownerRow: OwnerRow) => {
      const ownerShortName = ownerRow[0];

      let ownersRankHistory = {
        currentRank: 0,
        rankHistory: ownerRow.slice(1).map((str) => parseInt(str)),
      };

      currentRankings.forEach((rank) => {
        if (rank.owner.info.shortName === ownerShortName) {
          ownersRankHistory.currentRank = rank.currentRank;
          ownersRankHistory.rankHistory.push(rank.currentRank);
        }
      });

      bumpData[ownerShortName] = ownersRankHistory;
    });

    res.send(bumpData);
    Log.send('Bump Chart Data');

    // cache.set('bump', previousWeeks);
    // Log.cache('Bump Chart Data');
  }
};

export default sendBump;
