import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import List from './components/Admin/List.vue';
import Detail from './components/Admin/Detail.vue';

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      alias: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      alias: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/list",
      alias: "/list",
      name: "list",
      component: List
    },
    {
      path: "/detail",
      alias: "/detail",
      name: "detail",
      component: Detail
    }
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
