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
export default {
  props: {},
  data: () => ({
    title: null,
    image: null,
    articleBody: null,
    author: null,
  }),
  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch('editArticle', {
          
        })
      } catch (e) {
        throw new Error(`Error has occurred: ${e}`);
      }
    },
  },
  created() {
    const article = this.$store.getters.articles.filter(i => i._id === this.id)
  },
};
</script>

<style scoped>
.myForm {
  padding: 1rem 2rem;
}
</style>
