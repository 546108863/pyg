import {v4 as uuidv4} from 'uuid'

const actions = {
    login({ commit, state }, data) {
        state.userList.forEach(userInfo => {
            if ((userInfo.userName === data.userId || userInfo.phoneNumber === data.userId) && 
            userInfo.confirmPassword === data.userPassword) {
                let token = uuidv4();
                commit(LOGIN, {token,data});
                return true;
            } else {
                return false;
            }
        });
        
    }
};
const mutations = {
    LOGIN(state,data) {
        state.token = data.token;
        if (data.isAutoEntry) {
            localStorage.setItem('userToken', JSON.stringify(data.token));
        }
    }
};
const state = {
    token:""
};
const getters = {};

export default {
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}