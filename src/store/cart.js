const actions = {
    getShopCartList({commit}) {
        commit('getShopCartList');
    }
};
const mutations = {
    getShopCartList(){
        localStorage.getItem(userShopCartList).forEach(element => {
            
        });
    }
};
const state = {
    ShopCartList:{}
};
const getters = {};

export default {
    actions,
    mutations,
    state,
    getters
}