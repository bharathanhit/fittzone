 // Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO5CEyGuzoGpMKvwtZamalSYfeP8Vwplg",
  authDomain: "meenakshi-52866.firebaseapp.com",
  projectId: "meenakshi-52866",
  storageBucket: "meenakshi-52866.appspot.com",
  messagingSenderId: "1034881111900",
  appId: "1:1034881111900:web:93b52bec5bda14c4685399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase modules
export { app, db, storage };