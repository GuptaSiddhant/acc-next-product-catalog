// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUbqOYBkLyGQewrrGbVwNzswy5hMW0VpE",
  authDomain: "group2awesome.firebaseapp.com",
  projectId: "group2awesome",
  storageBucket: "group2awesome.appspot.com",
  messagingSenderId: "437444851788",
  appId: "1:437444851788:web:1e6011c7927a0c33ca5ce9",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
