import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import UEditPage from '@/views/EditorPage.vue'
import TemplateDetail from '@/views/TemplateDetail.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/editor', component: UEditPage },
  { path: '/template/:id?', component: TemplateDetail },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
