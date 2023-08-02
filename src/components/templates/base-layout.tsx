import { Link, Outlet } from 'react-router-dom';
import { List, ListItem } from '../../ui/atoms/list';
import ContainerContext, { container } from '../../di';

const BaseLayout = () => (
  <div className="d-flex align-self-center min-vh-100 sf-gradient">
    <div className="border-end border-2 d-flex">
      <List className="sf-side-nav align-self-center px-4">
        <ListItem>
          <Link className="text-decoration-none" to="/">
            Home
          </Link>
        </ListItem>
        <ContainerContext.Provider value={container}>
          <ListItem>
            <Link className="text-decoration-none" to="/business">
              Businesses
            </Link>
          </ListItem>
        </ContainerContext.Provider>
        <ListItem>
          <Link className="text-decoration-none" to="/">
            Link Two
          </Link>
        </ListItem>
        <ListItem>
          <Link className="text-decoration-none" to="/">
            Link Three
          </Link>
        </ListItem>
        <ListItem>
          <Link className="text-decoration-none" to="/">
            Link Four
          </Link>
        </ListItem>
      </List>
    </div>
    <div className="w-100 p-3">
      <h2>Home</h2>
      <Outlet />
    </div>
  </div>
);

export default BaseLayout;
