const Login = () => import("../views/loginView.vue");
const Register = () => import("../views/registerView.vue");

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      layout: "AppAuthLayout",
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      layout: "AppAuthLayout",
    },
  },
];

export default routes;
