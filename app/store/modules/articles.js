import API from '../../axios';

const state = {
  articles: null,
};
const mutations = {
  setArticles(state, payload) {
    state.articles = payload;
  },
};
const actions = {
  async fetchAllArticles({ commit }) {
    try {
      const { data } = await API().get('/v1/articles');
      commit('setArticles', data);
      return data;
    } catch (e) {
      // for now
      throw new Error(`${e} : error`);
    }
  },
};
const getters = {
  articles: state => (state.articles ? state.articles : null),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
