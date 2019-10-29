import { useEffect, useState } from 'react';
import axios from 'axios';

export const useApi = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios(`https://opensky-network.org/api${url}`);
        setResponse(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { response, error, isLoading };
};
