import {
  object, string, ValidationError,
} from 'yup';
import Address, { AddressProps } from './address';

export interface BusinessProps {
  id?: string;
  name: string;
  address: AddressProps;
  lei: string;
  mainIsin: string;
  websiteUrl: string;
}

const userSchema = object({
  name: string().min(2).label('Name'),
  lei: string().length(20).label('Lei'),
});

class Business {
  readonly id?: string;

  name: string;

  address: Address;

  lei: string;

  mainIsin: string;

  websiteUrl: string;

  validationErrors: Map<string, string[]>;

  constructor(props: BusinessProps) {
    this.id = props.id ?? '';
    this.name = props.name;
    this.address = new Address(props.address);
    this.lei = props.lei;
    this.mainIsin = props.mainIsin;
    this.websiteUrl = props.websiteUrl;
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
}

export default Business;
