<template>
  <v-container v-if="isArticles">
    <v-layout
      v-for="article in articles"
      :key="article._id"
      class="my-2"
    >
      <v-flex>
        <v-card>
          <v-card-media
            :src="article.image"
            height="300"
            @click="$router.push({ name: 'articles-id', params: { id: article._id, article } })"
          />
          <v-card-title class="article__title">
            <h1>{{ article.title }}</h1>
          </v-card-title>
          <v-card-text class="article__body">
            <p>{{ article.articleBody }}</p>
            <span class="article__breadcrumbs">Publication date: {{ article.timestamp }}</span>
            <span class="article__breadcrumbs">Author: {{ article.author }}</span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else>
    <v-layout justify-center align-center>
      <v-flex xs6 class="text-xs-center">
        <v-alert :value="true" type="warning">
          <h1>There is no articles yet</h1>
          <v-btn to="/" flat dark>Home page</v-btn>
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import fetchArticles from '../../utils/fetchArticles';

export default {
  async asyncData(ctx) {
    const articles = await fetchArticles(ctx);
    return { articles };
  },
  computed: {
    isArticles() {
      return this.articles.length > 0;
    },
  },
};
</script>

<style scoped>
.article__title {
  text-transform: capitalize;
}

.article__breadcrumbs {
  font-style: italic;
  font-weight: bold;
  display: block;
  text-align: right;
}
</style>
