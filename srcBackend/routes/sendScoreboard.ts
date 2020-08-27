import { Request, Response } from 'express';
import { cache } from '../cache';
import { Log } from '../Log';
import { Team } from '../classes/Team';
import getLiveScores from '../callsToAPIs/getLiveScores';

const sendScoreboard = async (req: Request, res: Response): Promise<void> => {
  if (cache.has('scoreboard')) {
    res.send(cache.get('scoreboard'));
    Log.send('Scoreboard data');
  } else {
    if (!req.app.locals.teams) {
      throw new Error('Team data has not loaded yet.');
    }
    // scoreboard data is not cached
    // so, generate it, send it, and cache it
    const teams: { [key: string]: Team } = req.app.locals.teams;
    const scoreboard = await getLiveScores(teams);
    Log.compute('Scoreboard data');

    res.send(scoreboard);
    Log.send('Scoreboard data');

    cache.set('scoreboard', scoreboard, 10);
    Log.cache('Scoreboard data');
  }
};

export default sendScoreboard;
