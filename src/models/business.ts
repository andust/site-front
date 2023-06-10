import Address from './address';

class Business {
  id?: string;

  name: string;

  address: Address;

  lei: string;

  main_isin: string;

  website_url: string;

  constructor(props: {
    id?: string;
    name: string;
    address: Address;
    lei: string;
    main_isin: string;
    website_url: string;
  }) {
    this.id = props.id ?? '';
    this.name = props.name;
    this.address = props.address;
    this.lei = props.lei;
    this.main_isin = props.main_isin;
    this.website_url = props.website_url;
  }
}

export default Business;
