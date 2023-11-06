import { createWebHistory, createRouter } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue";
import ComponenteHome from "./components/ComponenteHome.vue"
import EmmpleadosDetalle from './components/EmpleadosDetalle.vue'
import EmpleadosOficio from './components/EmpleadosOficio.vue'

const myRouters = [
  {
    path: "/",
    component: ComponenteHome,
  },
  {
    path: "/coches",
    component: CochesComponent,
  },
  {
    path: "/empleadosdetalle",
    component: EmmpleadosDetalle,
  },
  {
    path: "/empleadosoficio/:oficio",
    component: EmpleadosOficio,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: myRouters,
});

export default router;
