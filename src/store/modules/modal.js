export default {
  namespaced: true,
  state: {
    isShow: false,
    type: ''
  },
  mutations: {
    CLOSE (state) {
      state.isShow = false
    },
    OPEN (state) {
      state.isShow = true
    },
    CHANGE_TYPE (state, paylode) {
      state.type = paylode
    }
  },
  actions: {
    close ({ commit }) {
      commit('CLOSE')
    },
    open ({ commit }, payload) {
      commit('CHANGE_TYPE',payload)
      commit('OPEN')
    },
    confirm () {
      console.log('提交')
    }
  },
  modules: {

  }
}