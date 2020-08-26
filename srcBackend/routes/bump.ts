import { Request, Response } from 'express';
import { cache } from '../cache';

const sendBump = (req: Request, res: Response): void => {
  if (cache.has('bump')) {
    res.send('CACHE:' + cache.get('bump'));
  } else {
    // bump data is not cached
    // so, generate it, send it, and cache it
    const bump = 'bump data';
    res.send(bump);
    cache.set('bump', bump);
  }
};

export default sendBump;
