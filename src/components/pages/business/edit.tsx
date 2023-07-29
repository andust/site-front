import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BusinessForm from './form';
import ContainerContext from '../../../di';
import Business from '../../../models/business';

const BusinessEdit = () => {
  const { businessId } = useParams();
  const navigate = useNavigate();
  const { useGetBusinessById, fetchWrapper } = useContext(ContainerContext);
  const [{ data }] = useGetBusinessById(businessId ?? '');
  const handleSubmit = async (business: Business, logo?: File) => {
    if (business.isValid()) {
      const formData = new FormData();
      formData.append('body', JSON.stringify(business.toJSON()));
      if (logo) {
        formData.append('image', logo);
      }
      const { error } = await fetchWrapper(`business/${businessId}`, {
        method: 'PATCH',
        body: formData,
      });
      if (error === false) {
        navigate(`/business/${businessId}`);
      }
    }
  };
  return (
    <>
      <h3>Edit</h3>
      {data && <BusinessForm business={data} handleSubmit={handleSubmit} />}
    </>
  );
};

export default BusinessEdit;
