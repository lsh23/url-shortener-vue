<template>
	<div class="oauth-wrap github-wrap">
		<div style="flex-grow: 2">
			<i class="fab fa-github"></i>
		</div>
		<div style="flex-grow: 3">
			<button class="github">Sign in with GitHub</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'OauthLoginButton',
};
</script>

<style scoped>
button {
	border-width: 0;
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 0.5rem;
	padding: 1rem;
	width: 100%;
	font-size: 1.5rem;
	border-radius: 6px 6px 6px 6px;
}

i {
	color: white;
	font-size: 2rem;
}
.oauth-wrap {
	width: 40%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	align-items: center;
	text-align: center;
	margin-top: 1.5rem;
}

.fa-github {
	flex-grow: 1;
}

.github-wrap {
	background-color: black;
	border-radius: 6px 6px 6px 6px;
}
.github {
	flex-grow: 3;
	background-color: black;
	color: white;
	margin-top: 0rem;
	text-align: left;
}
</style>
