// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

let axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8443/api'
axios.defaults.withCredentials = true // 为了让前端能够带上 cookie，我们需要通过 axios 主动开启 withCredentials 功能
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

// 导航守卫进行拦截验证
router.beforeEach((to, from, next) => {
    if (store.state.username && to.path.startsWith('/admin')) {
        initAdminMenu(router, store)
    }
    // 已登录状态下访问 login 页面直接跳转到后台首页
    if (store.state.username && to.path.startsWith('/login')) {
        next({
            path: 'admin/dashboard'
        })
    }
    if (to.meta.requireAuth) {
        if (store.state.username) {
            axios.get('/authentication').then(resp => {
                if (resp) {
                    next()
                }
            })
        } else {
            next({
                path: '/login',
                query: {redirect: to.fullPath} // query 传参
            })
        }
    } else {
        next()
    }
})

const initAdminMenu = (router, store) => {
    if (store.state.adminMenus.length > 0) {
        return
    }
    axios.get('/menu').then(resp => {
        if (resp && resp.status === 200) {
            let fmtRoutes = formatRoutes(resp.data.result)
            router.addRoutes(fmtRoutes)
            store.commit('initAdminMenu', fmtRoutes)
        }
    })
}

const formatRoutes = (routes) => {
    let fmtRoutes = []
    routes.forEach(route => {
        if (route.children) {
            route.children = formatRoutes(route.children)
        }
        let fmtRoute = {
            path: route.path,
            name: route.name,
            nameZh: route.nameZh,
            iconCls: route.iconCls,
            children: route.children,
            meta: {
                requireAuth: true
            },
            component: () => import('./components/admin/' + route.component) // 异步组件按需加载
        }
        fmtRoutes.push(fmtRoute)
    })
    return fmtRoutes
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, // 应用store
    components: {App},
    template: '<App/>'
})
