// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import lodash from 'lodash'
import commonHttp from './assets/js/commonHttp'
import VueBus from 'vue-bus'
import 'iview/dist/styles/iview.css';


Vue.config.productionTip = false

Vue.use(iView)

Vue.use(VueBus)

Object.defineProperty(Vue.prototype, '_', { value: lodash })

Object.defineProperty(Vue.prototype, '$commonHttp', { value: commonHttp })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>'
})