import Business from '../../models/business';
import { FetchResponse } from '../../fetch/types';
import useFetch from './useFetch';

export type UseuseGetBusinessByIdResponse = [FetchResponse<Business | null>, boolean];

const useGetBusinessById = (id: string): UseuseGetBusinessByIdResponse => {
  const [data, isLoading, error, message] = useFetch<Business>(`business/${id}`);

  return [
    {
      data: data ? new Business(data) : null,
      error,
      message,
    },
    isLoading,
  ];
};

export default useGetBusinessById;
