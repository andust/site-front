import Business from '@models/business';
import { Response } from './types';
import useFetch from './useFetch';

const useGetBusiness = (): [Response<Business[]>, boolean] => {
  const [data, isLoading, error, message] = useFetch<Business[]>('business');

  return [
    {
      data: Array.isArray(data) ? data.map((b) => new Business(b)) : [],
      error,
      message,
    },
    isLoading,
  ];
};

export default useGetBusiness;
