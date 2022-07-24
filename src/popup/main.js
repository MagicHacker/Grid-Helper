import Vue from "vue";
import App from "./App.vue";
import { Switch, ColorPicker } from "element-ui";
[Switch, ColorPicker].forEach((item) => {
  Vue.use(item);
});
new Vue({
  el: "#app",
  render: (h) => h(App),
});
