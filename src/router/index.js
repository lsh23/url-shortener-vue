import Vue from 'vue';
import Router from 'vue-router';
import MainView from '@/views/MainView';
import LoginView from '@/views/LoginView';
import MypageView from '@/views/MypageView';
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'main',
			component: MainView,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/mypage',
			name: 'mypage',
			component: MypageView,
		},
	],
});
