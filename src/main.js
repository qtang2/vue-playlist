// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

// register your component globally
// import Ninjas from './Ninjas'
// Vue.component('ninjas',Ninjas)
Vue.use(VueResource);
Vue.config.productionTip = false

export const bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
