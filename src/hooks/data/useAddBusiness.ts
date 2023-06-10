import Business from '@models/business';
import useFetch from './useFetch';

const useAddBusiness = (business: Business) => {
  const [data, isLoading, error, message] = useFetch<Business>('business', {
    method: 'POST',
    body: JSON.stringify(business),
  });

  return [
    {
      data: Array.isArray(data) ? data.map((b) => new Business(b)) : [],
      error,
      message,
    },
    isLoading,
  ];
};

export default useAddBusiness;
