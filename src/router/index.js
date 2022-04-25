import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path: '*', redirect: { name: 'LayoutHome' } },
  { path: '/', redirect: { name: 'LayoutHome' } },
  {
    path: '/LayoutPage',
    name: 'LayoutHome',
    component: () => import('../views/LayoutHome.vue'),
    redirect: '/LayoutPage/home',
    children: [
      {
        path: 'home',
        name: 'HomePage',
        component: () => import('../views/home/index.vue')
      },
      {
        path: 'mall',
        name: 'mallPage',
        component: () => import('../views/mall/index.vue')
      }
    ]
  }
  // {
  //   path: '/loginTest',
  //   name: 'loginTest',
  //   component: () => import('../views/loginTest.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
