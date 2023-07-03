import Business from '../../models/business';
import { FetchResponse } from './types';
import useFetch from './useFetch';

export type UseGetBusinessResponse = [FetchResponse<Business[]>, boolean];

const useGetBusiness = (): UseGetBusinessResponse => {
  type ResponseBusiness = Business & { main_isin: string, website_url?: string };
  const [data, isLoading, error, message] = useFetch<ResponseBusiness[]>('business');

  return [
    {
      data: Array.isArray(data)
        ? data.map((b) => new Business({ ...b, ...{ mainIsin: b.main_isin } }))
        : [],
      error,
      message,
    },
    isLoading,
  ];
};

export default useGetBusiness;
