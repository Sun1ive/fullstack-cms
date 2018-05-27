<template>
  <v-menu offset-y>
    <v-btn
      slot="activator"
      dark
      flat
    ><v-icon class="mr-2">star</v-icon>Admin</v-btn>
    <v-list>
      <v-list-tile
        v-for="item in adminMenu"
        :key="item.title"
        @click="$router.push(item.path)"
      >
        <v-list-tile-title>
          <v-icon class="mr-2">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    adminMenu: [
      { title: 'Add Article', icon: 'star', path: '/admin/article/add' },
      { title: 'Edit Article', icon: 'star', path: '/admin/article/edit' },
      { title: 'Add User', icon: 'star', path: '/admin/user/add' },
      { title: 'Users list', icon: 'star', path: '/admin/user/list' },
    ]
  })
};
</script>

<style scoped>

</style>
