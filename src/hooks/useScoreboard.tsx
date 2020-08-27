import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useScoreboard() {
  const [scoreboard, setScoreboard] = useState(null);
  const [loading, setLoading] = useState(true);

  const getScores = async () => {
    const res = await axios.get('/scoreboard');
    setScoreboard(res.data);
    setLoading(false);
  };

  // Run when the component first mounts
  useEffect(() => {
    getScores();

    setInterval(() => {
      getScores();
    }, 30 * 1000);
  }, []);

  return { scoreboard, loading };
}
