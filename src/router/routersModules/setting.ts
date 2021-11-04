import {
    RouteRecordRaw
} from "vue-router";

const userManage = () => import("@/views/setting/userManage/index.vue");
const roleManage = () => import("@/views/setting/roleManage/index.vue");
const resourcesManage = () => import("@/views/setting/resourcesManage/index.vue");


const userMangageRouter: Array<RouteRecordRaw> = [
    {
        path: "userManage",
        name: "setting_userManage",
        component: userManage,
        meta: {
            title: "用户管理",
        }
    },
    {
        path: "roleManage",
        name: "setting_roleManage",
        component: roleManage,
        meta: {
            title: "角色管理",
        }
    },
    {
        path: "resourcesManage",
        name: "setting_resourcesManage",
        component: resourcesManage,
        meta: {
            title: "资源管理",
        }
    }
];
export default userMangageRouter;