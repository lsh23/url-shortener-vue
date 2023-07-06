<template>
	<div>
		<Logo :size="25">
			<h1>My Short URL List</h1>
		</Logo>
		<MyUrlList></MyUrlList>
	</div>
</template>

<script>
import Logo from '@/components/common/Logo.vue';
import MyUrlList from '@/components/MyUrlList.vue';
export default {
	name: 'MypageView',
	components: { Logo, MyUrlList },
};
</script>

<style></style>
