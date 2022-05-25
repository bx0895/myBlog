import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modules/modal'
import store from 'store'
import base from '@/config/base.config'
import http from '@/api/http'

const { TOKEN_NAME } = base

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: store.get(TOKEN_NAME) || '',
    userInfo: {}
  },
  getters: {
    userInfo (state) {
      if (state.token) {
        return state.userInfo
      }
    }
  },
  mutations: {
    SET_TOKEN (state) {
      state.token = store.get(TOKEN_NAME)
    },
    SET_USERINFO (state,userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async login ({ dispatch, commit }) {
      commit('SET_TOKEN')
      dispatch('getUserInfo')
    },
    async getUserInfo ({ commit }) {
      try {
        let userInfo = await http({ type: 'getUserInfo' })
        commit('SET_USERINFO', userInfo)
         
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
    modal
  }
})
