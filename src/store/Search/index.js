import {reqSearchInfo} from "@/api";

const actions = {
    async searchList(context, value={}) {
        let result = await reqSearchInfo(value)
        if (result.code === 200) {
            context.commit('SEARCHLIST', result.data)
        }
    }
}
const mutations = {
    SEARCHLIST(state, value) {
        state.searchList = value
    }
}
const state = {
    searchList: {},
}
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters,
}
