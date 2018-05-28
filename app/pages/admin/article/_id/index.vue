<template>
  <v-container>
    <Form
      :article="article"
      buttonText="Update"
    />
  </v-container>
</template>

<script>
import Form from '../../../../components/Form/Form.vue';

export default {
  asyncData({ params }) {
    const { article } = params;
    return { article };
  },
  components: { Form },
};
</script>
