import { createContext } from 'react';
import useGetBusiness, {
  UseGetBusinessResponse,
} from '../hooks/data/useGetBusiness';

interface Container {
  useGetBusiness: () => UseGetBusinessResponse;
}

export const container = {
  useGetBusiness,
};

const ContainerContext = createContext<Container>(container);

export default ContainerContext;
