import Vue from 'vue'
import App from './App.vue'
// 注册全局组件
import TypeNav from "@/components/TypeNav/index.vue";
import Carousel from "@/components/Carousel/index.vue";
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

// 引入路由
import router from "@/router";
// 引入Vuex
import store from "@/store";
// 引入mockServe
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.min.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
