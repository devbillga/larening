<template>
  <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
    <v-list>
      <v-list-item>
        <v-btn icon @click.stop="toggerminiVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
      </v-list-item>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-language-javascript',
          title: 'Javascript',
          to: '/javascript',
        },
        {
          icon: 'mdi-iframe-array',
          title: 'Array',
          to: '/array',
        },
      ],
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(newVal) {
        this.$store.commit('set_drawer', newVal)
      },
    },
    miniVariant: {
      get() {
        return this.$store.state.miniVariant
      },
      set(newVal) {
        this.$store.commit('set_miniVariant', newVal)
      },
    },
  },
  methods: {
    toggerminiVariant() {
      this.$store.commit('set_miniVariant', !this.$store.state.miniVariant)
    },
  },
}
</script>

<style></style>
