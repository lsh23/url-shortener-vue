<template>
	<div class="logo">
		<img src="@/assets/logo.png" alt="" :style="logoSize" />
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'Logo',
	props: {
		size: {
			type: Number,
			required: false,
		},
	},
	computed: {
		logoSize() {
			if (this.size === undefined) {
				return {};
			}
			console.log('?');
			return {
				width: `${this.size}%`,
			};
		},
	},
};
</script>

<style scoped>
.logo img {
	display: block;
	margin-left: auto;
	margin-right: auto;
}
.logo {
	text-align: center;
}
</style>
