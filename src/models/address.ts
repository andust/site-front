export interface AddressProps {
  street: string;
  postal_code: string;
  city: string;
  country_code: string;
}

class Address {
  street: string;

  postal_code: string;

  city: string;

  country_code: string;

  constructor(data: AddressProps) {
    this.street = data.street;
    this.postal_code = data.postal_code;
    this.city = data.city;
    this.country_code = data.country_code;
  }
}

export default Address;
