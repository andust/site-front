import Address from './address';

interface BusinessProps {
  id?: string;
  name: string;
  address: Address;
  lei: string;
  main_isin: string;
  website_url: string;
}

class Business {
  readonly id?: string;

  name: string;

  address: Address;

  lei: string;

  main_isin: string;

  website_url: string;

  constructor(props: BusinessProps) {
    this.id = props.id ?? '';
    this.name = props.name;
    this.address = props.address;
    this.lei = props.lei;
    this.main_isin = props.main_isin;
    this.website_url = props.website_url;
  }

  fullAddress() {
    return `${this.address.street} ${this.address.postal_code} ${this.address.postal_code}`;
  }
}

export default Business;
