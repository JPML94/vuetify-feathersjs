import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SignUp from './views/SignUp.vue';
import Login from './views/Login.vue';
import Boards from './views/Boards.vue';
import TwoByDo from './views/TwoByDo.vue';
import store from './store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/twobydo',
      name: 'twobydo',
      component: TwoByDo,
      beforeEnter(to, from, next) {
        store.dispatch('auth/authenticate').then(() => {
          next();
        }).catch(() => {
          next('/login');
        });
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/boards',
      name: 'boards',
      component: Boards,
      beforeEnter(to, from, next) {
        store.dispatch('auth/authenticate').then(() => {
          next();
        }).catch(() => {
          next('/login');
        });
      },
    },
  ],
});
