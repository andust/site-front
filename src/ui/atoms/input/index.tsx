export interface InputProps {
  type?: 'text' | 'file'
  name: string
  className?: string
  placeholder?: string
  value?: string | number | undefined
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  name,
  type = 'text',
  className = 'form-control',
  placeholder,
  value,
  onChangeHandler,
}: InputProps) => (
  <input
    type={type}
    className={className}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChangeHandler}
  />
);

export default Input;
