import { Account, Home, NotFoundPage, SubscriptionServices } from "../pages";
import { Instructions } from "../pages/instructions";
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
		path: '*',
		component: NotFoundPage
	}
];

const routes = [...coreRoutes];
export default routes;
