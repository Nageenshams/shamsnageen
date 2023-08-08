import { createWebHistory, createRouter } from "vue-router";
import Home from "../../src/views/Home.vue";

const routes:any = [
  {
    path: "",
    name: "Home",
    components: {
      default: Home,     
    },
 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
