import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'


const forumApp = createApp(App)
forumApp.use(router)
forumApp.mount('#app')
