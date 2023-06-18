import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';

import BusinessList from './list';
import BusinessDetail from './detail';

import BusinessCreate from './create';
import ContainerContext from '../../../di';

const BusinessIndex = () => {
  const { useGetBusiness } = useContext(ContainerContext);
  const [{ data }] = useGetBusiness();

  return (
    <div className="w-100">
      <Routes>
        <Route path="/" element={<BusinessList businesses={data} />} />
        <Route path="/new" element={<BusinessCreate />} />
        <Route
          path="/:businessId"
          element={<BusinessDetail businesses={data} />}
        />
      </Routes>
    </div>
  );
};

export default BusinessIndex;
