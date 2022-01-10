import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnmn31DhU9QgoZ2yMrMp0wd6wDDXCQc7s",
  authDomain: "twitter-clone-b906d.firebaseapp.com",
  projectId: "twitter-clone-b906d",
  storageBucket: "twitter-clone-b906d.appspot.com",
  messagingSenderId: "325676188998",
  appId: "1:325676188998:web:40ebbd78e88f8a0b735147",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
