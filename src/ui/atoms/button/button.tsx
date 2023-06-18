import {
  ChildrenProp,
  ClassNameProps,
  OnClickProps,
  ReactButtonProps,
} from '../../types';

const Button = ({
  children,
  type = 'button',
  className = '',
  style = {},
  onClick,
}: ChildrenProp &
ReactButtonProps &
ClassNameProps &
React.CSSProperties &
OnClickProps) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={`btn ${className}`}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
