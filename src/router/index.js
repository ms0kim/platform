import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImageUp from '../views/ImageUp.vue'
import VideoUp from '../views/VideoUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/image',
      name: 'image',
      component: ImageUp
    },
    {
      path: '/video',
      name: 'video',
      component: VideoUp
    },
  ]
})
/* component: () => import('../views/AboutView.vue') */
export default router