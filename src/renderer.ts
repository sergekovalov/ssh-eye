import { createApp } from 'vue';
import App from './fe/App.vue';
import Primevue from 'primevue/config';
import { createPinia } from 'pinia';

import './index.css';

const pinia = createPinia();

createApp(App).use(pinia).use(Primevue).mount('#app');
