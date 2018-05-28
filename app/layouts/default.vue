<template>
  <v-app>
    <Toolbar />
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '../components/Toolbar/Toolbar.vue';

export default {
  components: { Toolbar },
};
</script>

<style>
.application.theme--light {
  background: url('~/static/bg.png') repeat;
  background-size: cover;
}
</style>
