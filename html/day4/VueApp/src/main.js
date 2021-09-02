// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import FastClick from "fastclick";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import "./common/stylus/index.stylus";
// import "../static/css/reset.css";

FastClick.attach(document.body);
Vue.prototype.$http = axios;
// 使用element-ui插件
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$msg = ElementUI.Message;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
