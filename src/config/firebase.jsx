// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZSoY5dtvZYVJqQ5VLP90ES6X50CS4-jk",
  authDomain: "react-assignment-auth1.firebaseapp.com",
  projectId: "react-assignment-auth1",
  storageBucket: "react-assignment-auth1.firebasestorage.app",
  messagingSenderId: "1098634792475",
  appId: "1:1098634792475:web:d905489ba8b920266df2be",
  measurementId: "G-7JTVXHJQVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth }