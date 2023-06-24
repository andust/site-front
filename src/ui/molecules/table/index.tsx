import { ChildrenProp } from '../../types';

const Table = ({ children }: ChildrenProp) => (
  <table className="table">{children}</table>
);

export default Table;
