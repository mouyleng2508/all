
import Vue from 'vue'
import Vuex from 'vuex'
import apiService from '../service/service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setState: (state, _posts) => {
      state.posts = _posts
    },
    setError: (state, _posts) => {
      state.posts = _posts
    },
  },
  actions: {
    getPosts: ({commit}) => {
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        const _apiService = new apiService()
        _apiService.getAllPosts()
        .then(res => {
          console.log(res)
          commit('setState', res.data)
          resolve(res.data)
        })
        .catch(err => {
          console.log(err)
          commit('setError', [])
          reject(err)
        })
      })
    }
  },
  modules: {
  },
  getters: {
    getPostAll: (state) => {
      return state.posts
    }
  }
})
