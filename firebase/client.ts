import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLRkHNVg7PIbmDHmx4EzD8Lui72FeZoVc",
  authDomain: "prepwise-86785.firebaseapp.com",
  projectId: "prepwise-86785",
  storageBucket: "prepwise-86785.firebasestorage.app",
  messagingSenderId: "221887157738",
  appId: "1:221887157738:web:115df9f096eef00deb0e93",
  measurementId: "G-YFLY40QX6S"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)