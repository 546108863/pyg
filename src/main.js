import Vue from 'vue'
import App from './App.vue'
import store from '../src/store/index'
import VueRouter from 'vue-router'
import router from './router/index'
import './assets/styles/fonts/iconfont.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount('#app')