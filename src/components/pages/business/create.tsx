import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Business from '../../../models/business';
import BusinessForm from './form';
import ContainerContext from '../../../di';

const BusinessCreate = () => {
  const navigate = useNavigate();
  const { fetchWrapper } = useContext(ContainerContext);
  const handleSubmit = async (business: Business, logo?: File) => {
    const formData = new FormData();
    formData.append('body', JSON.stringify(business.toJSON()));
    if (logo) {
      formData.append('image', logo);
    }
    const { error } = await fetchWrapper('business', {
      method: 'POST',
      body: formData,
    });
    if (error === false) {
      navigate('/business');
    }
  };
  return <BusinessForm handleSubmit={handleSubmit} />;
};

export default BusinessCreate;
