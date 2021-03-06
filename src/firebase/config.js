import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const appid = process.env.REACT_APP_FIREBASE_APPID;
const authdomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const storagebucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const messagingsenderid = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;

const firebaseConfig = {
  apiKey: "AIzaSyAGMZyuJslEws0OiWTPEsqrafKpJFRj3JQ",
  authDomain: `${authdomain}`,
  projectId: "kitaplik-b339c",
  storageBucket: `${storagebucket}`,
  messagingSenderId: `${messagingsenderid}`,
  appId: `${appid}`,
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db };
export { auth };
