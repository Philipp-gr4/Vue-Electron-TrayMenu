import Vue from "vue";
import TrayWindowEntry from "./TrayWindowEntry.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(TrayWindowEntry)
}).$mount("#app");
