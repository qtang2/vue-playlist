// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

// register your component globally
// import Ninjas from './Ninjas'
// Vue.component('ninjas',Ninjas)
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false

export const bus = new Vue();

const router = new VueRouter({
  routes: Routes,
  mode:'history'
})

//Filters globally
// Vue.filter('to-uppercase',function(value){
//   //value is the data we used the filter on
//   return value.toUpperCase()
//
// })

Vue.filter('snippet',function(value){
  return value.slice(0,100) + "..."
})

//Custom directives globally
// Vue.directive('rainbow',{
//   //fire  when the directive is bound to the element
//   bind(el,binding,vnode){
//     //el: element itselt/ information abt the connection if we pass in a value/virtual node in dom
//     el.style.color = "#"+ Math.random().toString().slice(2,8)
//
//   }
// })

Vue.directive('theme',{
  bind(el,binding, vnode){
    if(binding.value === 'wide'){
      el.style.maxWidth = '1200px'
    }
    else if(binding.value === 'narrow'){
      el.style.maxWidth = '560px'
    }

    if(binding.arg ==='column'){
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
