<template>
	<div class="login-form">
		<input type="email" name="" id="" placeholder="email" />
		<input type="password" name="" id="" placeholder="password" />
		<div class="keep">
			<input type="checkbox" name="" id="keep" />
			<label for="keep">ID 기억</label>
		</div>
		<button style="background-color: #f6a7cf">Sign in</button>
	</div>
</template>

<script>
export default {
	name: 'LoginForm',
};
</script>

<style scoped>
.login-form {
	width: 40%;
	margin-left: auto;
	margin-right: auto;
}

input {
	box-sizing: border-box;
	padding: 1rem;
	border: 1px solid #dadada;
	border-width: 0;
	font-size: 1.5rem;
}

input[type='email'] {
	border-radius: 6px 6px 0 0;
	width: 100%;
}

input[type='password'] {
	margin-top: 0.05rem;
	border-radius: 0 0 6px 6px;
	width: 100%;
}

input[type='email']:focus,
input[type='password']:focus {
	outline: 1px solid #77e7d0;
}

input[type='checkbox'] {
	border-radius: 6px 6px 6px 6px;
}

.keep {
	margin-top: 0.5rem;
}

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

input::-webkit-input-placeholder {
	opacity: 0.5;
}
</style>
