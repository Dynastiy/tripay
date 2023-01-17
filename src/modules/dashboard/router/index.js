const Dashboard = () => import("../views/IndexView.vue");

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    meta: {
      layout: "AppDashboardLayout",
    },
  },
];

export default routes;
