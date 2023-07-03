import { render, screen } from '@testing-library/react';
import Table from '.';

describe('Table', () => {
  it('should display table', () => {
    render(
      <Table
        thead={[
          { id: 1, content: '#' },
          { id: 2, content: 'name' },
          { id: 3, content: <p>city</p> },
          { id: 4, content: null },
        ]}
        tbody={[
          [
            { id: 1, content: '1' },
            { id: 2, content: 'example name 1' },
            { id: 3, content: <p>example city 1</p> },
            { id: 4, content: 'example null 1' },
          ],
          [
            { id: 1, content: '2' },
            { id: 2, content: 'example name 2' },
            { id: 3, content: <p>example city 2</p> },
            { id: 4, content: 'example null 2' },
          ],
        ]}
      />,
    );

    const tableElement = screen.getByRole('table');
    const tableHeadElement = tableElement.querySelector('thead');
    const tableBodyElement = tableElement.querySelector('tbody');

    expect(tableElement).toContainElement(tableHeadElement);
    expect(tableHeadElement?.querySelectorAll('th')).toHaveLength(4);

    expect(tableElement).toContainElement(tableBodyElement);
    expect(tableBodyElement?.querySelectorAll('tr')).toHaveLength(2);
  });
});
