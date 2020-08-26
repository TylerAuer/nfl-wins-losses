import { Request, Response } from 'express';

const sendStandings = (req: Request, res: Response): void => {
  res.send('JSON for league standings');
};

export default sendStandings;
