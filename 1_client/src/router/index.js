import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import MovieView from '../views/MovieView'
import WishListView from '../views/WishListView'
import SignupView from '../views/SignupView'
import LoginView from '../views/LoginView'
import CommunityView from '../views/CommunityView'
import MovieDetailView from '../components/MovieDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieView
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityView
  },
  {
    path: '/movie/:id',
    name: 'moviedetail',
    component: MovieDetailView
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: WishListView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
