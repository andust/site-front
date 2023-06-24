import Business from '@models/business';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../ui/atoms/button/button';
import { ReactComponent as PlusCircle } from '../../../assets/svg/plus-circle.svg';

const BusinessList = ({ businesses }: { businesses: Business[] }) => {
  const navigate = useNavigate();
  const handleOpenCreateForm = () => navigate('new');
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business, index) => (
            <tr key={business.id}>
              <th scope="row">{index + 1}</th>
              <th>
                <Link to={business.id || ''}>
                  {business.name}
                </Link>
              </th>
              <th>
                {business.address.city}
              </th>
              <th>
                {business.address.country_code}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        className="btn-link d-block"
        style={{ position: 'fixed', bottom: 30, right: 30 }}
        onClick={handleOpenCreateForm}
      >
        <PlusCircle
          className="text-white bg-primary rounded-circle"
          style={{ width: 50, height: 50 }}
        />
      </Button>
    </>
  );
};

export default BusinessList;
