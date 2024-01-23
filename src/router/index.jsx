import { Policy } from "../pages/policy";
import { Account, Home, NotFoundPage, SubscriptionServices, Instructions } from "../pages";
import { Settings } from "../pages/settings";

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
		path: '/user-settings',
		component: Settings,
	},
	{
		path: '/video-instructions',
		component: Instructions,
	},
	{
		path: '/policy',
		component: Policy,
	},
	{
		path: '*',
		component: NotFoundPage
	}
];

const routes = [...coreRoutes];
export default routes;
