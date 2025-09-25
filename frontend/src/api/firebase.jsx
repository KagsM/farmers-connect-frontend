import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set, onValue, push, remove, update } from 'firebase/database';

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyD7Q80UzBdfnKLA7NX35K_vJSxqqXczr-U",
  authDomain: "farmers-connect-15bad.firebaseapp.com",
  projectId: "farmers-connect-15bad",
  storageBucket: "farmers-connect-15bad.firebasestorage.app",
  messagingSenderId: "998807400867",
  appId: "1:998807400867:web:698f9e7354b53ccdf9aa16",
  measurementId: "G-WD77JJB83W",
  databaseURL: "https://farmers-connect-15bad-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getDatabase(app);

export { auth, googleProvider, db, ref, set, onValue, push, remove, update };