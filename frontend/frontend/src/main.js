import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ResizeTextarea from 'resize-textarea-vue3'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 导入 Element Plus 的图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'material-design-icons/iconfont/material-icons.css';


const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

// 注册 Element Plus 的图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
 }

app.use(ElementPlus);
app.use(router);
app.use(ResizeTextarea)
app.mount("#app");
// createApp(App).use(router).mount("#app");

