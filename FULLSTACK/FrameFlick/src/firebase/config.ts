// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt90LV1Ci4ZFVnKRUaT8b9X6GAhxuqXXU",
  authDomain: "frameflick-58cea.firebaseapp.com",
  projectId: "frameflick-58cea",
  storageBucket: "frameflick-58cea.appspot.com",
  messagingSenderId: "548346128104",
  appId: "1:548346128104:web:cbf2b12e4fecc955800b5d",
  measurementId: "G-VBDN8QE9CQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
