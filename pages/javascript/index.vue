<template>
  <main>
    <h1>Javascript</h1>
    <v-card v-for="post in posts" :key="post.slug">
      <nuxt-link :to="`/javascript/${post.slug}`">
        {{ post.title }}
      </nuxt-link>
      <p>{{ post.description }}</p>
    </v-card>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('javascript')
      .sortBy('createdAt', 'desc')
      .fetch()
    return { posts }
  },
}
</script>

<style></style>
