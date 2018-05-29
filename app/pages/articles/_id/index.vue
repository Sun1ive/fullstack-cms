<template>
  <!-- <h1>Refactor this</h1> -->
  <v-container>
    <v-layout justify-center>
      <v-flex class="my-3">
        <v-btn
          style="margin: 0"
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
          <v-card-actions v-if="true">
            <v-btn
              fab
              dark
              color="blue"
              @click="editable = !editable"
            ><v-icon large>edit</v-icon></v-btn>
            <v-btn
              fab
              dark
              color="red"
              @click="onDeleteArticle(article._id)"
            ><v-icon large>remove</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <transition
      v-if="editable"
      name="fade"
      mode="out-in"
    >
      <v-layout>
        <Form :currentArticle="article" />
      </v-layout>
    </transition>
  </v-container>
</template>

<script>
import Form from '../../../components/Articles/EditArticleForm.vue';

export default {
  async asyncData(ctx) {
    const { article } = ctx.params;
    return { article };
  },
  components: { Form },
  data: () => ({
    editable: false,
  }),
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
