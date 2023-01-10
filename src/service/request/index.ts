import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import type { HttpRequestConfig } from "./type"

class HttpRequest {
  instance: AxiosInstance
  constructor(config: HttpRequestConfig) {
    this.instance = axios.create(config)
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      (error: any) => {
        return error
      }
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (error: any) => {
        return error
      }
    )

    // 请求拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  request<T = any>(config: HttpRequestConfig<T>) {
    // 请求拦截
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 响应拦截
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HttpRequestConfig<T>) {
    return this.request({ ...config, method: "GET" })
  }

  post<T = any>(config: HttpRequestConfig<T>) {
    return this.request({ ...config, method: "POST" })
  }

  delete<T = any>(config: HttpRequestConfig<T>) {
    return this.request({ ...config, method: "DELETE" })
  }

  patch<T = any>(config: HttpRequestConfig<T>) {
    return this.request({ ...config, method: "PATCH" })
  }
}

export default HttpRequest
