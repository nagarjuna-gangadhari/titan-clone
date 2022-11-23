import { createRouter, createWebHistory } from 'vue-router';
import { AUTH } from '@/stores'


export const center_router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 ,behavior: 'smooth',}
      },
    routes: [
    { path: '', name:'Home', alias: '/home', meta: { requiresAuth: true, authorize: [] }, component: () => import('@/views/Home.vue')},
    ]
});


center_router.beforeEach((to, from) => {
  const { user } = AUTH();
  const { authorize } = to.meta;

  if (to.meta.requiresAuth && !user.token) {
      return {path: '/login', query: { redirect: to.fullPath },}
  }
  if (authorize && authorize.length && !authorize.filter(e => user.roles.indexOf(e) !== -1).length) {
    return router.push('/');
  }
  if (to.path == '/logout' && user.token) {
    const auth = AUTH()
    auth.logout()
  }
})


