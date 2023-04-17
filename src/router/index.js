/* eslint-disable no-undef */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import ImageDetails from '@/views/ImageDetails.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import SearchResults from '@/views/SearchResults.vue'
import ImageView from '@/views/ImageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search/:query',
    name: 'SearchResults',
    component: SearchResults,
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.query) {
        next()
      } else {
        next(from.path)
      }
    }
  },
  {
    path: '/image/:id',
    name: 'ImageView',
    component: ImageView
  },
  {
    path: '/favorites',
    name: 'FavoritesView',
    component: FavoritesView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
