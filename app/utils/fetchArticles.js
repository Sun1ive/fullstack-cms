export default async ctx => {
  try {
    if (ctx.store.state.articles.articles) {
      return ctx.store.state.articles.articles;
    }
    const data = await ctx.store.dispatch('fetchAllArticles');
    return data;
  } catch (e) {
    ctx.store.commit('setError', {
      errorState: true,
      errorMessage: e,
    });
    throw new Error(`Error has occured ${e}`);
  }
};
