import { Request, Response } from 'express';
import { cache } from '../cache';
import { Team } from '../classes/Team';
import getLiveScores from '../callsToAPIs/getLiveScores';

const sendScoreboard = async (req: Request, res: Response): Promise<void> => {
  if (cache.has('scoreboard')) {
    res.send(cache.get('scoreboard'));
  } else {
    // scoreboard data is not cached
    // so, generate it, send it, and cache it
    const teams: { [key: string]: Team } = req.app.locals.teams;
    const scoreboard = await getLiveScores(teams);

    res.send(scoreboard);

    cache.set('scoreboard', scoreboard, 20);
  }
};

export default sendScoreboard;
