import { Request, Response } from 'express';
import { Log } from '../Log';

const sendOwners = (req: Request, res: Response): void => {
  res.send(req.app.locals.owners);
  Log.send('Owners');
};

export default sendOwners;
