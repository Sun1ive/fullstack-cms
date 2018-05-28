const state = {
  errorState: null,
  errorMessage: null,
};
const mutations = {
  setError(state, payload) {
    state.errorState = payload.errorState;
    state.errorMessage = payload.errorMessage;
  },
};
const getters = {
  isError: state => state.errorState,
};

export default { state, mutations, getters };
