import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './firebase';

// Este "onAuthStateChanged" es un observable y nos va a identificar si hay un usuario con sesión iniciada.
// Va a estar atento (observando) cada vez que iniciemos la sesión y cuando la cerremos
auth.onAuthStateChanged(user => {
  if(user) {
    console.log('existe el usuario y es: ' + user);
    console.log(user);
    const usuarioDetectado = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectarUsuario', usuarioDetectado);
  } else {
    console.log('no existe el usuario: ' + user);
    console.log(user);
    store.dispatch('detectarUsuario', user)
  }
})

createApp(App).use(store).use(router).mount('#app')