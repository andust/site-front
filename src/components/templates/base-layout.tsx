import { Link, Outlet } from 'react-router-dom';
import List from '../../ui/atoms/list/list';
import ListItem from '../../ui/atoms/list/list-item';
import ContainerContext, { container } from '../../di';

const BaseLayout = () => (
  <>
    <h1 className="bg-primary text-white p-3">Backoffice</h1>
    <div className="vh-100 d-flex">
      <div className="d-flex align-self-center">
        <List>
          <ListItem><Link to="/">Home</Link></ListItem>
          <ContainerContext.Provider value={container}>
            <ListItem><Link to="/business">Businesses</Link></ListItem>
          </ContainerContext.Provider>
        </List>
      </div>
      <Outlet />
    </div>
  </>
);

export default BaseLayout;
