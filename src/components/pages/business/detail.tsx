import { Link, useParams } from 'react-router-dom';
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
      <div style={{
        width: '150px',
        height: '150px',
        overflow: 'hidden',
        backgroundImage: `url("${process.env.REACT_APP_SITE_SERVICE_BACKEND_URL}/${data.logo}")`,
        backgroundSize: 'cover',
      }}
      />
      <Link to="edit">Edit</Link>
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
