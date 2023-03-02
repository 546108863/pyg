const actions = {
    getShopCartInfo({commit}) {
        commit('GETSHOPCARTINFO');
    },
    changeSkuNum({commit}) {
        commit('LOCALSAVE');
    },
    deleteItem({ commit }, value) {
        commit('DELETEITEM', value);
    },
    changeChecked({ commit }) {
        commit('LOCALSAVE');
    },
    deleteAllChecked({ dispatch, state }) {
        let index = -1;
        let list = state.shopCartInfo.shopCartList;
        let arrayLength = list.length;
        for (let i = 0; i < arrayLength; i++) {
            index++;
            if (list[index].cartIsChecked) {
                dispatch('deleteItem', index);
                index--;
            }
        }
    },
    allChecked({ dispatch, state, commit },isAllChecked){
        state.shopCartInfo.shopCartList.forEach(property => {
                property.cartIsChecked = isAllChecked;
        });
        commit('CHANGEALLCHECKED',isAllChecked)
        dispatch('changeChecked');
    },
    getCartCount({commit}) {
        if (sessionStorage.getItem('userToken')) {
            let cartList = JSON.parse(localStorage.getItem('userShopCartListInfo'));
            let count = cartList.userShopCartList.length;
            commit('GETCARTCOUNT',count);
        }
    }
};
const mutations = {
    GETSHOPCARTINFO(state) {
        let info = JSON.parse(localStorage.getItem("userShopCartListInfo"));
        state.shopCartInfo.isAllChecked = info.isAllChecked;
        state.shopCartInfo.skuName = info.skuName;
        state.shopCartInfo.shopCartList = info.userShopCartList;
    },
    LOCALSAVE(state) {
        let info = JSON.parse(localStorage.getItem("userShopCartListInfo"));
        info.userShopCartList = state.shopCartInfo.shopCartList;
        localStorage.setItem("userShopCartListInfo", JSON.stringify(info));
    },
    DELETEITEM(state, value) {
        let info = JSON.parse(localStorage.getItem("userShopCartListInfo"));
        state.shopCartInfo.shopCartList.splice(value, 1);
        info.userShopCartList = state.shopCartInfo.shopCartList;
        localStorage.setItem("userShopCartListInfo", JSON.stringify(info));
    },
    GETCARTCOUNT(state,count){
        let skuCount = sessionStorage.getItem('cartSkuCount');
        if (skuCount) {
            state.shopCartInfo.skuCount =  skuCount;
        }else {
            sessionStorage.setItem('cartSkuCount',count);
            state.shopCartInfo.skuCount =  count;
        }
    },
    CHANGEALLCHECKED(state,isAllChecked) {
        state.shopCartInfo.isAllChecked = isAllChecked;
        let info = JSON.parse(localStorage.getItem("userShopCartListInfo"));
        info.isAllChecked = isAllChecked;
        localStorage.setItem("userShopCartListInfo", JSON.stringify(info));
    }
};
const state = {
    shopCartInfo:{
        skuCount:0,
        skuName:"",
        shopCartList: [],
        isAllChecked:false
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