import Vue from 'vue'
import App from './App.vue'
import store from '../src/store/index'
import VueRouter from 'vue-router'
import router from './router/index'

Vue.use(VueRouter)
Vue.config.productionTip = false

const vm = new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount('#app')