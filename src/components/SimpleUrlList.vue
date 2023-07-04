<template>
	<div class="list-div">
		<div class="list">
			<div class="url">
				<div>www.naver.com</div>
				<div>short.com/oL2312</div>
			</div>
			<div class="url-expired-date">만료 : 2023-07-15 10:00:00</div>
		</div>
		<div class="list">
			<div class="url">
				<div>www.naver.com</div>
				<div>short.com/oL2312</div>
			</div>
			<div class="url-expired-date">만료 : 2023-07-15 10:00:00</div>
		</div>
		<div class="list">
			<div class="url">
				<div>www.naver.com</div>
				<div>short.com/oL2312</div>
			</div>
			<div class="url-expired-date">만료 : 2023-07-15 10:00:00</div>
		</div>
		<div class="list">
			<div class="url">
				<div>www.naver.com</div>
				<div>short.com/oL2312</div>
			</div>
			<div class="url-expired-date">만료 : 2023-07-15 10:00:00</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SimpleUrlList',
};
</script>

<style scoped>
.list-div {
	margin-top: 1.5rem;
}
.list {
	background-color: #e2e2e2;
	opacity: 0.8;
	width: 60%;
	margin-left: auto;
	margin-right: auto;
}

.url {
	border-radius: 1rem;
	border: none;
	background-color: #bfbfba;
	margin-top: 0.2rem;
	font-size: 1.5rem;
}
.url-expired-date {
	text-align: right;
}
</style>
