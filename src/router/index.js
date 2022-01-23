import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// 导入刚才编写的组件
import Login from "../components/Login"
import AppIndex from "../components/home/AppIndex"
import Home from "../components/home/Home"
import LibraryIndex from "../components/library/LibraryIndex"

Vue.use(VueRouter)

// const routes = [
// {
//   path: '/',
//   name: 'Home',
//   component: Home
// },
// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// },
//   {
//     path: '/login',
//     name: 'Login',
//     component: Login
//   },
//   {
//     path: '/index',
//     name: 'AppIndex',
//     component: AppIndex
//   }
// ]

const router = new VueRouter({
  // 路由启用history模式
  mode: "history", // 路径中不用#
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          },
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: AppIndex,
      redirect: '/index',
      meta: {
        requireAuth: true
      }
    }
  ],
})

export default router
