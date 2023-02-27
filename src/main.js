import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router.js'

import components from '@/components/ui/index'
import '@/assets/styles/main.css'

const app = createApp(App)
components.forEach(c => app.component(c.name, c))
app.use(router)
app.mount('#app')
