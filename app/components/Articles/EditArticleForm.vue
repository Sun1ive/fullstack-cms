<template>
  <v-container class="my-5">
    <v-layout justify-center align-center>
      <v-flex xs10>
        <v-card>
          <v-form class="form" @submit.prevent="onSubmit">
            <h2>Editing article: {{ title }}</h2>
            <v-text-field v-model.lazy.trim="title" label="Title" />
            <v-text-field v-model.lazy.trim="articleBody" label="Article Body" multi-line />
            <v-text-field v-model.lazy.trim="author" label="Author" />
            <v-text-field v-model.lazy.trim="image" label="Image" />
            <span class="preview" >Preview: <img :src="image"></span>
            <div style="text-align: center">
              <v-btn type="submit" color="primary">{{ buttonText }}</v-btn>
            </div>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    buttonText: { type: String, default: () => 'Submit' },
    currentArticle: { type: Object, required: true },
  },
  data: () => ({
    title: null,
    image: null,
    articleBody: null,
    author: null,
  }),
  created() {
    this.title = this.currentArticle.title;
    this.image = this.currentArticle.image;
    this.articleBody = this.currentArticle.articleBody;
    this.author = this.currentArticle.author;
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch('editArticle', {
        id: this.currentArticle._id,
        image: this.image,
        title: this.title,
        articleBody: this.articleBody,
        author: this.author,
      });
    },
  },
};
</script>

<style scoped>
.form {
  padding: 1rem 2rem;
}
.preview {
  display: block;
}
</style>

