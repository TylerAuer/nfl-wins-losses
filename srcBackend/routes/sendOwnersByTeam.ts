import { Request, Response } from 'express';
import { Log } from '../Log';
import determineOwnersByTeam from '../computations/determineOwnersByTeam';

const sendOwners = (req: Request, res: Response): void => {
  const ownersByTeam = determineOwnersByTeam(req.app.locals.owners);
  Log.compute('Owners');

  res.send(ownersByTeam);

  Log.send('Owners');
};

export default sendOwners;
