import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'normalize.css'
import 'element-plus/dist/index.css'
import './assets/style/reset.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
const app = createApp(App)
app.use(router).use(store).mount('#app')
