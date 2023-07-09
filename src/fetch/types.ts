export type FetchResponse<T> = {
  data: T;
  error: string;
  message: string;
};

export type FetchConfig = {
  method?: 'GET' | 'POST' | 'DELETE',
  body?: Record<string, any>
};
