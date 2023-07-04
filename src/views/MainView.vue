<template>
	<div>
		<Logo></Logo>
		<UrlShortener></UrlShortener>
		<SimpleUrlList></SimpleUrlList>
	</div>
</template>

<script>
import Logo from '@/components/common/Logo.vue';
import SimpleUrlList from '@/components/SimpleUrlList.vue';
import UrlShortener from '@/components/UrlShortener.vue';

export default {
	name: 'MainView',
	components: { Logo, UrlShortener, SimpleUrlList },
};
</script>

<style scoped></style>
