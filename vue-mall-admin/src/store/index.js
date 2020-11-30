import Vue from 'vue';
import Vuex from 'vuex';
import { setUserCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 菜单栏收放状态  false为展开   true为收起
    collapsed: false,
    // 用户信息
    user: getUserCookie()
  },
  mutations: {
    toggleCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    exitLogin(state){
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: ''
      };
    }
  },
  actions: {
    toggleCollapsed({ commit }) {
      commit('toggleCollapsed');
    },
    setUserInfo({ commit }, userInfo){
      commit('setUserInfo', userInfo);
      setUserCookie(userInfo);
    },
    exitLogin({ commit }){
      commit('exitLogin');
      removeUserCookie();
    }
  },
  modules: {
  },
});
