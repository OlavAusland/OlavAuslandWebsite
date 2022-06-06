// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
////import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_xiOrMmeEhyOEZdBxodRlE7ksuTx_2_U",
  authDomain: "olavausland-938fd.firebaseapp.com",
  projectId: "olavausland-938fd",
  storageBucket: "olavausland-938fd.appspot.com",
  messagingSenderId: "922872232932",
  appId: "1:922872232932:web:22a8d0027be5615ee0e5f1",
  measurementId: "G-ZEPXGCC0FP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

////const analytics = getAnalytics(app);