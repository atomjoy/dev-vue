<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import PageTitle from '@/components/PageTitle.vue'
import ChangeLocale from '@/components/ChangeLocale.vue'
import Checkbox from './widget/Checkbox.vue'

import { useRouter, useRoute } from 'vue-router'

const store = useAuthStore()
const vFocus = { mounted: (el) => el.focus() }

onMounted(() => {
	store.clearError()
	// Route
	const route = useRoute()
	console.log('Query', route?.query)
})

function onSubmit(e) {
	store.scrollTop()
	store.loginUser(new FormData(e.target))
}

function validatePass(e) {
	// console.log('Keyup', e.target.value)
}
</script>

<template>
	<PageTitle :title="$t('message.login_title')" />

	<div id="page-wraper">
		<div class="page-auth">
			<div class="left">
				<div class="top-bar">
					<router-link to="/"><img class="float-left auth-logo" src="@/assets/auth-logo.png" height="70" /></router-link>
					<ChangeLocale />
				</div>
				<form @submit.prevent="onSubmit" class="form">
					<h1 class="full">
						{{ $t('login.Sign_In') }}
					</h1>

					<div v-if="store.getMessage.value != null" :class="[store.getError.value ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{ store.getMessage.value }}</div>

					<label>{{ $t('login.Email_address') }} <i class="fas fa-envelope"></i></label>
					<input v-focus v-model="email" type="text" name="email" class="input" :placeholder="$t('login.Email_address_eg')" />

					<label>{{ $t('login.Password') }} <i class="fas fa-key"></i></label>
					<input v-model="password" @keyup="validatePass" type="password" name="password" class="input" :placeholder="$t('login.Password_eg')" />

					<div class="full">
						<Checkbox :label="$t('login.Remember_me')" value="1" v-model="remember_me" name="remember_me" />
					</div>

					<button class="button" :title="$t('login.Login')" ref="button">{{ $t('login.Login') }}</button>

					<div class="full">
						<router-link to="/register" class="link-left">{{ $t('login.Dont_have_an_account') }}</router-link>
						<router-link to="/password" class="link-right">{{ $t('login.Forgot_password') }}</router-link>
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
