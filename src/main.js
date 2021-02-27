import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// setup
import './assets/css/app.scss'
import './setup/setupAxios'

createApp(App).use(router).mount('#app')



