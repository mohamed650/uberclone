// Import the functions you need from the SDKs you need
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5kf12KsDQ7IDfYiOTfzem06YCaPDWZ74",
  authDomain: "uber-next-clone-16e13.firebaseapp.com",
  projectId: "uber-next-clone-16e13",
  storageBucket: "uber-next-clone-16e13.appspot.com",
  messagingSenderId: "352302060358",
  appId: "1:352302060358:web:4c57a3653687bdd2c64b47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}