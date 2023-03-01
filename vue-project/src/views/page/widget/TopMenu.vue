<script setup>
import ChangeLocale from '@/components/ChangeLocale.vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()
</script>

<template>
	<nav class="page-top-menu">
		<img alt="Logo" class="logo" src="@/assets/logo.png" height="70" />

		<RouterLink to="/">{{ $t('page.Home') }}</RouterLink>
		<RouterLink to="/about">{{ $t('page.About') }}</RouterLink>
		<RouterLink to="/login" v-if="!auth.isLoggedIn.value">{{ $t('page.Login') }}</RouterLink>
		<RouterLink to="/logout" v-if="auth.isLoggedIn.value">{{ $t('page.Logout') }}</RouterLink>
		<RouterLink to="/register">{{ $t('Register') }}</RouterLink>

		<ChangeLocale />
	</nav>
</template>

<style scoped>
nav {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: start;
	padding: 0.8rem 1rem;
	font-size: var(--font-root);
	border-bottom: 1px solid var(--divider);
}

nav a {
	position: relative;
	float: left;
	width: auto;
	padding: 0.2rem 1rem;
	margin: 5px;
	border-radius: var(--radius);
	color: var(--color-text);
}
nav a.router-link-exact-active {
	color: var(--color);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a:first-of-type {
	border: 0;
}

@media (hover: hover) {
	a:hover {
		color: #fff;
		background-color: #222;
	}
}
</style>
