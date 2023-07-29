import { Route, Routes } from 'react-router-dom';

import BusinessList from './list';
import BusinessDetail from './detail';
import BusinessCreate from './create';
import BusinessEdit from './edit';

const BusinessIndex = () => (
  <div className="w-100">
    <Routes>
      <Route path="/" element={<BusinessList />} />
      <Route path="/new" element={<BusinessCreate />} />
      <Route
        path="/:businessId"
        element={<BusinessDetail />}
      />
      <Route
        path="/:businessId/edit"
        element={<BusinessEdit />}
      />
    </Routes>
  </div>
);

export default BusinessIndex;
