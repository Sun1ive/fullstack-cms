<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs10>
        <v-text-field
          v-model.trim.lazy="query"
          prepend-icon="star"
          label="Search input"
        />
      </v-flex>
    </v-layout>
    <v-layout
      v-for="article in filteredArticles"
      :key="article._id"
      justify-center
      align-center
    >
      <v-flex xs11 sm10 class="my-2">
        <v-card class="article__wrapper">
          <h1>Article title: {{ article.title }}</h1>
          <div>
            <div>Author: {{ article.author }}</div>
            <div>ID: {{ article._id }}</div>
          </div>
          <div class="flat__buttons">
            <v-btn
              :to="{ name: 'admin-article-id', params: { article } }"
              nuxt
              exact
              fab
              flat
              color="blue"
            ><v-icon>edit</v-icon></v-btn>
            <v-btn
              fab
              flat
              color="red"
            ><v-icon>delete</v-icon></v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import fetchArticles from '../../../utils/fetchArticles';

export default {
  async asyncData(ctx) {
    const articles = await fetchArticles(ctx);
    return { articles };
  },
  data: () => ({
    query: null,
  }),
  computed: {
    filteredArticles() {
      if (this.query) {
        return this.articles.filter(i => i.title.toLowerCase().includes(this.query.toLowerCase()));
      }
      return this.articles;
    },
  },
};
</script>

<style scoped>
.article__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;
}
h1 {
  text-transform: capitalize;
}
.flat__buttons {
  text-align: right;
}
</style>
