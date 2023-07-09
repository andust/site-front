import { FetchConfig, FetchResponse } from './types';

const fetchWrapper = async <T>(
  url: string,
  config: FetchConfig = {},
): Promise<FetchResponse<T> & { ok: Boolean }> => {
  const response = await fetch(
    `${process.env.REACT_APP_SITE_SERVICE_BACKEND_URL}/api/v1/${url}`,
    { ...config, body: JSON.stringify(config.body) },
  );
  const { data, error, message }: FetchResponse<T> = await response.json();

  return {
    ok: response.ok,
    data,
    error,
    message,
  };
};

export default fetchWrapper;
