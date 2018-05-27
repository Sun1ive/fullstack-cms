<template>
  <v-toolbar color="primary">
    <v-spacer />
    <v-toolbar-items>
      <AdminMenu />
      <v-btn
        v-for="(item, i) in toolbarMenu"
        :to="item.path"
        :key="i"
        flat
        dark
      ><v-icon class="mr-2">{{ item.icon }}</v-icon>{{ item.title }}</v-btn>
    </v-toolbar-items>
    <v-spacer />
  </v-toolbar>
</template>

<script>
import AdminMenu from './AdminToolbar.vue';

export default {
  components: { AdminMenu },
  data: () => ({
    toolbarMenu: [
      { title: 'Home', path: '/', icon: 'star' },
      { title: 'Articles', path: '/articles', icon: 'star' },
    ]
  }),
};
</script>

<style scoped>

</style>
