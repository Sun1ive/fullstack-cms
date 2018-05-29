<template>
  <!-- <h1>Refactor this</h1> -->
  <v-container>
    <v-layout justify-center>
      <v-flex xs10 class="text-xs-center">
        <v-btn
          fab
          color="primary"
          dark
          to="/articles"
        ><v-icon>arrow_back</v-icon></v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-media
            :src="article.image"
            height="400"
          />
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
</template>

<script>
export default {
  async asyncData({ params }) {
    const { article } = params;
    return { article };
  },
};
</script>

<style scoped>
.article__publication span {
  display: block;
  text-align: right;
  font-weight: bold;
  font-style: italic;
}
</style>
