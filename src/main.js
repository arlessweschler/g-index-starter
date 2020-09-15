import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EventBus from "./EventBus";
import vuetify from './plugins/vuetify';
import "./styles/register.scss";

Vue.config.productionTip = false
Vue.prototype.$bus = EventBus;
Vue.prototype.$state = {
  navdraw: {
    key: 0,
    value: false,
  },
};

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
