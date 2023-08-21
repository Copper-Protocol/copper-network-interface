import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/styles/tailwind.css';
import './assets/global.scss';
import router from './router'
const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
