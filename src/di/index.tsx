import { createContext } from 'react';
import { Response } from '../hooks/data/types';
import useGetBusiness from '../hooks/data/useGetBusiness';
import Business from '../models/business';

interface Container {
  useGetBusiness: () => [Response<Business[]>, boolean];
}

export const container = {
  useGetBusiness,
};

const ContainerContext = createContext<Container>(container);

export default ContainerContext;
