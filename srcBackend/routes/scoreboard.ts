import { Request, Response } from 'express';
import { cache } from '../cache';

const sendScoreboard = async (req: Request, res: Response): Promise<void> => {
  if (cache.has('scoreboard')) {
    res.send(cache.get('scoreboard'));
  } else {
    // scoreboard data is not cached
    // so, generate it, send it, and cache it
    const scoreboard = req.app.locals.teams;
    scoreboard.ATL.wins++;
    res.send(scoreboard);
    cache.set('scoreboard', scoreboard, 2);
  }
};

export default sendScoreboard;
