import useGetBusiness from '@hooks/data/useGetBusiness';

const Business = () => {
  const [{ data }] = useGetBusiness();
  return (
    <div>
      <h2>Businesses</h2>
      {data.map((business) => <p key={business.id}>{business.name}</p>)}
    </div>
  );
};

export default Business;
