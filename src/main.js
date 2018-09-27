// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'reset-css'
import './assets/css/base.css'
import store from './store'
import axios from 'axios'
<<<<<<< HEAD
Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
=======
import fun from './assets/js/function.js'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.fun = fun
/* eslint-disable no-new */

>>>>>>> ...
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
