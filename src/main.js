import Vue from 'vue'
import App from './App.vue'
// 全局组件
import TypeNav from "@/pages/Home/TypeNav/index.vue";
Vue.component(TypeNav.name, TypeNav)

// 引入路由
import router from "@/router";

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
