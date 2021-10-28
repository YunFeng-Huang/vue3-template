import { RouteRecordRaw } from "vue-router";

const order = () => import("@/views/order/index.vue");
const order1 = () => import("@/views/home/index.vue");
const order2 = () => import("@/views/home/index2.vue");
const order3 = () => import("@/views/home/index3.vue");
const order4 = () => import("@/views/home/index4.vue");
const order5 = () => import("@/views/home/index5.vue");
const OrderRouter: Array<RouteRecordRaw> = [
    {
        path: "order",
        name: "order",
        component: order,
        meta: {
            title: "订单管理",
        },
    },
    {
        path: "order1",
        name: "order1",
        component: order1,
        meta: {
            title: "订单管理1",
        },
    },
    {
        path: "order2",
        name: "order2",
        component: order2,
        meta: {
            title: "订单管理3",
        },
    },
    {
        path: "order3",
        name: "order3",
        component: order3,
        meta: {
            title: "订单管理3",
        },
    },
    {
        path: "order4",
        name: "order4",
        component: order4,
        meta: {
            title: "订单管理4",
        },
    },
    {
        path: "order5",
        name: "order5",
        component: order5,
        meta: {
            title: "订单管理5",
        },
    },
];
export default OrderRouter;
