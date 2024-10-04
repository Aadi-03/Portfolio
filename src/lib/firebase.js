import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY ,
  authDomain: "portfolio-863e2.firebaseapp.com",
  projectId: "portfolio-863e2",
  storageBucket: "portfolio-863e2.appspot.com",
  messagingSenderId: "3953271498",
  appId: "1:3953271498:web:3bdccc739a76dbb886ca33"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);


