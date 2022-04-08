import { auth } from '../firebase';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/HomeView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/LoginView.vue')
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: () => import(/* webpackChunkName: "home" */ '../views/EditarView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/agregar',
    name: 'agregar',
    component: () => import(/* webpackChunkName: "home" */ '../views/AgregarView.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Lógica para las rutas protegidas
router.beforeEach((to, from, next) => {
  // Estamos recorriendo cada una de las rutas
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // Si en la app hay un usuario con la sesión activa
    console.log('ruta protegida');
    const usuario = auth.currentUser
    console.log(usuario);
    if(!usuario) {
      next({path: '/login'})
    } else {
      next(); // lo dejamos pasar a la ruta protegida
    }
  } else {
    // En este punto estan las rutas que no contienen meta: { requiresAuth: true }
    // y se le da acceso
    next();
  }
})

export default router