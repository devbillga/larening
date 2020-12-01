<template>
  <v-container>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post"></nuxt-content>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('javascript', params.slug).fetch()
    return { post }
  },
}
</script>

<style></style>
