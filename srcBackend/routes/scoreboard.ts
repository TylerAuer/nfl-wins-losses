import { Request, Response } from 'express';

const sendScoreboard = (req: Request, res: Response): void => {
  res.send('Scoreboard');
};

export default sendScoreboard;
