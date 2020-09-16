import { useState, useEffect } from 'react';
import axios from 'axios';

interface BumpEndPointData {
  [key: string]: {
    [key: string]: number;
  };
}

interface UseBumpReturn {
  bumpData: BumpEndPointData;
  loading: boolean;
}
export default function useBump(): UseBumpReturn {
  const [bumpData, setBumpData] = useState({
    owner: {
      Live: 1,
      Pre: 1,
    },
  });
  const [loading, setLoading] = useState(true);

  const getBumpData = async () => {
    const res = await axios.get('/bump');
    setBumpData(res.data);
    setLoading(false);
  };

  // Run when the component first mounts
  useEffect(() => {
    getBumpData();

    setInterval(() => {
      getBumpData();
    }, 30 * 1000);
  }, []);

  return { bumpData, loading };
}
