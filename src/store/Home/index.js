import {reqCategoryList} from "@/api";
import {reqBannerList} from "@/api";
import {reqFloorList} from "@/api";

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
    },
    async floorList(context) {
        let reslut = await reqFloorList();
        if (reslut.code === 200) {
            context.commit('FLOORLIST', reslut.data)
        }
    }
}

const mutations = {
    CATEGORYLIST(state, value) {
        state.categoryList = value
    },
    BANNERLIST(state, value) {
        state.bannerList = value
    },
    FLOORLIST(state, value) {
        state.floorList = value
    },
}

const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
}

const getters = {}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters,
}
