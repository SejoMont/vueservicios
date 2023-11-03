import { createWebHistory, createRouter } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue";
import ComponenteHome from "./components/ComponenteHome.vue"

const myRouters = [
  {
    path: "/",
    component: ComponenteHome,
  },
  {
    path: "/coches",
    component: CochesComponent,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: myRouters,
});

export default router;
