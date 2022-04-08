import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBGY4_vsmqbD6AUy4v9jP5Vytzj4ZcQx5o",
  authDomain: "authfirebase-a925f.firebaseapp.com",
  projectId: "authfirebase-a925f",
  storageBucket: "authfirebase-a925f.appspot.com",
  messagingSenderId: "435443062868",
  appId: "1:435443062868:web:b3ad69c3e24fa89987f5c1"
};

// Iniciar Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); // Vamos a poder acceder a la base de datos
const auth = firebase.auth(); // Vamos a poder acceder a la info del usuario

export { db, auth }