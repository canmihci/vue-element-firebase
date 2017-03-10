// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'vue-awesome/icons'
import 'element-ui/lib/theme-default/index.css'
import store from './store'
import router from './router'
import Icon from 'vue-awesome/components/Icon.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
