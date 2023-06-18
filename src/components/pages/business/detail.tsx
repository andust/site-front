import { useParams } from 'react-router-dom';
import Business from '@models/business';

const BusinessDetail = ({ businesses }: { businesses: Business[] }) => {
  const { businessId } = useParams();
  const business = businesses.find((b) => b.id === businessId);
  if (!business) {
    return <p>Business not found.</p>;
  }
  return (
    <>
      <h3>{business.name}</h3>
      <p>
        <b>LEI: </b>
        {business.lei}
      </p>
      <p>
        <b>ISIN: </b>
        {business.main_isin}
      </p>
      <p>
        <b>Address: </b>
        {business.fullAddress()}
      </p>
    </>
  );
};

export default BusinessDetail;
