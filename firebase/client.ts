// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzXGMF4PWyi13cLa1gejJiehx8lcrx5so",

  authDomain: "malhotra-dental.firebaseapp.com",

  projectId: "malhotra-dental",

  storageBucket: "malhotra-dental.firebasestorage.app",

  messagingSenderId: "27904928188",

  appId: "1:27904928188:web:4d2cbe658b4c8b8b4923b9"

};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
