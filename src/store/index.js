import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

import home from "@/store/Home";
import login from "@/store/Login";
export default new Vuex.Store({
    modules: {
        home,
        login,
    }
})
