import 'babel-polyfill';
import Vue from 'vue';
import router from './router.js'
import AppLayout from './components/AppLayout.vue';

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router,
})
