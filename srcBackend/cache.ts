import NodeCache from 'node-cache';

export const cache = new NodeCache({
  stdTTL: 120, // default life of cached item in seconds
  checkperiod: 60, // automatic delete check interval
});
