<template>
  <v-app dark>
    <sidebar />
    <topbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <footer />
  </v-app>
</template>

<script>
import topbar from '@/components/layout/topbar'
import sidebar from '@/components/layout/sidebar'

export default {
  components: { topbar, sidebar },
  data() {
    return {}
  },
}
</script>
