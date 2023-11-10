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
      { path: '', name: 'Home', alias: '/home', meta: { requiresAuth: true, roles: [] }, component: () => import('@/views/Index.vue') },
      { path: '/account', name: 'acc', meta: { requiresAuth: true, roles: [] },
        children: [
          { path: 'me', name: 'Me', meta: { requiresAuth: true, roles: [] }, component: () => import('@/views/accounts/Me.vue') },
          { path: 'login', name: 'Login', meta: { requiresAuth: false }, component: Login, roles: [] },
          { path: 'login2', name: 'Login2', meta: { requiresAuth: false }, component: () => import('@/views/accounts/Login2.vue'), roles: [] },
          { path: 'sign-up', name: 'Signup', meta: { requiresAuth: false }, component: () => import('@/views/accounts/SignUp.vue') },
          { path: 'reset-password', name: 'Reset', meta: { requiresAuth: true, roles: [] }, component: () => import('@/views/accounts/Reset.vue') },
          { path: 'logout', name: 'Logout', meta: { requiresAuth: false }, component: Login },
          // custome
          { path: 'mail', name: 'Mail', meta: { requiresAuth: true, roles: [] }, component: () => import('@/views/accounts/Mail.vue') },
        ]
      },
		
    
    // center
      {path: '/center', name: 'Center', meta: { requiresAuth: true }, component: () => import('@/views/center/Center.vue')},
      {path: '/center/:id(\\d+)', name: 'CenterAdmin', props: true, meta: { requiresAuth: true }, component: () => import('@/views/center/CenterAdmin.vue') },
      {path: '/center/:id(\\d+)/class', name: 'Class', meta: { requiresAuth: true }, component: () => import('@/views/center/Class.vue')},
            
      {path: '/center/course', name: 'Course', meta: { requiresAuth: true }, component: () => import('@/views/center/Course.vue')},
      {path: '/center/course/:id(\\d+)', name: 'CourseDetails', meta: { requiresAuth: true }, component: () => import('@/views/center/CourseDetail.vue')},
      {path: '/help', name: 'Help', meta: { requiresAuth: true }, component: () => import('@/views/help.vue')},
      



    // otherwise redirect to home
    { path: '/:catchAll(.*)', redirect: '/' }
    ]
});


router.beforeEach((to, from) => {
  const { user, logout } = useAuthStore();
  const { roles } = to.meta;
  if (to.meta.requiresAuth && !user) {
    console.log('login.........')
      return {path: '/account/login', query: { redirect: to.fullPath },}
  }
  if (roles && roles.length && !roles.filter(e => user.roles.indexOf(e) !== -1).length) {
    return router.push('/');
  }
  if (to.path == '/account/logout') {
    logout()
  }
})
