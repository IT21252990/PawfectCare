import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAO51Q5gUjF63I3LKJG5BsTSdYQrAnYiiE",
  authDomain: "pawfect-care-ffc74.firebaseapp.com",
  projectId: "pawfect-care-ffc74",
  storageBucket: "pawfect-care-ffc74.appspot.com",
  messagingSenderId: "596485110830",
  appId: "1:596485110830:web:b3b377c02ffa8703d273bf"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
