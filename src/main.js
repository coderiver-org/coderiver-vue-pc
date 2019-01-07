import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/** 
 * @description ui
 */
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
// globle css
import './index.scss';

/**
 * @description api
 */
// import API from './api/api';
// Vue.prototype.$api = new API('/webapi');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
