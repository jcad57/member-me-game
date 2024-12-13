// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4dUtos0GInZHhFF11CbOiZOWi46ZoxAE",
  authDomain: "memory-game-leaderboard-2c67e.firebaseapp.com",
  projectId: "memory-game-leaderboard-2c67e",
  storageBucket: "memory-game-leaderboard-2c67e.firebasestorage.app",
  messagingSenderId: "177502178541",
  appId: "1:177502178541:web:5ab1873353425f624210e4",
  measurementId: "G-SY0SS4VG8R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
