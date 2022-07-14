import JURequest from './request'
import { timeout } from './request/config'
export default new JURequest({
  baseURL: process.env.VUE_APP_REQUEST_URL,
  timeout: timeout,
  interceptorS: {
    requestInterceptor: (res) => {
      console.log('实例请求拦截')
      return res
    },
    requestInterceptorError: (err) => {
      console.log('实例请求拦截ERROR')
      return err
    }
  }
})
