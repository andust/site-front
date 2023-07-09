import Business from '../../models/business';
import { FetchResponse } from '../../fetch/types';
import useFetch from './useFetch';

export type UseGetBusinessResponse = [FetchResponse<Business[]>, boolean];

const useGetBusiness = (): UseGetBusinessResponse => {
  const [data, isLoading, error, message] = useFetch<Business[]>('business');

  return [
    {
      data: Array.isArray(data)
        ? data.map((b) => new Business(b))
        : [],
      error,
      message,
    },
    isLoading,
  ];
};

export default useGetBusiness;
