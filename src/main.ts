import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'

import './assets/style.css'
import 'element-plus/es/components/message/style/css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
