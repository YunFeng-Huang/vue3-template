
import { createApp, h, onMounted, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "/@/api";
import store, { STOREMUTATIONTYPES } from "./store";
import "./router/routers_permission";
import { getSessionStorage, removeSessionStorage } from "./utils/storage";

import ElementPlus, { ElMessage } from "element-plus";
import 'element-plus/dist/index.css';
import './assets/font/iconfont.scss'
// import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

const app = createApp({
    setup: () => {
        // store 持久化数据获取
        if (sessionStorage.getItem("store")) {
            store.replaceState(
                Object.assign({}, store.state, JSON.parse(getSessionStorage("store")))
            );
            removeSessionStorage("store");
        }
    },
    render: () => h(App),
});
console.log(ElementPlus,'ElementPlus');
app.use(store).use(router).use(ElementPlus).mount("#app");
console.log(app,'app');
app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$api = axios;

// app.config.errorHandler = function (err, vm, info) {
//     console.log(err, vm, info);
//     // handle error
//     // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
//     // 只在 2.2.0+ 可用
// }
