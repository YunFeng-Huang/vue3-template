import { RouteRecordRaw } from "vue-router";

const developer = () => import("@/views/developers/index.vue");
const developersRouter: Array<RouteRecordRaw> = [
    {
        path: "developer",
        name: "developer",
        component: developer,
        meta: {
            title: "开发者模式",
        },
    },
];
export default developersRouter;
