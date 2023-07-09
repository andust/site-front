import { createContext } from 'react';
import { FetchConfig, FetchResponse } from '../fetch/types';
import fetchWrapper from '../fetch';
import useGetBusiness, {
  UseGetBusinessResponse,
} from '../hooks/data/useGetBusiness';
import useGetBusinessById, {
  UseuseGetBusinessByIdResponse,
} from '../hooks/data/useGetBusinessById';

interface Container {
  fetchWrapper: <T>(
    url: string,
    config: FetchConfig
  ) => Promise<FetchResponse<T>>;
  useGetBusiness: () => UseGetBusinessResponse;
  useGetBusinessById: (id: string) => UseuseGetBusinessByIdResponse;
}

export const container = {
  fetchWrapper,
  useGetBusiness,
  useGetBusinessById,
};

const ContainerContext = createContext<Container>(container);

export default ContainerContext;
