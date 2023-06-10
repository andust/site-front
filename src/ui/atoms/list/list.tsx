import { ChildrenProp, ClassNameProps } from '@ui/types';

const List = ({ className = '', children }: ChildrenProp & ClassNameProps) => (
  <ul className={`${className} list-group list-group-numbered`}>{children}</ul>
);

export default List;
