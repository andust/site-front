import { useEffect, useState } from 'react';
import { FetchConfig } from './types';

const useFetch = <T>(
  url: string,
  config: FetchConfig = {},
): [T | undefined, boolean, string, string] => {
  const [stateData, setStateData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [stateError, setStateError] = useState<string>('');
  const [stateMessage, setStateMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SITE_SERVICE_BACKEND_URL}/api/v1/${url}`,
        config,
      );
      const { data, error, message } = await response.json();
      setStateMessage(message);

      if (response.ok) {
        setStateData(data);
      } else {
        setStateError(error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return [stateData, loading, stateError, stateMessage];
};

export default useFetch;
