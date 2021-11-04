import { RouteRecordRaw } from "vue-router";

const banner = () => import("@/views/market/banner/index.vue");

const marketRouter: Array<RouteRecordRaw> = [
    {
        path: "banner",
        name: "market_banner",
        component: banner,
        meta: {
            title: "首页banner",
        },
    },
];
export default marketRouter;
