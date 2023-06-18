import { FormEvent } from 'react';
import Business from '../../../models/business';
import Button from '../../../ui/atoms/button/button';

interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  lei: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

const BusinessForm: React.FC<{ business?: Business }> = () => {
  const handleOnSubmit = (event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const { lei, name } = event.currentTarget.elements;
    console.log(lei.value, name.value);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-group">
        <label htmlFor="name">
          Name
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter business name"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="lei">
          LEI
          <input
            type="text"
            className="form-control"
            id="lei"
            placeholder="LEI"
          />
        </label>
      </div>
      <Button type="submit" className="btn-primary">
        Submit
      </Button>
    </form>
  );
};

export default BusinessForm;
