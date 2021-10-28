// @ts-ignore: Unreachable code error
import router, { asyncRoutes } from "@/router";
import { getRouterName } from "@/utils/routers";
import { SETTINGSTATETYPE, MUTATIONTYPES, PARAMS } from "./permission_d";
import axios from "@/api";
// @ts-ignore: Unreachable code error
import { ElMessage } from "element-plus";
import { setSessionStorage } from "@/utils/storage";
import { RouteLocationNormalized } from "vue-router";

const state: SETTINGSTATETYPE = {
  menuList: [], //菜单权限 展示菜单 数据后端返回
  token: null, // login  登录 退出设置 null
  crumbList: [], //面包屑 根据菜单显示
  deepActive: "", //最后点击的菜单层级
  permissionList: [], //权限数组 ，目前只用于重定向,403
  localRouter: {}, //本地路由表 // 手动404 解决刷新404问题
  merchantUserModel: null, // 用户信息
};

const mutations = {
  [MUTATIONTYPES.SETVALUE](state: SETTINGSTATETYPE, params: PARAMS) {
    state[params.key] = params.value;
  },
  [MUTATIONTYPES.SETLOCALROUTER](state: SETTINGSTATETYPE, to: RouteLocationNormalized) {
    state.localRouter[to.path]=to.name;
  },
  [MUTATIONTYPES.SETROUTERS](state: SETTINGSTATETYPE, menuList) {
    let permissionList: string[] = [];
    getRouterName(menuList, permissionList, "1");
    permissionList = [...new Set(permissionList)];
    state.menuList = menuList;
    state.permissionList = permissionList.filter(Boolean);
    // 持久化store
    setSessionStorage("store", JSON.stringify(state));
  },
  [MUTATIONTYPES.SETCRUBLIST](state: SETTINGSTATETYPE, breadcrumb: string) {
    const crumbList = breadcrumb.toString().split(/\//);
    state.crumbList = crumbList;
  },
  [MUTATIONTYPES.LOGIN](state: SETTINGSTATETYPE, token: string) {
    state.token = token;
    // let localRouterName: string[] = [];
    // getRouterName(asyncRoutes, localRouterName, null);
   
    console.log(state,'MUTATIONTYPES.LOGIN')
    console.log(router.getRoutes(),'router')
    ElMessage.closeAll();
    router.push("/");
  },
  [MUTATIONTYPES.LOGOUT](state: SETTINGSTATETYPE) {
    state.token = null;
    state.menuList = [];
    sessionStorage.clear();
    router.replace("/login");
    ElMessage.closeAll();
    ElMessage({
      type: "success",
      message: "退出成功"
    });
    setTimeout(() => {
      sessionStorage.clear();
    }, 2000)
  },
};

const actions = {
  async [MUTATIONTYPES.SETROUTERS]({ commit, state, dispatch }: any) {
    asyncRoutes.forEach((item) => {
      if (state.permissionList.includes(item.name)) {
        router.addRoute("home", item);
        router.options.routes[0].children.push(item);
      }
    });
    commit(MUTATIONTYPES.SETROUTERS, state.menuList);
  
  },
  async [MUTATIONTYPES.LOGIN]({ commit, dispatch }: any, permission) {
    commit(MUTATIONTYPES.SETROUTERS, permission);
    await dispatch(MUTATIONTYPES.SETROUTERS);
     commit(MUTATIONTYPES.LOGIN, "token");
  },
  async [MUTATIONTYPES.LOGOUT]({ commit }: any) {
    // await axios.Login.logout({});
    commit(MUTATIONTYPES.LOGOUT);
  },
};

const getters = {
  menuList: (state: SETTINGSTATETYPE) => state.menuList,
  token: (state: SETTINGSTATETYPE) => state.token,
  crumbList: (state: SETTINGSTATETYPE) => state.crumbList,
  deepActive: (state: SETTINGSTATETYPE) => state.deepActive,
  permissionList: (state: SETTINGSTATETYPE) => state.permissionList,
  localRouter: (state: SETTINGSTATETYPE) => state.localRouter,
  merchantUserModel: (state: SETTINGSTATETYPE) => state.merchantUserModel,
};

export default { state, getters, mutations, actions, namespaced: true };
