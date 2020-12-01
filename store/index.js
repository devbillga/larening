export const state = () => ({
  drawer: false,
  miniVariant: false,
})

export const mutations = {
  set_drawer(state, newVle) {
    state.drawer = newVle
  },
  set_miniVariant(state, newVle) {
    state.miniVariant = newVle
  },
}
