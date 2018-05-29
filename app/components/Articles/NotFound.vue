<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs10 sm6 class="text-xs-center">
        <v-alert :value="true" type="warning">
          <h1>There is no articles yet</h1>
          <v-btn
            to="/"
            nuxt
            exact
            flat
            dark
            color="blue"
          >Home</v-btn>
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>
