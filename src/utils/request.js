// 创建一个新的axios实例
// 请求拦截器，如果有token进行头部携带
// 响应拦截器：1.剥离无用数据 2.处理token失效
// 导出一个函数，调用当前的axios实例发请求，返回值promise
import axios from 'axios'
import store from '@/store'
import router from '@/router'
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5 * 1000
})
// 请求拦截器
instance.interceptors.request.use((config) => {
  const { profile } = store.state.user
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => res.data, err => {
  // 401
  if (err.response && err.response.status === 401) {
    // 1.清空本地用户信息
    store.commit('user/setUser', {})
    // 2.跳转登陆界面
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
    // 3.跳转需要传参当前路由地址，登陆成功后再跳回来
  }
  return Promise.reject(err)
})

export default (url, method, submit) => {
  return instance({
    url,
    method,
    [method === 'get' ? 'params' : 'data']: submit
  })
}
