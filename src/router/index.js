// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter)

import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Search from "@/pages/Search.vue";
import Register from "@/pages/Register.vue";

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/search',
            component: Search,
        },
        {
            path: '/register',
            component: Register,
        }
    ]
})
