import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import JURequest from './service'

const api = JURequest

api.request({
  url: 'getArticles',
  method: 'get',
  // showLoading: false,
  interceptorS: {
    requestInterceptor: (config) => {
      console.log('单独')
      return config
    }
  }
})

const app = createApp(App)

app.use(ElementPlus)
// 挂载vuex
app.use(store)
// 挂载router
app.use(router)

app.config.globalProperties.$request = JURequest

app.mount('#app')
