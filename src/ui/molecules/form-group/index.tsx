import Input, { InputProps } from '../../atoms/input';

// import { ChildrenProps } from '../../types';

const FormGroup = ({
  className,
  type = 'text',
  name,
  label,
  inputClassName = 'form-control',
  value,
  onChangeHandler,
  validationError,
}: InputProps & {
  validationError?: string[];
  inputClassName?: string;
  label: string;
}) => (
  <div className={`form-group ${className}`}>
    <label htmlFor={name} className="w-100">
      {label}
      <Input
        type={type}
        name={name}
        value={value}
        className={inputClassName}
        onChangeHandler={onChangeHandler}
      />
    </label>
    {Array.isArray(validationError)
      ? validationError.map((error) => <p key={error} className="small mb-1">{error}</p>)
      : null}
  </div>
);

export default FormGroup;
