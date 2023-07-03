import { ReactNode } from 'react';
import { ChildrenProps } from '../../types';

export const TableCell = ({ children }: ChildrenProps) => <th>{children}</th>;
export const TableRow = ({ children }: ChildrenProps) => <tr>{children}</tr>;

interface TableSectionProps {
  id: string | number;
  content: string | ReactNode;
}

const Table = ({
  thead,
  tbody,
}: {
  thead: TableSectionProps[];
  tbody: TableSectionProps[][];
}) => (
  <table className="table">
    <thead>
      <tr>
        {thead.map((a) => (
          <th scope="col" key={a.id}>
            {a.content}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {tbody.map((row, i) => (
        <tr key={[i, ...row.map((a) => a.id)].join()}>
          {row.map((r) => (
            <th scope="col" key={r.id}>
              {r.content}
            </th>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
