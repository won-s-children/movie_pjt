import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import createPersistedState from 'vuex-persistedstate'
import router from '@/router'

Vue.use(Vuex)


const API_URL = 'http://127.0.0.1:8000'


export default new Vuex.Store({
  plugins: [
    // createPersistedState()
  ],
  state: {
    movies: [],
    token: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    GET_MOVIES(state, movies){
      state.movies = movies
    },

    // 회원가입 && 로그인
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({ name: 'home' })
    },
    DELETE_TOKEN(state) {
      state.token = null
      router.push({ name: 'home' }).catch(()=>{});
    },
  },
  actions: {
    getMovies(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/movies/`,
        // headers: {
        //   Authorization: `Token ${context.state.token}`
        // }
      })
        .then((res) => {
          // console.log(res, context)
          console.log(res.data)
          // context.commit('GET_MOVIES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },    

    async signUp(context, payload) {
        try {
           await axios({
            method: 'post',
            url: `${API_URL}/accounts/signup/`,
            data: {
              username: payload.username,
              password1: payload.password1,
              password2: payload.password2,
            }
          })
          .then((res) => {
            // console.log(res)
            context.commit('SAVE_TOKEN', res.data.key)
          })
        } catch (error) {
          console.log(error);
        }
    },
    logIn(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username: payload.username,
          password: payload.password,
        }
      })
        .then((res) => {
          context.commit('SAVE_TOKEN', res.data.key)
        })
    },
    logOut(context) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/logout/`,
      })
        .then((res) => {
          if(res){
            console.log(res)
            context.commit('DELETE_TOKEN')
          }
        })
    },
  },
  modules: {
  }
})