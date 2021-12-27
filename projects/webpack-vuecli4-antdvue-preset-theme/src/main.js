import Vue from "vue";
import App from "./App.vue";
import { message, notification } from "ant-design-vue";
Vue.config.productionTip = false;
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
