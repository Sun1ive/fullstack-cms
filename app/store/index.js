import Vuex from 'vuex';

const createStore = () =>
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

export default createStore;
