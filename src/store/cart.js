const actions = {
    getShopCartList({commit}) {
        commit('getShopCartList');
    }
};
const mutations = {
    getShopCartList() {
        state.shopCartList = JSON.parse(localStorage.getItem("userShopCartListInfo")).userShopCartList;
    }
};
const state = {
    shopCartList: []
};
const getters = {};

export default {
    actions,
    mutations,
    state,
    getters
}