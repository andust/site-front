class Address {
  street: string;

  postal_code: string;

  city: string;

  country_code: string;

  constructor(data: {
    street: string;
    postal_code: string;
    city: string;
    country_code: string;
  }) {
    this.street = data.street;
    this.postal_code = data.postal_code;
    this.city = data.city;
    this.country_code = data.country_code;
  }
}

export default Address;
