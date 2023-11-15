import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/accounts/Login.vue';
import { useAuthStore} from "@/stores";


function dynamicHome() {
  return import('@/views/Home.vue')
}

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 ,behavior: 'smooth',}
      },
    routes: [
      { path: '', name: 'Home', alias: '/home', meta: { requiresAuth: true, roles: [] }, component: () => import('@/views/Home.vue') },
      { path: '/account', name: 'acc',
        children: [
          { path: 'me', name: 'Me', meta: { requiresAuth: true, roles: [] }, component: () => import('@/views/accounts/Me.vue') },
          { path: 'login', name: 'Login', meta: { requiresAuth: false }, component: Login},
          { path: 'login2', name: 'Login2', meta: { requiresAuth: false, roles: [] }, component: () => import('@/views/accounts/Login2.vue')},
          { path: 'sign-up', name: 'Signup', meta: { requiresAuth: false, roles: [] }, component: () => import('@/views/accounts/SignUp.vue') },
          { path: 'edit', name: 'Edit', meta: { requiresAuth: true, roles: [] }, component: () => import('@/views/accounts/SignUp2.vue') },
          { path: 'reset-password', name: 'Reset', meta: { requiresAuth: false, roles: [] }, component: () => import('@/views/accounts/Reset.vue') },
          { path: 'logout', name: 'Logout', meta: { requiresAuth: false }, component: Login },
          // custome
          {path: 'callender', name: 'Callender', meta: { requiresAuth: true }, component: () => import('@/views/accounts/callender.vue')},
          { path: 'mail', name: 'Mail', meta: { requiresAuth: true, roles: [] }, component: () => import('@/views/accounts/Mail.vue') },
        ]
      },
		
      { path: '/query', name: 'Query', alias: '/query', meta: { requiresAuth: true, roles: [] }, component: () => import('@/views/query/create.vue') },
    // center
      { path: '/center', name: 'Center', meta: { requiresAuth: true },
        children: [
          {path: 'all', name: 'Centers', props: true, meta: { requiresAuth: true, roles: [2] }, component: () => import('@/views/center/Center.vue') },
          {path: 'admin', name: 'CenterAdmin', props: true, meta: { requiresAuth: true, roles: [1] }, component: () => import('@/views/center/CenterAdmin.vue') },
          {path: 'class', name: 'Class', meta: { requiresAuth: true }, component: () => import('@/views/center/Class.vue')},
          {path: 'course', name: 'Course', meta: { requiresAuth: true }, component: () => import('@/views/center/Course.vue')},
          {path: 'course/:id(\\d+)', name: 'CourseDetails', meta: { requiresAuth: true }, component: () => import('@/views/center/CourseDetail.vue')}
        ]

    },
    {path: '/help', name: 'Help', meta: { requiresAuth: true }, component: () => import('@/views/aux/help.vue')},
    {path: '/403', name: '403', meta: { requiresAuth: true }, component: () => import('@/views/aux/403.vue')},
    {path: '/404', name: '404', meta: { requiresAuth: true }, component: () => import('@/views/aux/404.vue')},
      



    // otherwise redirect to home
    { path: '/:catchAll(.*)', redirect: '/' }
    ]
});


router.beforeEach((to, from) => {
  const { user, logout } = useAuthStore();
  const { roles, requiresAuth } = to.meta;
  if (requiresAuth && !user) {
      return {path: '/account/login', query: { redirect: to.fullPath },}
  }
  if (roles && roles.length && !roles.filter(e => user.roles.indexOf(e) !== -1).length) {
    return router.push('/403');
  }
  if (to.path == '/account/logout') {
    logout()
  }
})



