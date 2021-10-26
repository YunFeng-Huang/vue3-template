
import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./router/routers_permission";
import { getSessionStorage, removeSessionStorage } from "./utils/storage";
import { install } from "./plugins";

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
install(app).use(store).use(router).mount("#app");


// app.config.errorHandler = function (err, vm, info) {
//     console.log(err, vm, info);
//     // handle error
//     // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
//     // 只在 2.2.0+ 可用
// }
