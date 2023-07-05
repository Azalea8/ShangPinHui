// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter)

import Home from "@/pages/Home/index.vue";
import Login from "@/pages/Login/index.vue";
import Search from "@/pages/Search/index.vue";
import Register from "@/pages/Register/index.vue";

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: Home,
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                showFooter: false,
            }
        },
        {
            name: 'Search',
            path: '/search/:keyWord?',
            component: Search,
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                showFooter: false,
            }
        }
    ]
})
