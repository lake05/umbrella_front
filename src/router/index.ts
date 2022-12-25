import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Edit from '@/views/Editor.vue'
import TemplateDetail from '@/views/TemplateDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/editor', component: Edit },
  { path: '/template/:id?', component: TemplateDetail },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
