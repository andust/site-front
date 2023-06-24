import { ReactNode } from 'react';

// eslint-disable-next-line max-len
const TableHeader = ({ children }: { children: ReactNode | ReactNode[] }) => <td><tr>{children}</tr></td>;

export default TableHeader;
