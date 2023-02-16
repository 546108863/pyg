import tempToken from '@/utils/tempToken'
const actions = {
    addShopCart({commit},value) {
        commit('addShopCart',value)
    }
};
const mutations = {
    addShopCart(state,value) {
        let flag = false;
        if (localStorage.getItem("userShopCartListInfo")) {
            state.userShopCartListInfo = JSON.parse(localStorage.getItem("userShopCartListInfo"));
        }
        if (state.userShopCartListInfo.userShopCartList.length) {
            state.userShopCartListInfo.userShopCartList.forEach(element => {
                if (element.skuId === value.skuId &&
                    element.skuProperty.skuColor === value.skuProperty.skuColor &&
                    element.skuProperty.skuSize === value.skuProperty.skuSize) {
                    element.skuNum += value.skuNum;
                    // element.list.cartIsChecked = "checked";
                    flag = true;
                }
            });
        }
        if (!flag || !state.userShopCartListInfo.userShopCartList.length) {
            let list = {skuProperty:{}};
            state.userShopCartListInfo.userToken = tempToken();
            state.userShopCartListInfo.skuName = value.skuName;
            list.skuId = value.skuId;
            list.skuNum = value.skuNum;
            list.skuPrice = value.skuPrice;
            // list.cartIsChecked = "checked";
            list.skuProperty.skuColor = value.skuProperty.skuColor;
            list.skuProperty.skuSize = value.skuProperty.skuSize;
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
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}