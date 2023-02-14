const actions = {
    addShopCart({commit},{skuId,skuNum,skuProperty}) {
        commit('addShopCart',{skuId,skuNum,skuProperty})
    }
};
const mutations = {
    addShopCart(state,{skuId,skuNum,skuProperty}) {
        state.skuInfo.skuId = skuId;
        state.skuInfo.skuNum = skuNum;
        state.skuInfo.skuProperty.skuColor = skuProperty.skuColor;
        state.skuInfo.skuProperty.skuSize = skuProperty.skuSize;
    }
};
const state = {
    skuInfo: {
        skuId: "",
        skuNum: 0,
        skuProperty: {
            skuColor: "",
            skuSize:""
        }
    }
};
const getters = {};

export default {
    actions,
    mutations,
    state,
    getters
}