import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/styles/tailwind.css';
import './assets/global.scss';
import router from './router'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
