// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCE1GcHXY19aj07rosgUjTD97n8HZ8zSw",
  authDomain: "instagram-clone-425b3.firebaseapp.com",
  projectId: "instagram-clone-425b3",
  storageBucket: "instagram-clone-425b3.appspot.com",
  messagingSenderId: "556091264037",
  appId: "1:556091264037:web:e97ba2978bf77cb2e883cc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export {app, db, storage}