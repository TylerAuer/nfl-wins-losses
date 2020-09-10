import { useState, useEffect } from 'react';
import { Scoreboard } from '../interfaces';
import axios from 'axios';

interface useOwnersByTeamReturn {
  scoreboard: Scoreboard;
  loading: boolean;
}

export default function useScoreboard(): useOwnersByTeamReturn {
  const [scoreboard, setScoreboard] = useState({
    games: [],
    week: 0,
  });
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
    }, 10 * 1000);
  }, []);

  return { scoreboard, loading };
}
