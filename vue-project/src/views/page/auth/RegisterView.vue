<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import PageTitle from '@/components/PageTitle.vue'
import ChangeLocale from '@/components/ChangeLocale.vue'
import Checkbox from './widget/Checkbox.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })
const store = useAuthStore()
const vFocus = { mounted: (el) => el.focus() }
const confirm_services = ref(0)

onMounted(() => {
	store.clearError()
})

function onSubmit(e) {
	store.scrollTop()

	if (confirm_services.value == 1) {
		store.registerUser(new FormData(e.target))
	} else {
		alert(t('register.Confirm_services'))
	}
}

function validatePass(e) {
	// console.log('Keyup', e.target.value)
}
</script>

<template>
	<PageTitle :title="$t('message.register_title')" />

	<div id="page-wraper">
		<div class="page-auth">
			<div class="left">
				<div class="top-bar">
					<router-link to="/"><img class="float-left auth-logo" src="@/assets/auth-logo.png" height="70" /></router-link>
					<ChangeLocale />
				</div>
				<form @submit.prevent="onSubmit" class="form">
					<h1 class="full">
						{{ $t('register.Sign_Up') }}
					</h1>

					<div v-if="store.getMessage.value != null" :class="[store.getError.value ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{ store.getMessage.value }}</div>

					<label>{{ $t('register.Name') }} <i class="far fa-user"></i></label>
					<input v-focus v-model="name" type="text" name="name" class="input" :placeholder="$t('register.Name_eg')" />

					<label>{{ $t('register.Email_address') }} <i class="far fa-envelope"></i></label>
					<input v-model="email" type="text" name="email" class="input" :placeholder="$t('register.Email_address_eg')" />

					<label>{{ $t('register.Password') }} <i class="far fa-key"></i></label>
					<input v-model="password" @keyup="validatePass" type="password" name="password" class="input" :placeholder="$t('register.Password_eg')" />

					<label>{{ $t('register.Confirm_password') }} <i class="far fa-key"></i></label>
					<input v-model="password_confirmation" type="password" name="password_confirmation" class="input" :placeholder="$t('register.Confirm_password_eg')" />

					<div class="full">
						<Checkbox :label="$t('register.Confirm_services')" value="1" v-model="confirm_services" name="confirm_services" />
						<RouterLink to="/docs/services" class="term-of-services">{{ $t('register.Show') }}</RouterLink>
					</div>

					<div class="full">
						<button class="button" :title="$t('register.Register')">{{ $t('register.Register') }}</button>
					</div>

					<div class="full">
						<router-link to="/login" class="link-left">{{ $t('register.Have_an_account') }}</router-link>
						<router-link to="/password" class="link-right">{{ $t('register.Forgot_password') }}</router-link>
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
