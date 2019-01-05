import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

// api
import API from './api/api';
Vue.prototype.$api = new API('/webapi');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
