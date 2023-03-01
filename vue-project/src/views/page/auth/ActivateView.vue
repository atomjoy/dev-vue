<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter, useRoute } from 'vue-router'
import PageTitle from '@/components/PageTitle.vue'
import ChangeLocale from '@/components/ChangeLocale.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })
const store = useAuthStore()
const route = useRoute()

onMounted(() => {
	store.clearError()

	if (route.query.locale) {
		locale.value = route.query.locale
		store.changeLocale(route.query.locale)
	}

	store.activateUser(route.params.id, route.params.code)
})
</script>

<template>
	<PageTitle :title="$t('message.activate_title')" />

	<div id="page-wraper">
		<div class="page-auth">
			<div class="left">
				<div class="top-bar">
					<router-link to="/"><img class="float-left auth-logo" src="@/assets/auth-logo.png" height="70" /></router-link>
					<ChangeLocale />
				</div>
				<form class="form">
					<h1 class="full">
						{{ $t('activate.Activation') }}
					</h1>

					<div v-if="store.getMessage.value != null" :class="[store.getError.value ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{ store.getMessage.value }}</div>

					<div class="full">
						<p>{{ $t('activate.Description') }}</p>
					</div>

					<div class="full">
						<router-link to="/login" class="link-left">{{ $t('activate.Have_an_account') }}</router-link>
						<router-link to="/password" class="link-right">{{ $t('activate.Forgot_password') }}</router-link>
					</div>
				</form>
			</div>
			<div class="right">
				<img src="@/assets/auth-foto.webp" class="auth-image" />
			</div>
		</div>
	</div>
</template>

<style scoped>
@import '@/assets/auth.css';
</style>
