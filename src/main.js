import Vue from 'vue'
import App from './App.vue'
// 注册全局组件
import TypeNav from "@/components/TypeNav/index.vue";
import Carousel from "@/components/Carousel/index.vue";
import Pagination from "@/components/Pagination/index.vue";
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

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
    beforeCreate() {
        // 全局事件总线
        Vue.prototype.$bus = this;
    }
}).$mount('#app')
