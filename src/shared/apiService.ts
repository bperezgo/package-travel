import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * It is a wrapper for all the configuration of the Api client
 * With this can be limited the application for the use cases
 * that are designed, this wil be usefull for tests
 */
export interface ConfigApi {
  baseURL: string;
}

export default class Api {
  private client: AxiosInstance;
  private baseURL: string;
  constructor(config: ConfigApi) {
    this.baseURL = config.baseURL;
    this.client = axios.create({
      baseURL: this.baseURL,
    });
  }
  public get<T>(apiEndpoint: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.get<any, T>(apiEndpoint, config);
  }
  public post() {}
}