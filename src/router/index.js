import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
// import Home from '../pages/home/Home'
// import Detail from '../pages/detail/Detail'
// import Login from '../pages/login/Login'
// import Register from '../pages/register/Register'

Vue.use(Router)
// 组件懒加载
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/home/Home')
    },
    {
      path: '/detail/:blogId',
      name: 'Detail',
      component: () => import('../pages/detail/Detail')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/login/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../pages/register/Register')
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('../pages/my/My'),
      meta: { requiresAuth: true }
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('../pages/create/Create'),
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: () => import('../pages/user/User')
    },
    {
      path: '/user/:blogId',
      name: 'Edit',
      component: () => import('../pages/edit/Edit'),
      meta: { requiresAuth: true }
    }

  ]
})
router.beforeEach((to, from, next) => {
  // 如果跳转到的页面需要权限，就检查是否登录，没有登录就跳转到登录页面
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }// 把要跳转的地址作为参数传到下一步
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
