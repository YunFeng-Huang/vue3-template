// @ts-ignore: Unreachable code error
import { createStore } from "vuex";
import { MUTATIONTYPES, SETTINGSTATETYPE } from "./setting_d";
const state: SETTINGSTATETYPE = {
    collapse: false, //菜单是否展开
};

const mutations = {
    [MUTATIONTYPES.TOGGLECOLLAPSE](state: SETTINGSTATETYPE, collapse: boolean) {
        state.collapse = collapse;
    },
};

const actions = {};
const getters = {
    collapse: (state: SETTINGSTATETYPE)=> state.collapse,
};

export default { state, getters, mutations, actions, namespaced: true };
