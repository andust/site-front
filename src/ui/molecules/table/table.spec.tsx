import { render, screen } from '@testing-library/react';
import Table from '.';
import TableHeader from '../table-header';
import TableCell from '../../atoms/table-cell';

describe('Table', () => {
  it('should display table', () => {
    render(
      <Table>
        <TableHeader>
          <TableCell text="ddd" />
        </TableHeader>
      </Table>,
    );

    const tableElement = screen.getByRole('table');
    expect(tableElement).toContainElement(tableElement.querySelector('thead'));
    expect(tableElement).toContainElement(tableElement.querySelector('tbody'));
  });
});
