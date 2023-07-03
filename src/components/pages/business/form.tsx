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
        className="mb-3"
        name="name"
        label="Name"
        value={name}
        onChangeHandler={(e) => setName(e.target.value)}
        validationError={validationErrors.get('name')}
      />
      <FormGroup
        className="mb-3"
        name="lei"
        label="Lei"
        value={lei}
        onChangeHandler={(e) => setLei(e.target.value)}
        validationError={validationErrors.get('lei')}
      />
      <FormGroup
        label="Main isin"
        name="mainIsin"
        className="mb-3"
        value={mainIsin}
        onChangeHandler={(e) => setMainIsin(e.target.value)}
      />
      <FormGroup
        label="Website"
        name="website"
        className="mb-3"
        value={websiteUrl}
        onChangeHandler={(e) => setWebsiteUrl(e.target.value)}
      />
      <div className="ps-3 py-3">
        <h4>Address</h4>
        <FormGroup
          label="Street"
          name="address.street"
          className="mb-3"
          value={addressStreet}
          onChangeHandler={(e) => setAddressStreet(e.target.value)}
        />
        <FormGroup
          label="Postal code"
          name="address.postal_code"
          className="mb-3"
          value={addressPostalCode}
          onChangeHandler={(e) => setAddressPostalCode(e.target.value)}
        />
        <FormGroup
          label="City"
          name="address.city"
          className="mb-3"
          value={addressCity}
          onChangeHandler={(e) => setAddressCity(e.target.value)}
        />
        <FormGroup
          label="Country code"
          name="address.country_code"
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
