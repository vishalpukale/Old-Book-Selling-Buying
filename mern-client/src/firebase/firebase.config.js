// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm27lGzFdy7rtJBhf3_yNPB3Pim5yivnw",
  authDomain: "mern-book-inventory-444.firebaseapp.com",
  projectId: "mern-book-inventory-444",
  storageBucket: "mern-book-inventory-444.appspot.com",
  messagingSenderId: "1066336682978",
  appId: "1:1066336682978:web:7efda1e07b73b4841bafbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;