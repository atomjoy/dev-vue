<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import PageTitle from '@/components/PageTitle.vue'
import ChangeLocale from '@/components/ChangeLocale.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })
const store = useAuthStore()
const vFocus = { mounted: (el) => el.focus() }

onMounted(() => {
	store.clearError()
})

function onSubmit(e) {
	store.scrollTop()
	store.changeUserPassword(new FormData(e.target))
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
						{{ $t('change_password.Change_password') }}
					</h1>

					<div v-if="store.getMessage.value != null" :class="[store.getError.value ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{ store.getMessage.value }}</div>

					<label>{{ $t('change_password.Current_password') }} <i class="far fa-key"></i></label>
					<input v-focus v-model="password_current" type="password" name="password_current" class="input" :placeholder="$t('change_password.Current_password')" />

					<label>{{ $t('change_password.New_password') }} <i class="far fa-key"></i></label>
					<input v-model="password" @keyup="validatePass" type="password" name="password" class="input" :placeholder="$t('change_password.New_password')" />

					<label>{{ $t('change_password.Confirm_password') }} <i class="far fa-key"></i></label>
					<input v-model="password_confirmation" type="password" name="password_confirmation" class="input" :placeholder="$t('change_password.Confirm_password')" />

					<div class="full">
						<button class="button" :title="$t('change_password.Change')">{{ $t('change_password.Change') }}</button>
					</div>

					<div class="full">
						<router-link to="/login" class="link-left">{{ $t('change_password.Have_an_account') }}</router-link>
						<router-link to="/password" class="link-right">{{ $t('change_password.Forgot_password') }}</router-link>
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
