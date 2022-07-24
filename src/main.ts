import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import.meta.env

createApp(App).use(store).use(router).mount('#app')
