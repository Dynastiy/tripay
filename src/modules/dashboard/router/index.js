const Dashboard = () => import("../views/IndexView.vue");
const Transaction = () => import("../views/TransactionsView.vue");
const TransactionID = () => import("../views/transactionsId.vue");
const Settings = () => import("../views/SettingsView.vue");

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      layout: "AppDashboardLayout",
      breadcrumbs: [
        { title: "Dashboard", url: "/dashboard", separator: "/" },
        { title: "Transactions", active: true, separator: null },
      ],
    },
  },

  {
    path: "/transactions",
    name: "transactions",
    component: Transaction,
    meta: {
      layout: "AppDashboardLayout",
      breadcrumbs: [
        { title: "Dashboard", url: "/dashboard", separator: "/" },
        { title: "Transactions", active: true, separator: null },
      ],
    },
  },

  {
    path: "/transactions/id",
    name: "single-transactions",
    component: TransactionID,
    meta: {
      layout: "AppDashboardLayout",
      breadcrumbs: [
        { title: "Dashboard", url: "/dashboard", separator: "/" },
        { title: "Transactions", active: false, separator: "/" },
        { title: "Transactions", active: true, separator: null },
      ],
    },
  },

  {
    path: "/settings",
    name: "settings",
    component: Settings,
    meta: {
      layout: "AppDashboardLayout",
      breadcrumbs: [
        { title: "Dashboard", url: "/dashboard", separator: "/" },
        { title: "Settings", active: true, separator: null },
      ],
    },
  },
];

export default routes;
