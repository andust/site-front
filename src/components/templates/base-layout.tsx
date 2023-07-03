import { Link, Outlet } from 'react-router-dom';
import { List, ListItem } from '../../ui/atoms/list';
import ContainerContext, { container } from '../../di';

const BaseLayout = () => (
  <>
    <h1 className="bg-primary text-white p-3">Backoffice</h1>
    <div className="vh-100 d-flex">
      <div className="d-flex align-self-center pe-5">
        <List>
          <ListItem><Link to="/">Home</Link></ListItem>
          <ContainerContext.Provider value={container}>
            <ListItem><Link to="/business">Businesses</Link></ListItem>
          </ContainerContext.Provider>
        </List>
      </div>
      <div className="p-3 w-100">
        <Outlet />
      </div>
    </div>
  </>
);

export default BaseLayout;
