import Vue from "vue";
import Notifications from "vue-notification";

import router from "./router";
import store from "./store";

import App from "./App.vue";

import "./registerServiceWorker";
import "font-awesome/css/font-awesome.css";

Vue.config.productionTip = false;
Vue.use(Notifications);

window.app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
