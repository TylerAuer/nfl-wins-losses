import { Request, Response } from 'express';
import { cache } from '../cache';
import { Log } from '../Log';
import determineOwnersByTeam from '../computations/determineOwnersByTeam';

const sendOwners = (req: Request, res: Response): void => {
  if (cache.has('owners')) {
    // Data is in cache so send the cached data
    res.send(cache.get('owners'));
    Log.send('Owners');
  } else {
    // Data is not in cache, so compute, send, and cache it
    const ownersByTeam = determineOwnersByTeam(
      req.app.locals.owners,
      req.app.locals.teams
    );
    Log.compute('Owners');

    res.send(ownersByTeam);
    Log.send('Owners');

    cache.set('owners', ownersByTeam);
    Log.cache('Owners');
  }
};

export default sendOwners;
