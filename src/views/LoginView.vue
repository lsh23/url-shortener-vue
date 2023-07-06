<template>
	<div>
		<Logo></Logo>
		<LoginForm> </LoginForm>
		<OauthLoginButton></OauthLoginButton>
	</div>
</template>

<script>
import Logo from '@/components/common/Logo.vue';
import LoginForm from '@/components/common/LoginForm';
import OauthLoginButton from '@/components/common/OauthLoginButton';
export default {
	name: 'LoginView',
	components: { Logo, LoginForm, OauthLoginButton },
};
</script>

<style scoped></style>
