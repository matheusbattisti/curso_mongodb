import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
        requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
        requiresAuth: false
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/newparty',
    name: 'NewParty',
    component: () => import(/* webpackChunkName: "newparty" */ '../views/NewParty.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/editparty/:id',
    name: 'Edit Party',
    component: () => import(/* webpackChunkName: "editparty" */ '../views/EditParty.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/party/:id',
    name: 'Party',
    component: () => import(/* webpackChunkName: "party" */ '../views/Party.vue'),
    meta: {
        requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.authenticated === false) {
      next({
          path: '/login',
          params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
      next()
  }
})

export default router
