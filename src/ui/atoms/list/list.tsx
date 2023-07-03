import { ChildrenProps, ClassNameProps } from '../../types';

const List = ({ className = '', children }: ChildrenProps & ClassNameProps) => (
  <ul className={`${className} list-group list-group-numbered`}>{children}</ul>
);

export default List;
