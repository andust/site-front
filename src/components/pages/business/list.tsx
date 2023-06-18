import Business from '@models/business';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../ui/atoms/button/button';
import { ReactComponent as PlusCircle } from '../../../assets/svg/plus-circle.svg';

const BusinessList = ({ businesses }: { businesses: Business[] }) => {
  const navigate = useNavigate();
  const handleOpenCreateForm = () => navigate('new');
  return (
    <>
      {businesses.map((business) => (
        <div key={business.id}>
          <Link to={business.id || ''}>
            {business.name}
          </Link>
        </div>
      ))}
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
