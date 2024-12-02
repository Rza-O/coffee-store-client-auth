// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYBrrR17w-7sr6rYD_EqoFkpxlkHTVXqM",
    authDomain: "simple-firebase-d85d7.firebaseapp.com",
    projectId: "simple-firebase-d85d7",
    storageBucket: "simple-firebase-d85d7.firebasestorage.app",
    messagingSenderId: "885367981959",
    appId: "1:885367981959:web:9d4b3753f9a20b0500f522",
    measurementId: "G-RH04CCPM2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
