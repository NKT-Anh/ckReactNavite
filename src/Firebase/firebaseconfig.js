import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBItgY5JEHq7k11dZTS-4TI0Wh6WYQLqAI",
  authDomain: "restaurantapp-5df5a.firebaseapp.com",
  projectId: "restaurantapp-5df5a",
  storageBucket: "restaurantapp-5df5a.firebasestorage.app",
  messagingSenderId: "400174172451",
  appId: "1:400174172451:web:e3bc9aa0ce7579ef63e496",
  measurementId: "G-H2GQL0E98D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };