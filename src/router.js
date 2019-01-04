import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home/Index.vue'),
      children: [
        {
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          path: 'films',
          component: () => import('./views/Home/Films/Index.vue'),
          children: [
            {
              path: '',
              redirect: '/films/nowPlaying'
            },
            {
              path: 'nowPlaying',
              name: 'nowPlaying',
              component: () => import('./views/Home/Films/NowPlaying.vue')
            },
            {
              path: 'comingSoon',
              name: 'comingSoon',
              component: () => import('./views/Home/Films/ComingSoon.vue')
            }
          ]
        },
        {
          path: 'cinemas',
          name: 'cinemas',
          component: () => import('./views/Home/Cinemas/Index.vue')
        },
        {
          path: 'todo',
          name: 'todo',
          component: () => import('./views/Home/Todo/Index.vue')
        },
        {
          path: 'center',
          name: 'center',
          component: () => import('./views/Home/Center/Index.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('./views/Login/Index.vue')
    }
  ]
})
