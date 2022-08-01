import Vue from "vue";
import App from "./App.vue";
import {
  Switch,
  ColorPicker,
  Select,
  Option,
  Form,
  FormItem,
  Input,
} from "element-ui";
[Switch, ColorPicker, Select, Option, Form, FormItem, Input].forEach((item) => {
  Vue.use(item);
});
new Vue({
  el: "#app",
  render: (h) => h(App),
});
