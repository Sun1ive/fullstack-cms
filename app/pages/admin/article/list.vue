<template>
  <v-container>
    <v-layout
      v-for="article in articles"
      :key="article._id"
      justify-center
      align-center
    >
      <v-flex xs10 sm6>
        <v-card>
          <h1>{{ article.title }}</h1>
          <v-btn><v-icon>edit</v-icon></v-btn>
          <v-btn><v-icon>delete</v-icon></v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import API from '../../../axios';

export default {
  async asyncData() {
    try {
      const { data } = await API().get('/v1/articles');
      return { articles: data }
    } catch (e) {
      throw new Error(`Error has occured ${e}`);
    }
  },
};
</script>

<style scoped>

</style>
