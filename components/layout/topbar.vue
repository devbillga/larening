<template>
  <v-app-bar fixed app>
    <v-app-bar-nav-icon @click.stop="toggerDrawer" />

    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-btn> Login </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vuetify.js',
    }
  },
  methods: {
    toggerDrawer() {
      this.$store.commit('set_drawer', !this.$store.state.drawer)
    },
  },
}
</script>

<style></style>
