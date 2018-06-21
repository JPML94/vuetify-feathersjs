import '@babel/polyfill';
import Vue from 'vue';
import VueDraggable from 'vuedraggable';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueDraggable);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
