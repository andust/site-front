import {
  object, string, ValidationError,
} from 'yup';
import Address, { AddressProps } from './address';

export interface BusinessProps {
  id?: string;
  name: string;
  address: AddressProps;
  lei: string;
  main_isin: string;
  website_url: string;
  logo?: string;
}

const userSchema = object({
  name: string().min(2).label('Name'),
  // lei: string().length(20).label('Lei'),
});

class Business {
  readonly id?: string;

  name: string;

  address: Address;

  lei: string;

  main_isin: string;

  website_url: string;

  logo: string;

  validationErrors: Map<string, string[]>;

  constructor(props: BusinessProps) {
    this.id = props.id ?? '';
    this.name = props.name;
    this.address = new Address(props.address);
    this.lei = props.lei;
    this.main_isin = props.main_isin;
    this.website_url = props.website_url;
    this.logo = props.logo ?? '';
    this.validationErrors = new Map();
  }

  fullAddress() {
    return `${this.address.street} ${this.address.postal_code} ${this.address.postal_code}`;
  }

  validate() {
    try {
      userSchema.validateSync({
        name: this.name,
        lei: this.lei,
      }, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        error.inner.forEach(({ path, errors }) => {
          if (path) {
            this.validationErrors.set(path, errors);
          }
        });
      }
    }
  }

  isValid(): boolean {
    return this.validationErrors.size === 0;
  }

  toJSON(): BusinessProps {
    return {
      name: this.name,
      address: this.address,
      lei: this.lei,
      main_isin: this.main_isin,
      website_url: this.website_url,
      logo: this.logo,
    };
  }
}

export default Business;
