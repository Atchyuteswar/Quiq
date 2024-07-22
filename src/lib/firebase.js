import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8eda5.firebaseapp.com",
  projectId: "reactchat-8eda5",
  storageBucket: "reactchat-8eda5.appspot.com",
  messagingSenderId: "734929990995",
  appId: "1:734929990995:web:697d88f5aad1bbdf429da6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
