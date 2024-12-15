// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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
// export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
