import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //
    count: 0
  },

  mutations: {
    //
    increment (state, payload=1) {
      // debugger
      state.count += payload
    },

    resetBadge(state){
      state.count = 0
    }
  },
  actions: {},
  modules: {
    app,
    user
  }
});

export default store;
