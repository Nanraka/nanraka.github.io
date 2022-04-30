import { createApp } from 'vue'
import App from './App.vue'
import router from '../router.js' // Routerの使用
import "bootstrap/dist/css/bootstrap.min.css"

// 各javascriptファイルの使用
createApp(App).use(router).mount('#app')
