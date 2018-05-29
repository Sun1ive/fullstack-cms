<template>
  <v-container v-if="isArticles">
    <v-layout
      v-for="article in articles"
      :key="article._id"
      class="my-3"
      justify-center
      align-center
      wrap
    >
      <v-flex xs11>
        <v-card class="article">
          <div class="article__image__wrapper">
            <v-card-media
              :src="article.image"
              height="300"
              class="article__image"
              @click="$router.push({ name: 'articles-id', params: { id: article._id, article } })"
            />
          </div>
          <v-card-text>
            <h1>{{ article.title }}</h1>
          </v-card-text>
          <v-card-text>
            <p>{{ article.articleBody }}</p>
            <div class="article__publication">
              <span>Author: {{ article.author }}</span>
              <span>Date: {{ article.timestamp }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else>
    <v-layout justify-center>
      <v-flex xs10 sm6 class="text-xs-center">
        <v-alert :value="true" type="warning">
          <h1>There is no articles yet</h1>
          <v-btn
            to="/"
            nuxt
            exact
            flat
            dark
            color="blue"
          >Home</v-btn>
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  async asyncData({ store }) {
    // maybe need to check store first, but on the other hand there might be new articles;
    if (store.getters.articles) {
      return { articles: store.getters.articles };
    }
    const articles = await store.dispatch('fetchArticles');
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
.article__publication span {
  display: block;
  font-weight: bold;
  font-style: italic;
  text-align: right;
}
.article__image__wrapper {
  overflow: hidden;
}

.article__image {
  transition: 0.3s;
}

.article__image:hover {
  cursor: pointer;
  transform: scale(1.01);
}
</style>
