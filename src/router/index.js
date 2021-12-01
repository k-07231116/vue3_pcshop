import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
// 路由规则
const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]

// vue2.0创建路由 new VueRouter()
// vue3.0 createRouter
const router = createRouter({
  // 使用哈希路由
  history: createWebHashHistory(),
  routes
})

export default router
