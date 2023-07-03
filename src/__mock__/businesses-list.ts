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
      mainIsin: '7890',
      websiteUrl: 'www.tesco.com',
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
      mainIsin: '4321',
      websiteUrl: 'www.abc.com',
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
      mainIsin: '676745334543',
      websiteUrl: 'www.Delikatesy.com',
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
      mainIsin: '5666fdss221',
      websiteUrl: 'www.youtube.com',
    }),
  ],
};

export default AAA;
