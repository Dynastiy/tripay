const Home = () => import("../views/HomeView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: "AppAuthLayout",
    },
  },
];

export default routes;
