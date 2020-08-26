import { Request, Response } from 'express';
import { cache } from '../cache';

const sendScoreboard = (req: Request, res: Response): void => {
  if (cache.has('scoreboard')) {
    res.send('CACHE:' + cache.get('scoreboard'));
  } else {
    // scoreboard data is not cached
    // so, generate it, send it, and cache it
    const scoreboard = 'Scoreboard data';
    res.send(scoreboard);
    cache.set('scoreboard', scoreboard, 10);
  }
};

export default sendScoreboard;
