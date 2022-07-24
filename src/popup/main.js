import Vue from "vue";
import App from "./App.vue";
import { Switch } from "element-ui";
[Switch].forEach((item) => {
  Vue.use(item);
});
new Vue({
  el: "#app",
  render: (h) => h(App),
});
