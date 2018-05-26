<template>
  <v-toolbar color="primary">
    <v-spacer />
    <v-toolbar-items>
      <AdminMenu />
      <v-btn flat dark to="/">Home</v-btn>
    </v-toolbar-items>
    <v-spacer />
  </v-toolbar>
</template>

<script>
import AdminMenu from './AdminToolbar.vue';

export default {
  components: { AdminMenu },
};
</script>

<style>

</style>
