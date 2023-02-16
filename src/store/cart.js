const actions = {
    getShopCartInfo({commit}) {
        commit('GETSHOPCARTINFO');
    },
    changeSkuNum({commit},value) {
        commit('CHANGESKUNUM',value);
    }
};
const mutations = {
    GETSHOPCARTINFO(state) {
        let info = JSON.parse(localStorage.getItem("userShopCartListInfo"));
        state.shopCartInfo.skuName = info.skuName;
        state.shopCartInfo.shopCartList = info.userShopCartList;
    },
    CHANGESKUNUM(state,value) {
        let info = JSON.parse(localStorage.getItem("userShopCartListInfo"));
        state.shopCartInfo.shopCartList.forEach(element => {
            if (element.skuProperty.skuColor === value.sku.skuProperty.skuColor &&
                element.skuProperty.skuSize === value.sku.skuProperty.skuSize) {
                // element.sku.skuNum += value.disNum;
            }
        });
        info.userShopCartList = state.shopCartInfo.shopCartList;
        localStorage.setItem("userShopCartListInfo", JSON.stringify(info))
    }
};
const state = {
    shopCartInfo:{
        skuName:"",
        shopCartList: []
    }
};
const getters = {};

export default {
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}