import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAgEWpwxMa-417FbG2uZvqzeCb6rusU4a0',
  authDomain: 'parks-planner-2d6af.firebaseapp.com',
  projectId: 'parks-planner-2d6af',
  storageBucket: 'parks-planner-2d6af.appspot.com',
  messagingSenderId: '714192687701',
  appId: '1:714192687701:web:0a48c32f4af05a92153adc',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
providerGoogle.setCustomParameters({
  prompt: 'select_account',
});

function login() {
  return auth.signInWithPopup(providerGoogle);
}

function logout() {
  return auth.signOut();
}

export { auth, login, logout };
