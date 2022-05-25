import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '@/plugins/http'
import '@/plugins/vuescroll'
import 'element-ui/lib/theme-chalk/display.css'
import '@/assets/css/global.styl'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')