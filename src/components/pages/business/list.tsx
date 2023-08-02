import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ContainerContext from '../../../di';
import Button from '../../../ui/atoms/button';
import Table from '../../../ui/atoms/table';
import { ReactComponent as PlusCircle } from '../../../assets/svg/plus-circle.svg';
import { ReactComponent as DataThresholding } from '../../../assets/svg/data-thresholding.svg';

const BusinessList = () => {
  const navigate = useNavigate();
  const { useGetBusiness } = useContext(ContainerContext);
  const [{ data }] = useGetBusiness();

  return (
    <div className="card border border-2 rounded-3 shadow-lg p-3">
      <Table
        thead={[
          { id: 1, content: '#' },
          { id: 2, content: 'Name' },
          { id: 3, content: 'City' },
          { id: 4, content: 'Country' },
          { id: 4, content: 'Action' },
        ]}
        tbody={data.map((business, i) => [
          { id: i + 1, content: i + 1 },
          {
            id: i + 2,
            content: (
              <Link to={business.id || ''} className="text-decoration-none">
                {business.name}
              </Link>
            ),
          },
          { id: i + 3, content: business.address.city },
          { id: i + 4, content: business.address.country_code },
          {
            id: i + 5,
            content: (
              <Link to={business.id || ''} className="text-decoration-none">
                <DataThresholding
                  style={{ width: 25, height: 25 }}
                />
              </Link>
            ),
          },
        ])}
      />

      <Button
        className="btn-link d-block"
        style={{ position: 'fixed', bottom: 30, right: 30 }}
        onClick={() => navigate('new')}
      >
        <PlusCircle
          className="text-white bg-primary rounded-circle"
          style={{ width: 50, height: 50 }}
        />
      </Button>
    </div>
  );
};

export default BusinessList;
