<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1>Articles list</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  async asyncData({ store }) {
    console.log('---', store);
  },
}
</script>

<style scoped>

</style>
