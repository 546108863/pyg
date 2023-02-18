const actions = {
    getCode({commit}) {
        commit('GETCODE');
    },
    saveUserInfo({commit},value) {
        commit('SAVEUSERINFO',value);
    }
};
const mutations = {
    GETCODE(state){
        state.codeArray = [
        "884521",
        "715241",
        "156871",
        "425112",
        "211355",
        "321315",
        "554565",
        "465125",
        "954121",
        "615970"
    ]
    let index = Math.floor(Math.random()*10);
    state.code = state.codeArray[index];
    },
    SAVEUSERINFO(state,value) {
        state.userList.push(value);
        localStorage.setItem("userList",JSON.stringify([state.userList]));
    }
};
const state = {
    codeArray:[],
    userList:[],
    code:""
};
const getters = {};

export default {
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}