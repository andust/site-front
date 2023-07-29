export type FetchResponse<T> = {
  data: T
  error: boolean
  message: string
};

export type FetchConfig = {
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH'
  body?: any
  headers?: Record<string, string>
};
