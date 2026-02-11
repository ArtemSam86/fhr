import { Axios, type AxiosRequestConfig, type AxiosResponse } from 'axios';

type RequestDataType = Record<string, any>;

export class ApiService<D> extends Axios {
  private config: AxiosRequestConfig<D> = {};

  constructor(config?: AxiosRequestConfig<D>) {
    super();
    Object.assign(this.config, config);
  }

  get<T = any, R = AxiosResponse<T>, D = RequestDataType>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    const cfg = {
      ...this.config,
      ...config
    };
    try {
      return super.get(url, cfg);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default new ApiService<RequestDataType>({
  baseURL: 'http://localhost:5173',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
