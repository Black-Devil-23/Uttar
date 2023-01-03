// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu7SeeN4C-Jn5lgzNRjpGmiH8ED9EU318",
  authDomain: "uttar-mern.firebaseapp.com",
  projectId: "uttar-mern",
  storageBucket: "uttar-mern.appspot.com",
  messagingSenderId: "43395844603",
  appId: "1:43395844603:web:7efc16beba925adce3235e",
  measurementId: "G-DBF58K606F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider();

export {auth, provider}