<template>
  <v-container>
    <v-layout justify-center>
      <v-flex class="text-xs-center" xs7>
        <v-alert :value="true" type="error">
          <h1>404 Page not found</h1>
        </v-alert>
        <v-btn flat to="/">Go home page</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

