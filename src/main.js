import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'

const forumApp = createApp(App)
forumApp.use(router)

// Registering base components gloablly. Under base folder the vue files starts with "App" are global
const requireComponent = require.context('./components/base', true, /App[A-Z]\w+\.vue$/ )
requireComponent.keys().forEach( function (fileName) {
    let baseComponentConfig = requireComponent(fileName)
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig
    const baseComponentName = baseComponentConfig.name || (
        fileName
            .replace(/^.+\//, '')
            .replace(/\.\w+$/, '')
    )
    forumApp.component(baseComponentName, baseComponentConfig)
})

forumApp.mount('#app')
