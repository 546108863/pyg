import tempToken from '@/utils/tempToken'
const actions = {
    addShopCart({commit},{skuId,skuNum,skuProperty}) {
        commit('addShopCart',{skuId,skuNum,skuProperty})
    }
};
const mutations = {
    addShopCart(state,{skuId,skuNum,skuProperty}) {
        let list = {};
        state.userShopCartListInfo.userToken = tempToken();
        list.skuId = skuId;
        list.skuNum = skuNum;
        list.skuProperty.skuColor = skuProperty.skuColor;
        list.skuProperty.skuSize = skuProperty.skuSize;
        state.userShopCartListInfo.userShopCartList.push(list);
    }
};
const state = {
    userShopCartListInfo: {
        userToken:"",
        userShopCartList:[
            {
                skuId: "",
                skuNum: 0,
                skuProperty: {
                    skuColor: "",
                    skuSize:""
                }
            }
        ]
    }
};
const getters = {};

export default {
    actions,
    mutations,
    state,
    getters
}