import { Routes, Route } from 'react-router-dom';
import Business from '@components/pages/business';
import BaseLayout from '@components/templates/base-layout';

const RequireAuth = (): JSX.Element | null => {
  const access = true;

  if (!access) {
    return null;
    // return <Navigate to="/authentication/login" replace />;
  }

  return <BaseLayout />;
};

const App = () => (
  <div className="App">
    <Routes>
      <Route path="" element={<RequireAuth />}>
        <Route path="business/*" element={<Business />} />
      </Route>
    </Routes>
  </div>
);

export default App;
