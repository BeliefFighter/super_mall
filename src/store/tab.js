export default {
  namespaced: true,
  state: {
    isCollapse: false
  },
  mutations: {
    SET_COLLAPSE(state, isCollapse) {
      state.isCollapse = isCollapse
    }
  }
}
