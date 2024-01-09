import { lazy } from 'react';
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const Home = lazy(() => import('../pages/home'));

const coreRoutes = [
	{
		path: '/home',
		component: Home,
	},
	{
		path: '*',
		component: NotFoundPage
	}
];

const routes = [...coreRoutes];
export default routes;
