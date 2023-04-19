// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyBhv9tUW6JFqGeU54z4MCpnZGta5v1-_o0",
    authDomain: "shop-2232d.firebaseapp.com",
    projectId: "shop-2232d",
    storageBucket: "shop-2232d.appspot.com",
    messagingSenderId: "962403137209",
    appId: "1:962403137209:web:d820973b63cd3840e48d68",
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

