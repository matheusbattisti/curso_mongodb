import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

const app = createApp(App).use(router)

app.use(store)

app.mount('#app')
