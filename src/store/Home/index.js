import {reqCategoryList} from "@/api";

const actions = {
    async categoryList(context, value) {
        let result =  await reqCategoryList()
        if(result.code === 200) {
            context.commit('CATEGORYLIST', result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state, value) {
        state.categoryList = value
    }
}
const state = {
    categoryList: [],
}
const getters = {}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters,
}
