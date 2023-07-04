<template>
	<div>
		<div class="url-div">
			<input type="text" name="url" id="" />
			<button class="enter-button">Enter</button>
		</div>
		<div class="url-div">
			<i class="fas fa-link"></i>
			<div class="result-div">result</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UrlShortener',
};
</script>

<style scoped>
.url-div {
	width: 80%;
	margin-top: 1.5rem;
	margin-left: auto;
	margin-right: auto;
	display: flex;
}
input[type='text'] {
	display: block;
	margin-left: auto;
	width: 65%;
	padding: 1rem;
	border-radius: 1rem;
	border: none;
	background-color: #fffbf4;
	font-size: 1.5rem;
}
.enter-button {
	display: block;
	margin-right: auto;
	padding: 1rem;
	background-color: #f6a7cf;
	border-radius: 1rem;
	border: none;
	font-size: 1.5rem;
}
.fa-link {
	display: block;
	margin-left: auto;
	font-size: 1.5rem;
	color: #77e7d0;
	padding: 1rem;
}
.result-div {
	display: block;
	margin-right: auto;
	width: 65%;
	padding: 1rem;
	display: flex;
	font-size: 1.5rem;
	border-radius: 1rem;
	border: none;
	background-color: #77e7d0;
	opacity: 0.3;
}
</style>
