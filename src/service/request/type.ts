import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface HttpInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface HttpRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HttpInterceptors<T>
}
