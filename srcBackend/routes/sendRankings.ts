import { Request, Response } from 'express';
import { cache } from '../cache';
import { Log } from '../Log';
import determineRankings from '../computations/determineRankings';

const sendRankings = (req: Request, res: Response): void => {
  if (cache.has('rankings')) {
    // rankings are cached, so use them
    res.send(cache.get('rankings'));
    Log.send('Rankings');
  } else {
    // rankings data is not cached so, generate it, send it, and cache it
    const rankings = determineRankings(req.app.locals.owners);
    Log.compute('Rankings');

    res.send(rankings);
    Log.send('Rankings');

    cache.set('rankings', rankings);
    Log.cache('Rankings');
  }
};

export default sendRankings;
