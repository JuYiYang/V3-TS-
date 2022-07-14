import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

import { JUInterceptor } from './config'
// 导入 loading
import { ElLoading } from 'element-plus'
// 导入 loading 类型
// import { LoadingOptionsResolved } from 'element-plus/lib/el-loading/src/loading.type'
// 设置接口继承axiosConfig 然后新添加一个拦截器数组
interface JURequestConfig extends AxiosRequestConfig {
  interceptorS?: JUInterceptor
  showLoading?: boolean
}

class JURequest {
  // axios
  instance: AxiosInstance
  loadingConfig: any //LoadingOptionsResolved
  showLoading = true
  constructor(config: JURequestConfig) {
    this.instance = axios.create(config)
    // axios.interceptors.request.use
    // 请求拦截
    this.instance.interceptors.request.use(
      config.interceptorS?.requestInterceptor
      // config.interceptorS?.requestInterceptorError
    )
    // 响应拦截
    this.instance.interceptors.response.use(
      config.interceptorS?.responseInterceptor,
      config.interceptorS?.responseInterceptorError
    )
    // 默认响请求/响应拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        console.log(err)
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        setTimeout(() => {
          this.loadingConfig?.close()
        }, 5000)
        return config
      },
      (err) => {
        setTimeout(() => {
          this.loadingConfig?.close()
        }, 5000)
        return err
      }
    )
  }
  request(config: JURequestConfig): void {
    // 精准到个例
    this.showLoading = config.showLoading ?? true
    // 调用方传递了这个吗？
    // 一般错误不拦截
    if (config.interceptorS?.requestInterceptor) {
      if (this.showLoading) {
        this.loadingConfig = ElLoading.service({
          lock: true,
          text: 'loading....',
          background: 'rgba(231, 234, 239,0.5)'
        })
      }
      config = config.interceptorS.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptorS?.responseInterceptor) {
        res = config.interceptorS.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default JURequest
