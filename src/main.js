import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// ant组件，可配置按需加载
import {
  Button,
  Row,
  Col,
  Menu,
  List,
  Layout,
  Card,
  Avatar,
  Tag,
  Pagination
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// 导入全局css
import "./styles/common.css";
import VueResource from "vue-resource";

Vue.config.productionTip = false;
// 注册ant组件
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(List);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Card);
Vue.use(Avatar);
Vue.use(Tag);
Vue.use(Pagination);

// 使用VueResource插件
Vue.use(VueResource);

// 全局配置数据接口的根域名
Vue.http.options.root = "https://cnodejs.org/api/v1/";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
