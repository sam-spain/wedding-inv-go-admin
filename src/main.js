import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(router);

const baseURL = 'http://localhost:8081';
if (typeof baseURL !== 'undefined') {
  Vue.axios.defaults.baseURL = baseURL;
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
