import Vue from 'vue'
import VueRouter from 'vue-router'

// 布局
import Layout from '../views/layout/Layout'
// 首页
import Dashboard from '../views/dashboard/index'
// 测试页面
import Test from '../views/text/index'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: '首页',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: Dashboard
    }]
  },
  {
    path: '/text',
    component: Layout,
    children: [
      {
        path: 'index',
        component: Test,
        name: '测试'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
