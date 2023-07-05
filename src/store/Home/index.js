import {reqCategoryList} from "@/api";
import {reqBannerList} from "@/api";

const actions = {
    async categoryList(context) {
        let result =  await reqCategoryList()
        if(result.code === 200) {
            context.commit('CATEGORYLIST', result.data)
        }
    },
    async bannerList(context) {
        let result = await reqBannerList()
        if (result.code === 200) {
            context.commit('BANNERLIST', result.data)
        }
    }
}

const mutations = {
    CATEGORYLIST(state, value) {
        state.categoryList = value
    },
    BANNERLIST(state, value) {
        state.bannerList = value
    }
}

const state = {
    categoryList: [],
    bannerList: [],
}

const getters = {}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters,
}
