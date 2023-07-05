import Vue from 'vue'
import App from './App.vue'
// 全局组件
import TypeNav from "@/components/TypeNav/index.vue";
Vue.component(TypeNav.name, TypeNav)

// 引入路由
import router from "@/router";
// 引入Vuex
import store from "@/store";
// 引入mockServe
import '@/mock/mockServe'
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
