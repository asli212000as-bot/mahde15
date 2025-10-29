import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCKlIBTQSFDtFfF9yUITUG3ktcdmDHVQHA",
  authDomain: "mahdee.firebaseapp.com",
  projectId: "mahdee",
  storageBucket: "mahdee.appspot.com",
  messagingSenderId: "327772064203",
  appId: "1:327772064203:web:72711ece1f5365d5a40e4e",
  measurementId: "G-RNM1VKJ8D6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
