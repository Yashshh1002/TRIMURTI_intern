// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOUplWiQcmoK8X9ZpP-l5dpU3bLj5L8SA",
  authDomain: "trimurti-99320.firebaseapp.com",
  projectId: "trimurti-99320",
  storageBucket: "trimurti-99320.appspot.com",
  messagingSenderId: "108692120069",
  appId: "1:108692120069:web:cf90df81941ecae91e326c",
  measurementId: "G-FWLKP4JLCS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
