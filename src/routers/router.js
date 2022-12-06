import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/accounts/Login.vue';
import { AUTH } from '@/stores'


function dynamicHome() {
  return import('@/views/Home.vue')
}

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 ,behavior: 'smooth',}
      },
    routes: [
      { path: '', name: 'Home', alias: '/home', meta: { requiresAuth: true, authorize: [] }, component: () => import('@/views/Index.vue') },
      { path: '/accounts', name: 'acc', meta: { requiresAuth: true, authorize: [] }, component: () => import('@/views/accounts/Account.vue'),
        children: [
          { path: 'me', name: 'Me', meta: { requiresAuth: true, authorize: [] }, component: () => import('@/views/accounts/Me.vue') },
          { path: 'login', name: 'Login', meta: { requiresAuth: false }, component: Login, authorize: [] },
          { path: 'signup', name: 'Signup', meta: { requiresAuth: false }, component: () => import('@/views/accounts/Signup.vue') },
          { path: 'reset-password', name: 'Reset', meta: { requiresAuth: true, authorize: [] }, component: () => import('@/views/accounts/Reset.vue') },
          { path: 'logout', name: 'Logout', meta: { requiresAuth: false }, component: Login },
        ]
      },
		
    
    // center
      {path: '/center', name: 'Center', meta: { requiresAuth: true }, component: () => import('@/views/Center.vue')},
      {path: '/center/:id(\\d+)/:ay(\\d+)', name: 'CenterAdmin', props: true, meta: { requiresAuth: true }, component: () => import('@/views/CenterAdmin.vue') },
      



    // otherwise redirect to home
    { path: '/:catchAll(.*)', redirect: '/' }
    ]
});


router.beforeEach((to, from) => {
  const { user } = AUTH();
  const { authorize } = to.meta;

  if (to.meta.requiresAuth && !user.token) {
      return {path: '/accounts/login', query: { redirect: to.fullPath },}
  }
  if (authorize && authorize.length && !authorize.filter(e => user.roles.indexOf(e) !== -1).length) {
    return router.push('/');
  }
  if (to.path == '/accounts/logout' && user.token) {
    const auth = AUTH()
    console.log('sd-sjhcsjcsd-sdcjds')
    auth.logout()
  }
})


