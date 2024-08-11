// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-466fa.firebaseapp.com",
  projectId: "mern-estate-466fa",
  storageBucket: "mern-estate-466fa.appspot.com",
  messagingSenderId: "1036926232648",
  appId: "1:1036926232648:web:a41260c396d8161886107d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
