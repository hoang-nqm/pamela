
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore,addDoc, collection } from "firebase/firestore";
import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyCZ11DDVNNHHcpKQyd5bsIRvW8Goo0rW-g",
  authDomain: "pamela-506fd.firebaseapp.com",
  projectId: "pamela-506fd",
  storageBucket: "pamela-506fd.firebasestorage.app",
  messagingSenderId: "481835728300",
  appId: "1:481835728300:web:7cbab9c2fb5adc12298e09",
  measurementId: "G-NMY830YYFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export {auth,provider,db, addDoc, collection}