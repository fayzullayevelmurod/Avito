import { Account, Home, NotFoundPage, SubscriptionServices } from "../pages";

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
		path: '/subscription-services',
		component: SubscriptionServices,
	},
	{
		path: '*',
		component: NotFoundPage
	}
];

const routes = [...coreRoutes];
export default routes;
