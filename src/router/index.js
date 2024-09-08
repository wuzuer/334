import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import Home from "@/views/index.vue";
import HomeViewVue from "@/views/home/HomeView.vue";
import TeamView from "@/views/home/team.vue";
import ScienceView from "@/views/home/science.vue";
import TeachersVue from "@/views/home/teachers.vue";
import CultivationVue from "@/views/home/cultivation.vue";
import CultureVue from "@/views/home/culture.vue";

const routes = [{
    path: "/",
    name: "app",
    component: App,
    redirect: "/homepage",
    children: [{
        path: "/home",
        name: "home",
        component: Home,
        children: [
            { path: "/homepage", name: "homepage", component: HomeViewVue },
            {
                path: "/team",
                name: "team",
                component: TeamView,
            },
            {
                path: "/science",
                name: "science",
                component: ScienceView,
            },
            {
                path: "/teachers",
                name: "teachers",
                component: TeachersVue,
            },
            {
                path: "/cultivation",
                name: "cultivation",
                component: CultivationVue,
            },
            {
                path: "/culture",
                name: "culture",
                component: CultureVue,
            },
        ],
    }, ],
}, ];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
