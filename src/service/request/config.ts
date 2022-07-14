export const timeout = 20000
import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义一个拦截器接口
export interface JUInterceptor {
  // 请去拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorError?: (err: any) => any
  // 响应拦截
  responseInterceptor?: (config: AxiosRequestConfig) => AxiosResponse
  responseInterceptorError?: (err: any) => any
}
