// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPtmIhUfkyLioKGD_YJpvIg9ezoTDRGxk",
  authDomain: "akatsuit.firebaseapp.com",
  projectId: "akatsuit",
  storageBucket: "akatsuit.appspot.com",
  messagingSenderId: "607522469107",
  appId: "1:607522469107:web:9af219fc6097cee7da7386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);