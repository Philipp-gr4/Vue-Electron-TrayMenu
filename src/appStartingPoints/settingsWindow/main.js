import Vue from "vue";
import SettingsWindowEntry from "./SettingsWindowEntry.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(SettingsWindowEntry)
}).$mount("#app");
