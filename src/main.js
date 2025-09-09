import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles.css'

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
	const preserved = sessionStorage.getItem('gh:orig-path')
	if (preserved) {
		sessionStorage.removeItem('gh:orig-path')
		router.replace(preserved)
	}
	app.mount('#app')
})
