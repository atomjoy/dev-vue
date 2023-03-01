import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { createI18n } from 'vue-i18n'
import lang from './lang'

const i18n = createI18n(lang)
const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.provide('globalStore', {
	id: 1,
	async getUsers() {
		let res = await axios.get('https://jsonplaceholder.typicode.com/users')
		// console.log('App global store', res.data)
	},
})

// v-color="'red'"
app.directive('color', (el, binding) => {
	el.style.color = binding.value
})

// v-highlight="'yellow'"
app.directive('highlight', {
	mounted(el, binding, vnode) {
		el.style.background = binding.value
	},
})

app.mount('#app')
