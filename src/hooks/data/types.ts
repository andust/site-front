export type Response<T> = {
  data: T;
  error: string;
  message: string;
};

export type FetchConfig = {
  method?: 'GET' | 'POST' | 'DELETE',
  body?: string
};
