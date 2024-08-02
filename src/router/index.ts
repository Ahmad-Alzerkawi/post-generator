import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: () => import('../components/TestBody.vue')
    },
    {
      path: '/generate-post',
      name: 'generate-post',
      component: () => import('../views/GeneratePostForm.vue')
    }
  ]
})

export default router
