import Business from '../models/business';
import Address from '../models/address';

const AAA = {
  error: '',
  message: '',
  data: [
    new Business({
      id: '6480fd2dfb5224aa9e67efa6',
      name: 'Tesco',
      address: new Address({
        street: 'Tesco road 1',
        postal_code: 'BA2-TR20',
        city: 'Yeovile',
        country_code: 'UK',
      }),
      lei: '123456',
      main_isin: '7890',
      website_url: 'www.tesco.com',
      logo: '',
    }),
    new Business({
      id: '648423ffe2908ed5cb020071',
      name: 'ABC',
      address: new Address({
        street: 'Abc road 1',
        postal_code: 'BA4-WR20',
        city: 'Yeovile',
        country_code: 'UK',
      }),
      lei: '56789',
      main_isin: '4321',
      website_url: 'www.abc.com',
      logo: '',
    }),
    new Business({
      id: '648425276420727108990431',
      name: 'Delikatesy centrum',
      address: new Address({
        street: 'Delikatesy road 1',
        postal_code: 'AA4-WR20',
        city: 'Yeovile',
        country_code: 'UK',
      }),
      lei: '344522',
      main_isin: '676745334543',
      website_url: 'www.Delikatesy.com',
      logo: '',
    }),
    new Business({
      id: '6484f67306002386389ef1de',
      name: 'Youtube',
      address: new Address({
        street: 'Youtube road 1',
        postal_code: 'BB4-WR20',
        city: 'Nisko',
        country_code: 'PL',
      }),
      lei: 'aw233',
      main_isin: '5666fdss221',
      website_url: 'www.youtube.com',
      logo: '',
    }),
  ],
};

export default AAA;
