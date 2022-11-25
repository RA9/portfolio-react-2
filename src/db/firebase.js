// Import the functions you need from the SDKs you need
import "regenerator-runtime/runtime"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaoPedXy2P0ovHArbCgAJ0GPS97XXKhQM",
  authDomain: "carlnix.firebaseapp.com",
  projectId: "carlnix",
  storageBucket: "carlnix.appspot.com",
  messagingSenderId: "151977897608",
  appId: "1:151977897608:web:358f7d5ebf9fb353c2793d",
  measurementId: "G-T2MPCMYDGR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseDB = getFirestore(app);