import Vue from "vue";
import App from "./App.vue";
import {
  Switch,
  ColorPicker,
  Select,
  Option,
  Form,
  FormItem,
} from "element-ui";
[Switch, ColorPicker, Select, Option, Form, FormItem].forEach((item) => {
  Vue.use(item);
});
new Vue({
  el: "#app",
  render: (h) => h(App),
});
