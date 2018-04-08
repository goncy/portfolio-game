import Vue from "vue";
import Notifications from "vue-notification";

import ExternalLink from "./components/ui/ExternalLink";

import App from "./App.vue";

import "font-awesome/css/font-awesome.css";
import "./registerServiceWorker";

// Middlewares
Vue.use(Notifications);

// Components
Vue.component("external-link", ExternalLink);

// Configurations
Vue.config.productionTip = false;

// Instance
window.app = new Vue({
  render: h => h(App),
}).$mount("#app");
