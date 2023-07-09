import { Route, Routes } from 'react-router-dom';

import BusinessList from './list';
import BusinessDetail from './detail';

import BusinessCreate from './create';

const BusinessIndex = () => (
  <div className="w-100">
    <Routes>
      <Route path="/" element={<BusinessList />} />
      <Route path="/new" element={<BusinessCreate />} />
      <Route
        path="/:businessId"
        element={<BusinessDetail />}
      />
    </Routes>
  </div>
);

export default BusinessIndex;
