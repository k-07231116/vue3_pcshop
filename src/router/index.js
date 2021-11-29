import { createRouter, createWebHashHistory } from 'vue-router'

// 路由规则
const routes = []

// vue2.0创建路由 new VueRouter()
// vue3.0 createRouter
const router = createRouter({
  // 使用哈希路由
  history: createWebHashHistory(),
  routes
})

export default router
