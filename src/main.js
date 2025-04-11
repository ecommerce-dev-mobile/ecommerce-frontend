import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Dropdown from 'primevue/dropdown'
import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/saga-blue/theme.css' // ou outro tema
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue)
app.component('Dropdown', Dropdown)
app.use(createPinia())
app.use(router)

app.mount('#app')