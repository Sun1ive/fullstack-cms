import Vuex from 'vuex';

export default () =>
  new Vuex.Store({
    state: {
      counter: 90,
    },
    mutations: {
      increment(state, payload) {
        state.counter += payload;
      },
    },
  });
