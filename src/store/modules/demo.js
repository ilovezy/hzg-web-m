const demo = {
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload = 1) {
      // debugger
      state.count += payload;
    },

    resetBadge (state) {
      state.count = 0;
    }
  }
};

export default demo;
