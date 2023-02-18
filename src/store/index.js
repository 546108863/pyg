// 该文件用于创建Vuex中最核心的store
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import shopDetail from './shopDetail'
import user from './user'
import register from './register'
import cart from './cart'

export default new Vuex.Store({
    modules:{
        shopDetail,
        user,
        register,
        cart
    }
})