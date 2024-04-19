import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import store from './store'

import 'bootstrap/dist/js/bootstrap.bundle'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(store)
app.mount('#app')
