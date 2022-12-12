import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './styles/main.css'
import 'flowbite';


const app = createApp(App)

app.use(router)
app.mount(document.getElementById('app'))
