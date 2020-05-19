import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuex from 'vuex'
// import Qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUi from 'element-ui'
Vue.use(ElementUi);
Vue.use(vuex);
// import API from './components/API.js'
// Vue.use(API)
// Vue.use(axios);
Vue.config.productionTip = false;
// Vue.prototype.$qs = Qs
Vue.prototype.$http = axios;


//请求拦截 添加token
// axios.interceptors.request.use(
//     config => {
//         if(!config.url.endsWith('/login')&& !config.url.endsWith('/getencryDate')) {
//           // if(config.method === 'get') {
//           //     config.data = this.$qs.stringify(config.data);
//           // }else{
//           //     // config.baseURL = '/api/'
//           //     config.withCredentials = true //允许携带token，这个是解决跨域产生的相关问题
//           //     // config.timeout = 6000
//           //     // let token = sessionStorage.getItem('access_token')
//           //     // let csrf = store.getter.csrf
//           //     // if(token){
//               config.headers['Authorization']=sessionStorage.getItem('access_token')
//           //     // }
//           // }
//         }
//         return config;//添加这一行
//     }
// );
// axios.interceptors.response.use(
//     response => {
//       if(response.data.meta.status === 401) {
//         router.push('/')
//         sessionStorage.removeItem('access_token')
//       }
//       return response
//     }
// )



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


