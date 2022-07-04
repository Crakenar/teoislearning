import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/HomePage.vue'),
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import('../views/Profile.vue'),
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import('../views/Projects.vue'),
    },
    {
        path: "/experiences",
        name: "Experiences",
        component: () => import('../views/Experience.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;