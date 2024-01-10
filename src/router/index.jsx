import { lazy } from 'react';
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const Home = lazy(() => import('../pages/home'));
const Account = lazy(() => import('../pages/account'));

const coreRoutes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/account',
		component: Account,
	},
	{
		path: '*',
		component: NotFoundPage
	}
];

const routes = [...coreRoutes];
export default routes;
