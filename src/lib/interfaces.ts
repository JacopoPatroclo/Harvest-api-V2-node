export interface Options {
  ACCESS_TOKEN: string;
  ACCOUNT_ID: string;
  USER_AGENT: string;
}

export interface OptionsMiddleware {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  USER_AGENT: string;
}

export interface RequestOptions {
  method?: string;
  body?: string;
}

export interface Client {
  request: (resurce: string, option?: RequestOptions) => Promise<any>;
}
