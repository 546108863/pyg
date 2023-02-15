import tempToken from '@/utils/tempToken'
const actions = {
    addShopCart({commit},{skuId,skuNum,skuProperty}) {
        commit('addShopCart',{skuId,skuNum,skuProperty})
    }
};
const mutations = {
    addShopCart(state, { skuId, skuNum, skuProperty }) {
        let flag = false;
        if (localStorage.getItem("userShopCartListInfo")) {
            state.userShopCartListInfo = JSON.parse(localStorage.getItem("userShopCartListInfo"));
        }
        if (state.userShopCartListInfo.userShopCartList.length) {
            state.userShopCartListInfo.userShopCartList.forEach(element => {
                if (element.skuId === skuId &&
                    element.skuProperty.skuColor === skuProperty.skuColor &&
                    element.skuProperty.skuSize === skuProperty.skuSize) {
                    element.skuNum += skuNum;
                    flag = true;
                }
            });
        }
        if (!flag || !state.userShopCartListInfo.userShopCartList.length) {
            let list = {skuProperty:{}};
            state.userShopCartListInfo.userToken = tempToken();
            list.skuId = skuId;
            list.skuNum = skuNum;
            list.skuProperty.skuColor = skuProperty.skuColor;
            list.skuProperty.skuSize = skuProperty.skuSize;
            state.userShopCartListInfo.userShopCartList.push(list);
        }
        localStorage.setItem("userShopCartListInfo", JSON.stringify(state.userShopCartListInfo))
    }
};
const state = {
    userShopCartListInfo: {
        userToken:"",
        userShopCartList:[]
    }
};
const getters = {};

export default {
    actions,
    mutations,
    state,
    getters
}