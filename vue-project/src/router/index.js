import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/page/HomeView.vue'

import { useAuthStore } from '@/stores/auth.js'

const router = createRouter({
	linkActiveClass: 'router-link-active',
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/page/AboutView.vue'),
		},
		// Authentication
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/page/auth/LoginView.vue'),
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('../views/page/auth/RegisterView.vue'),
		},
		{
			path: '/activate/:id/:code',
			name: 'activate',
			component: () => import('../views/page/auth/ActivateView.vue'),
		},
		{
			path: '/password',
			name: 'password',
			component: () => import('../views/page/auth/PasswordView.vue'),
		},
		// Client panel
		{
			path: '/change-password',
			name: 'change-password',
			component: () => import('../views/page/auth/PasswordChangeView.vue'),
			meta: { requiresAuth: true },
		},
		{
			path: '/panel',
			name: 'panel',
			component: () => import('../views/panel/client/DashboardView.vue'),
			meta: { requiresAuth: true },
		},
		{
			path: '/panel/settings',
			name: 'panel.settings',
			component: () => import('../views/panel/client/SettingsView.vue'),
			meta: { requiresAuth: true },
		},
		{
			path: '/panel/orders',
			name: 'panel.orders',
			component: () => import('../views/panel/client/OrdersView.vue'),
			meta: { requiresAuth: true },
		},
		// Employee panel
		{
			path: '/staff/panel',
			name: 'staff.panel',
			component: () => import('../views/panel/admin/DashboardView.vue'),
			meta: { requiresAuth: true },
		},
		// Logout all
		{
			path: '/logout',
			name: 'logout',
			component: () => import('../views/panel/LogoutView.vue'),
		},
		{
			path: '/:catchAll(.*)',
			name: 'error.page',
			component: () => import('../views/NotFoundView.vue'),
		},
	],
})

router.beforeEach(async (to, from, next) => {
	// ✅ This will work make sure the correct store is used for the current running app
	const auth = useAuthStore()
	// ✅ Login with remember me token and/or check is user authenticated
	await auth.isAuthenticated()
	// ✅ Redirect to panel if logged
	if (to.name == 'login' && auth.isLoggedIn.value) {
		next({ name: 'panel' })
	} else if (to.meta.requiresAuth && !auth.isLoggedIn.value) {
		// ✅ Redirect to login if not logged
		next({ name: 'login', query: { redirected_from: to.fullPath } })
	} else {
		// ✅ Continue
		next()
	}
})

export default router
