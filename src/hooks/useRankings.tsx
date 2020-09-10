import { useState, useEffect } from 'react';
import { Rankings } from '../interfaces';
import axios from 'axios';

interface useRankingsReturn {
  rankings: Rankings;
  loading: boolean;
}

export default function useRankings(): useRankingsReturn {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRankings = async () => {
    const res = await axios.get('/rankings');
    setRankings(res.data);
    setLoading(false);
  };

  // Run when the component first mounts
  useEffect(() => {
    getRankings();

    setInterval(() => {
      getRankings();
    }, 30 * 1000);
  }, []);

  return { rankings, loading };
}
