const demo = {
  state: {
    count: 0
  },
  getters:{
    doubleCount: state => {
      return state.count * 2
    }
  },
  mutations: {
    increment (state, payload) {
      payload = _.isNumber(payload) ? payload : 1
      state.count += payload;
    },

    resetBadge (state) {
      state.count = 0;
    }
  },

  actions: {
    resetBadge ({commit}) {
      commit('resetBadge')
    }
  }
};

export default demo;
