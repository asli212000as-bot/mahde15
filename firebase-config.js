// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKlIBTQSFDtFfF9yUITUG3ktcdmDHVQHA",
  authDomain: "mahdee.firebaseapp.com",
  projectId: "mahdee",
  storageBucket: "mahdee.firebasestorage.app",
  messagingSenderId: "327772064203",
  appId: "1:327772064203:web:72711ece1f5365d5a40e4e",
  measurementId: "G-RNM1VKJ8D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
