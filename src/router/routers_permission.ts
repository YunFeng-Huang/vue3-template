import router, { asyncRoutes } from "@/router";
import store  from "@/store";
import { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw, START_LOCATION } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { setSessionStorage } from "@/utils/storage";
import { mergeRoutersMeta } from "@/utils/routers";
import { MUTATIONTYPES } from "@/store/modules/permission/permission_d";
NProgress.configure({ showSpinner: false });
//不经过token校验的路由

const routesWhiteList = [ "login","404", "403"]
router.beforeEach(
     (
        to: RouteLocationNormalized,
        _from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) => {
        console.log('beforeEach',to)
       
        const hasToken = store.getters["permission/token"];
        const permissionList = store.getters["permission/permissionList"];
        const firstRoute = permissionList[0];
        NProgress.start();
         store.dispatch('permission/'+MUTATIONTYPES.SETROUTERS).then((value) => {
            // 判断是否已经登录
            if (hasToken) {
                if (to.path === "/login" || to.path === "/") {
                    next({ name: firstRoute });
                } else {
                    // 判断是否已经添加权限
                    if (router.hasRoute(to.name)) {
                        next();
                    } else {
                        const localRouter:{}= store.getters["permission/localRouter"];
                        for (const key in localRouter) {
                            if (Object.prototype.hasOwnProperty.call(localRouter, key)) {
                                const element = localRouter[key];
                                if(key == to.path){
                                    to.name = element;
                                }
                            }
                        }
                        if (to.name==undefined) {
                            next({ name: "404" });
                        } if (!permissionList.includes(to.name)) {
                            next({ name: "403" });
                        } else {
                            next({ ...to, replace: true });
                        }
                    }
                }
            } else {
                if (routesWhiteList.some((value, index, array) => {
                        return to.path.includes(value);
                    })
                ) {
                    next();
                } else {
                    next({ path: "/login", replace: true });
                }
            }
         });
      
    }
);
router.afterEach((to: RouteLocationNormalized) => {
    console.log('afterEach',to)
    store.commit("permission/" + MUTATIONTYPES.SETLOCALROUTER, to);
    const menuList: RouteRecordRaw[] = store.getters["permission/menuList"];
    // 获取菜单中的页面权限，并添加到路由meta中
    mergeRoutersMeta(menuList, to, "");
    to.meta && to.meta.title && (document.title = to.meta.title.toString());
    to.meta && to.meta.breadcrumb && store.commit('permission/' + MUTATIONTYPES.SETCRUBLIST, to.meta.breadcrumb);
    //持久化store
    setSessionStorage("store", JSON.stringify(store.state));
    NProgress.done();
});
