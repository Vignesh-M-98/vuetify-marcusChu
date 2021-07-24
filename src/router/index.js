import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Story from '../views/Story'
import Vision from '../views/Vision'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/story',
    name: 'Story',
    component: Story
  },

  {
    path: '/vision',
    name: 'Vision',
    component: Vision
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
