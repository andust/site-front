import { useState } from 'react';
import Button from '../../../ui/atoms/button';
import FormGroup from '../../../ui/molecules/form-group';
import Business, { BusinessProps } from '../../../models/business';
import { ValidationError } from '../../../errors/errors';

const BusinessForm = ({ business }: { business?: BusinessProps }) => {
  const [validationErrors, setValidationErrors] = useState<ValidationError>(
    new Map(),
  );
  const [name, setName] = useState(business?.name || '');
  const [lei, setLei] = useState(business?.lei || '');
  const [mainIsin, setMainIsin] = useState(business?.mainIsin || '');
  const [websiteUrl, setWebsiteUrl] = useState(business?.websiteUrl || '');
  const [addressStreet, setAddressStreet] = useState(
    business?.address.street || '',
  );
  const [addressPostalCode, setAddressPostalCode] = useState(
    business?.address.postal_code || '',
  );
  const [addressCity, setAddressCity] = useState(business?.address.city || '');
  const [addressCountryCode, setAddressCountryCode] = useState(
    business?.address.country_code || '',
  );

  const onSubmitForm = () => {
    const newBusiness = new Business({
      name,
      lei,
      mainIsin,
      websiteUrl,
      address: {
        city: addressCity,
        street: addressStreet,
        postal_code: addressPostalCode,
        country_code: addressCountryCode,
      },
    });
    newBusiness.validate();
    setValidationErrors(newBusiness.validationErrors);
  };

  return (
    <form>
      <h4>Business</h4>
      <FormGroup
        id="name"
        label="Name"
        className="mb-3"
        value={name}
        onChangeHandler={(e) => setName(e.target.value)}
        validationError={validationErrors.get('name')}
      />
      <FormGroup
        id="lei"
        label="Lei"
        className="mb-3"
        value={lei}
        onChangeHandler={(e) => setLei(e.target.value)}
        validationError={validationErrors.get('lei')}
      />
      <FormGroup
        id="main_isin"
        label="Main isin"
        className="mb-3"
        value={mainIsin}
        onChangeHandler={(e) => setMainIsin(e.target.value)}
      />
      <FormGroup
        id="website"
        label="Website"
        className="mb-3"
        value={websiteUrl}
        onChangeHandler={(e) => setWebsiteUrl(e.target.value)}
      />
      <div className="ps-3 py-3">
        <h4>Address</h4>
        <FormGroup
          id="address.street"
          label="Street"
          className="mb-3"
          value={addressStreet}
          onChangeHandler={(e) => setAddressStreet(e.target.value)}
        />
        <FormGroup
          id="address.postal_code"
          label="Postal code"
          className="mb-3"
          value={addressPostalCode}
          onChangeHandler={(e) => setAddressPostalCode(e.target.value)}
        />
        <FormGroup
          id="address.city"
          label="City"
          className="mb-3"
          value={addressCity}
          onChangeHandler={(e) => setAddressCity(e.target.value)}
        />
        <FormGroup
          id="address.country_code"
          label="Country code"
          className="mb-3"
          value={addressCountryCode}
          onChangeHandler={(e) => setAddressCountryCode(e.target.value)}
        />
      </div>
      <Button className="btn btn-primary mt-3" onClick={onSubmitForm}>
        Submit
      </Button>
    </form>
  );
};

export default BusinessForm;
