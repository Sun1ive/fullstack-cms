<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs10 sm6 class="text-xs-center">
        <v-card>
          <v-form class="myForm" @submit.prevent="onSubmit">
            <v-text-field v-model.trim.lazy="image" clearable label="Image" />
            <v-text-field v-model.trim.lazy="title" clearable label="Title" />
            <v-text-field v-model.trim.lazy="articleBody" clearable multi-line label="Body" />
            <v-text-field v-model.trim.lazy="author" clearable label="Author" />
            <v-btn type="submit">Create</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import API from '../../../axios';

export default {
  data: () => ({
    title: '',
    image: '',
    articleBody: '',
    timestamp: '',
    author: '',
  }),
  methods: {
    async onSubmit() {
      try {
        const { data } = await API().post('/v1/articles', {
          image: this.image,
          title: this.title,
          articleBody: this.articleBody,
          timestamp: new Date().toLocaleString(),
          author: this.author,
        });
        console.log(data);
      } catch (e) {
        throw new Error(`Error has occured: ${e}`);
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
