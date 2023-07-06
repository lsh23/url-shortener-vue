<template>
	<div class="list">
		<div class="url">
			<div class="url-item">
				<div>www.naver.com</div>
				<div>short.com/oL2312</div>
			</div>
			<div class="url-button">
				<button class="extend">연장</button>
				<button class="expire">만료</button>
			</div>
		</div>
		<div class="url-expired-date">만료 : 2023-07-15 10:00:00</div>
		<div class="url">
			<div class="url-item">
				<div>www.naver.com</div>
				<div>short.com/oL2312</div>
			</div>
			<div class="url-button">
				<button class="extend">연장</button>
				<button class="expire">만료</button>
			</div>
		</div>
		<div class="url-expired-date">만료 : 2023-07-15 10:00:00</div>
		<div class="url">
			<div class="url-item">
				<div>www.naver.com</div>
				<div>short.com/oL2312</div>
			</div>
			<div class="url-button">
				<button class="extend">연장</button>
				<button class="expire">만료</button>
			</div>
		</div>
		<div class="url-expired-date">만료 : 2023-07-15 10:00:00</div>
		<div class="url">
			<div class="url-item">
				<div>www.naver.com</div>
				<div>short.com/oL2312</div>
			</div>
			<div class="url-button">
				<button class="extend">연장</button>
				<button class="expire">만료</button>
			</div>
		</div>
		<div class="url-expired-date">만료 : 2023-07-15 10:00:00</div>
		<div class="url">
			<div class="url-item">
				<div>www.naver.com</div>
				<div>short.com/oL2312</div>
			</div>
			<div class="url-button">
				<button class="extend">연장</button>
				<button class="expire">만료</button>
			</div>
		</div>
		<div class="url-expired-date">만료 : 2023-07-15 10:00:00</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.list {
	background-color: #e2e2e2;
	opacity: 0.8;
	width: 60%;
	margin-left: auto;
	margin-right: auto;
}

.url {
	display: flex;
	align-items: center;
	border-radius: 1rem;
	border: none;
	background-color: #bfbfba;
	margin-top: 0.2rem;
	font-size: 1.5rem;
}
.url-expired-date {
	text-align: right;
}

.url-item {
	margin-right: auto;
	margin-left: 1rem;
}
.url-button {
	margin-left: auto;
}

button {
	border-width: 0px;
	border-radius: 1rem;
	padding: 0.5rem;
	margin-right: 0.5rem;
}
.extend {
	background-color: #77e7d0;
}

.expire {
	background-color: #f6a7cf;
}
</style>
