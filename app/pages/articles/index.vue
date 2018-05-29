<template>
  <v-container v-if="isArticles">
    <v-layout justify-center>
      <v-snackbar
        :timeout="2000"
        v-model="snackbar"
        top
        color="blue"
      >Success</v-snackbar>
    </v-layout>
    <transition-group
      tag="article"
      name="list"
      mode="out-in"
    >
      <v-layout
        v-for="article in articlesList"
        :key="article._id"
        justify-center
        align-center
        class="my-3"
      >
        <v-flex xs11>
          <v-card class="article">
            <div class="article__image__wrapper">
              <v-card-media
                :src="article.image"
                height="300"
                class="article__image"
                @click="viewArticle(article)"
              />
            </div>
            <v-card-text @click="viewArticle(article)">
              <h1>{{ article.title }}</h1>
            </v-card-text>
            <v-card-text>
              <p>{{ article.articleBody }}</p>
              <div class="article__info">
                <div>
                  <span><v-icon class="mr-2">visibility</v-icon>{{ article.views }}</span>
                </div>
                <div class="article__publication">
                  <span>Author: {{ article.author }}</span>
                  <span>Date: {{ article.timestamp }}</span>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </transition-group>
  </v-container>
  <NoArticles v-else />
</template>

<script>
import NoArticles from '../../components/Articles/NotFound.vue';

export default {
  async asyncData({ store }) {
    const articles = await store.dispatch('fetchArticles');
    return { articles };
  },
  components: { NoArticles },
  data: () => ({
    dialog: false,
    confirm: false,
    snackbar: false,
  }),
  computed: {
    isArticles() {
      return this.articles.length > 0;
    },
    articlesList() {
      return this.articles;
    },
  },
  methods: {
    async onDeleteArticle(id) {
      const ids = this.articles.map(i => i._id);
      this.articles.splice(ids.indexOf(id), 1);
      // await this.$store.dispatch('deleteArticle', { id });
      this.snackbar = true;
    },
    viewArticle(article) {
      this.$router.push({
        name: 'articles-id',
        params: { id: article._id, article },
      });
      this.$store.dispatch('incrementViews', { id: article._id });
    },
  },
};
</script>

<style scoped>
h1 {
  cursor: pointer;
}
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
.card__actions {
  justify-content: flex-end;
}
.article__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
