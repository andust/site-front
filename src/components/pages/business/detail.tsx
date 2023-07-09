import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import ContainerContext from '../../../di';

const BusinessDetail = () => {
  const { businessId } = useParams();
  const { useGetBusinessById } = useContext(ContainerContext);
  const [{ data }] = useGetBusinessById(businessId ?? '');

  if (!data) {
    return <p>Business not found.</p>;
  }
  return (
    <>
      <h3>{data.name}</h3>
      <p>
        <b>LEI: </b>
        {data.lei}
      </p>
      <p>
        <b>ISIN: </b>
        {data.main_isin}
      </p>
      <p>
        <b>Address: </b>
        {data.fullAddress()}
      </p>
    </>
  );
};

export default BusinessDetail;
