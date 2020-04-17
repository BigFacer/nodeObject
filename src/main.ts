import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUi from 'element-ui'
Vue.use(ElementUi);
Vue.use(vuex)

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
