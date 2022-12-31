import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/style.css'

import LakeView from 'lake-view'
console.log('LakeView: ', LakeView)

const pinia = createPinia()
const app = createApp(App)

app.use(LakeView)

app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')
