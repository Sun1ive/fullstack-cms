<template>
  <v-container>
    <v-layout
      v-for="article in articles"
      :key="article._id"
      justify-center
      align-center
    >
      <v-flex xs10 sm6>
        <v-card class="article__wrapper">
          <h1>Article title: {{ article.title }}</h1>
          <div class="flat__buttons">
            <v-btn :to="article._id" fab flat><v-icon>edit</v-icon></v-btn>
            <v-btn fab flat><v-icon>delete</v-icon></v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    articles: null,
  }),
  async created() {
    try {
      const articles = await this.$store.dispatch('fetchAllArticles');
      this.articles = articles;
    } catch (e) {
      throw new Error(e)
    }
  }
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
