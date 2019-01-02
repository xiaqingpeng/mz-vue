import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          redirect: '/films'
        },
        {
          path: 'films',
          name: 'films',
          component: () => import('./views/HomeFilms.vue')
        },
        {
          path: 'cinemas',
          name: 'cinemas',
          component: () => import('./views/HomeCinemas.vue')
        },
        {
          path: 'todo',
          name: 'todo',
          component: () => import('./views/HomeTodo.vue')
        },
        {
          path: 'center',
          name: 'center',
          component: () => import('./views/HomeCenter.vue')
        }
      ]
    }
  ]
})
