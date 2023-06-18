import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MyContext from '../../../di';
import BusinessIndex from '.';
import data from '../../../__mock__/businesses-list';

describe('Business page', () => {
  test('renders businesses list', async () => {
    render(
      <BrowserRouter>
        <MyContext.Provider value={{ useGetBusiness: () => [data, false] }}>
          <BusinessIndex />
        </MyContext.Provider>
      </BrowserRouter>,
    );

    const listElements = await screen.findAllByRole('link');
    expect(listElements).toHaveLength(4);
  });
});
