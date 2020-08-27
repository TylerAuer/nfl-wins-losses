import { Request, Response } from 'express';
import { cache } from '../cache';

const sendStandings = (req: Request, res: Response): void => {
  if (cache.has('standings')) {
    res.send('CACHE:' + cache.get('standings'));
  } else {
    // standings data is not cached
    // so, generate it, send it, and cache it
    const standings = 'standings data';
    res.send(standings);
    cache.set('standings', standings);
  }
};

export default sendStandings;
