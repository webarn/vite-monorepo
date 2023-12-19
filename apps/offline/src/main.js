import { createApp } from 'vue'
import './style.css'
import RComponents from '@rrd/components'
import App from './App.vue'

const app = createApp(App)

app.use(RComponents)
app.mount('#app')
