import Vuex from 'vuex';
import articles from './modules/articles';
import error from './modules/error';

export default () =>
  new Vuex.Store({
    modules: {
      articles,
      error,
    },
  });
