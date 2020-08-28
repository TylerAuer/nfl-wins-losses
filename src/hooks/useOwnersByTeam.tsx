import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useOwnersByTeam() {
  const [ownersByTeam, setOwners] = useState(null);
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
