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
  async fetchArticles({ commit }) {
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
  async editArticle({ commit, dispatch }, payload) {
    try {
      await API().patch('/v1/articles', {
        id: payload.id,
        image: payload.image,
        title: payload.title,
        articleBody: payload.articleBody,
        author: payload.author,
      });
      await dispatch('fetchArticles');
    } catch (e) {
      commit('setError', {
        errorState: true,
        errorMessage: e,
      });
      throw new Error(`Error has occured ${e}`);
    }
  },
  async deleteArticle({ commit }, payload) {
    try {
      await API().delete('/v1/articles', {
        params: {
          id: payload.id,
        },
      });
    } catch (e) {
      commit('setError', {
        errorState: true,
        errorMessage: e.response.data,
      });
      throw new Error(`Error has occured ${e.response.data}`);
    }
  },
  async incrementViews({ commit }, payload) {
    try {
      await API().post('/v1/articles/view', {
        id: payload.id,
      });
    } catch (e) {
      commit('setError', {
        errorState: true,
        errorMessage: e.response.data,
      });
      throw new Error(`Error has occured ${e.response.data}`);
    }
  },
};
const getters = {
  articles: state => state.articles,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
