<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import PageTitle from '@/components/PageTitle.vue'
import ChangeLocale from '@/components/ChangeLocale.vue'

const store = useAuthStore()
const vFocus = { mounted: (el) => el.focus() }

onMounted(() => {
	store.clearError()
})

function onSubmit(e) {
	store.scrollTop()
	store.resetUserPassword(new FormData(e.target))
}
</script>

<template>
	<PageTitle :title="$t('message.password_title')" />

	<div id="page-wraper">
		<div class="page-auth">
			<div class="left">
				<div class="top-bar">
					<router-link to="/"><img class="float-left auth-logo" src="@/assets/auth-logo.png" height="70" /></router-link>
					<ChangeLocale />
				</div>
				<form @submit.prevent="onSubmit" class="form">
					<h1 class="full">
						{{ $t('password.Reset_password') }}
					</h1>

					<div v-if="store.getMessage.value != null" :class="[store.getError.value ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{ store.getMessage.value }}</div>

					<label>{{ $t('password.Email_address') }} <i class="far fa-envelope"></i></label>
					<input v-focus v-model="email" type="text" name="email" class="input" :placeholder="$t('password.Email_address_eg')" />

					<div class="full full-margin">
						<button class="button" :title="$t('password.Send_password')">{{ $t('password.Send_password') }}</button>
					</div>

					<div class="full">
						<router-link to="/login" class="link-left">{{ $t('password.Have_an_account') }}</router-link>
						<router-link to="/register" class="link-right">{{ $t('password.Dont_have_an_account') }}</router-link>
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
