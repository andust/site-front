import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ContainerContext, { container } from '../../../di';
import BusinessIndex from '.';
import data from '../../../__mock__/businesses-list';

describe('Business page', () => {
  it('renders businesses list', async () => {
    render(
      <BrowserRouter>
        <ContainerContext.Provider value={{ ...container, useGetBusiness: () => [data, false] }}>
          <BusinessIndex />
        </ContainerContext.Provider>
      </BrowserRouter>,
    );

    const listElements = await screen.findAllByRole('link');
    expect(listElements).toHaveLength(4);
    const linkNames = listElements.map((le) => le.childNodes[0].textContent);
    expect(linkNames).toEqual(data.data.map((d) => d.name));
  });
});
