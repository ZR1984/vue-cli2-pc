// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import https from './common/https'
import store from './store/store'
import './assets/css/public.less'
import * as custom from './common/filter'

Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

Vue.prototype.$https = https

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
