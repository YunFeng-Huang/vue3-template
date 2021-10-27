import Vue from "vue";
import Vuex, { createLogger, Store } from "vuex";
import permission from "./modules/permission/permission";
import setting from "./modules/setting/setting";

const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

const store = new Vuex.Store({
  plugins,
  modules: {
    permission,
    setting,
  },
});
export default store;
