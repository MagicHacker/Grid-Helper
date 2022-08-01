import Vue from "vue";
import App from "./App.vue";
import {
  Switch,
  Select,
  Option,
  Form,
  FormItem,
  Input,
  Button,
  ColorPicker,
} from "element-ui";
[Switch, Select, Option, Form, FormItem, Input, Button, ColorPicker].forEach(
  (item) => {
    Vue.use(item);
  }
);
new Vue({
  el: "#app",
  render: (h) => h(App),
});
