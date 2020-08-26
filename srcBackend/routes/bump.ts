import { Request, Response } from 'express';

const sendBump = (req: Request, res: Response): void => {
  res.send('Data for bump');
};

export default sendBump;
