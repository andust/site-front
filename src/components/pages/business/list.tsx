import Business from '@models/business';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../ui/atoms/button';
import Table from '../../../ui/atoms/table';
import { ReactComponent as PlusCircle } from '../../../assets/svg/plus-circle.svg';

const BusinessList = ({ businesses }: { businesses: Business[] }) => {
  const navigate = useNavigate();
  const handleOpenCreateForm = () => navigate('new');

  return (
    <>
      <Table
        thead={[
          { id: 1, content: '#' },
          { id: 2, content: 'Name' },
          { id: 3, content: 'City' },
          { id: 4, content: 'Country' },
        ]}
        tbody={businesses.map((business, i) => [
          { id: i + 1, content: i + 1 },
          {
            id: i + 2,
            content: <Link to={business.id || ''}>{business.name}</Link>,
          },
          { id: i + 3, content: business.address.city },
          { id: i + 4, content: business.address.country_code },
        ])}
      />

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
