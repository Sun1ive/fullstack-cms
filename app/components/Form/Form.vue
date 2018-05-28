<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs10 sm6 class="text-xs-center">
        <v-card>
          <v-form class="myForm" @submit.prevent="onSubmit">
            <v-text-field v-model.trim.lazy="image" clearable label="Image" />
            <v-text-field v-model.trim.lazy="title" clearable label="Title" />
            <v-text-field v-model.trim.lazy="articleBody" multi-line label="Article body" />
            <v-text-field v-model.trim.lazy="author" clearable label="Author" />
            <v-btn type="submit" color="primary">{{ buttonText }}</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    article: { type: Object, required: true },
    buttonText: { type: String, default: () => 'Create' },
  },
  data: () => ({
    title: null,
    image: null,
    articleBody: null,
    author: null,
  }),
  created() {
    this.title = this.article.title;
    this.image = this.article.image;
    this.articleBody = this.article.articleBody;
    this.author = this.article.author;
  },
  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch('editArticle', {});
      } catch (e) {
        throw new Error(`Error has occurred: ${e}`);
      }
    },
  },
};
</script>

<style scoped>
.myForm {
  padding: 1rem 2rem;
}
</style>
