import HomeView from "../views/HomeView.js";
import CreditView from "../views/CreditView.js";

const routes = [
    { path: "/", component: HomeView },
    { path: "/credit", component: CreditView },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;