import { useEffect, useState } from 'react';

import { FetchConfig } from '../../fetch/types';
import fetchWrapper from '../../fetch';

export type UseFetchResponse<T> = [T | undefined, boolean, boolean, string];

const useFetch = <T>(
  url: string,
  config: FetchConfig = {},
): UseFetchResponse<T> => {
  const [stateData, setStateData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [stateError, setStateError] = useState<boolean>(false);
  const [stateMessage, setStateMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const {
        ok, data, error, message,
      } = await fetchWrapper<T>(url, config);
      setStateMessage(message);

      if (ok) {
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
