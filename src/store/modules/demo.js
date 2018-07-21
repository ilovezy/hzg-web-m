const demo = {
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload) {
      payload = _.isNumber(payload) ? payload : 1
      state.count += payload;
    },

    resetBadge (state) {
      state.count = 0;
    }
  }
};

export default demo;
