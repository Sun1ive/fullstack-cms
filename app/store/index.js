import Vuex from 'vuex';
import articles from './modules/articles';

export default () =>
  new Vuex.Store({
    modules: {
      articles,
    },
  });
