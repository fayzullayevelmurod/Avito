import { Policy } from "../pages/policy";
import {
  Account,
  Home,
  NotFoundPage,
  SubscriptionServices,
  Instructions,
  AccountSelection,
  Ads,
	Automation,
} from "../pages";
import { Settings } from "../pages/settings";
import { Privacy } from "../pages/privacy";

const coreRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/account",
    component: Account,
  },
  {
    path: "/subscription-services",
    component: SubscriptionServices,
  },
  {
    path: "/user-settings",
    component: Settings,
  },
  {
    path: "/video-instructions",
    component: Instructions,
  },
  {
    path: "/policy",
    component: Policy,
  },
  {
    path: "/privacy",
    component: Privacy,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
  {
    path: "account-selection",
    component: AccountSelection,
  },
  {
    path: "ads",
    component: Ads,
  },
  {
    path: "automation",
    component: Automation,
  },
];

const routes = [...coreRoutes];
export default routes;
