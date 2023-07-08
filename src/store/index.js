import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

import home from "@/store/Home";
import login from "@/store/Login";
import search from "@/store/Search"
export default new Vuex.Store({
    modules: {
        home,
        login,
        search,
    }
})
