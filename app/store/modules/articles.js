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
  async createArticle({ commit }, payload) {
    try {
      await API().post('/v1/articles', {
        image: payload.image,
        title: payload.title,
        articleBody: payload.articleBody,
        timestamp: payload.timestamp,
        author: payload.author,
      });
    } catch (e) {
      commit('setError', {
        errorState: true,
        errorMessage: e,
      });
      throw new Error(`Error has occured ${e}`);
    }
  },
  async fetchAllArticles({ commit }) {
    try {
      const { data } = await API().get('/v1/articles');
      commit('setArticles', data);
      return data;
    } catch (e) {
      commit('setError', {
        errorState: true,
        errorMessage: e,
      });
      throw new Error(`Error has occured ${e}`);
    }
  },
  async editArticle({ commit }, payload) {
    try {
      const { data } = await API().post('/v1/articles', {
        id: payload.id,
        image: payload.image,
        title: payload.title,
        articleBody: payload.articleBody,
      });
      console.log(data);
    } catch (e) {
      commit('setError', {
        errorState: true,
        errorMessage: e,
      });
      throw new Error(`Error has occured ${e}`);
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
