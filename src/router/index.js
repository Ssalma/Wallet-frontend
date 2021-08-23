import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home//Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/welcome",
    name: "Landing-page",
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Landing-page.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AuthScreens/Signup.vue"),
  },
  {
    path: "/one-time-password",
    name: "OTP",
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AuthScreens/OTP.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // this generates a separate chunk (about.[hash].js) for this route
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AuthScreens/Login.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/AuthScreens/ForgotPassword.vue"
      ),
  },
  {
    path: "/check-inbox",
    name: "Check-Inbox",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/AuthScreens/CheckInbox.vue"
      ),
  },
  {
    path: "/reset-password",
    name: "Reset-Password",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/AuthScreens/ResetPassword.vue"
      ),
  },
  {
    path: "/create-pin",
    name: "CreatePin",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/AuthScreens/OTPCreatePin.vue"
      ),
  },
  {
    path: "/dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard/Index.vue"),
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Dashboard/Home.vue"),
      },
      {
        path: "transactions",
        name: "Transactions",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Dashboard/Transactions.vue"
          ),
      },
      {
        path: "alltransactions",
        name: "AllTransactions",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Dashboard/AllTransactions.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
