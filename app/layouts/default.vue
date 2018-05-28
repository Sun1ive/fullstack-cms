<template>
  <v-app>
    <Toolbar />
    <v-content>
      <v-container fluid fill-height>
        <transition name="fade" mode="out-in">
          <nuxt />
        </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
