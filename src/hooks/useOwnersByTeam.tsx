import { useState, useEffect } from 'react';
import { OwnersByTeam } from '../interfaces';
import axios from 'axios';

interface useOwnersByTeamReturn {
  ownersByTeam: OwnersByTeam;
  loading: boolean;
}

export default function useOwnersByTeam(): useOwnersByTeamReturn {
  const [ownersByTeam, setOwners] = useState({});
  const [loading, setLoading] = useState(true);

  const getOwners = async () => {
    const res = await axios.get('/owners-by-team');
    setOwners(res.data);
    setLoading(false);
  };

  // Run when the component first mounts
  useEffect(() => {
    getOwners();
  }, []);

  return { ownersByTeam, loading };
}
