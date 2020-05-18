import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "../public/common.less"
Vue.config.productionTip = false
const Bus = new Vue()
new Vue({
  router,
  store,
  data:{Bus},
  render: h => h(App)
}).$mount('#app')
