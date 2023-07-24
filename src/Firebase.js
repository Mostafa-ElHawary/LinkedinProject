// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase'; // Import firebase namespace (not as default)
// import {getAuth} from "firebase/auth"
// import 'firebase/firestore'; // Import specific Firebase service
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTNQRK83VjTGIRjQeLQzZrWwC_Op6mqs0",
  authDomain: "linkedinproject-4d005.firebaseapp.com",
  projectId: "linkedinproject-4d005",
  storageBucket: "linkedinproject-4d005.appspot.com",
  messagingSenderId: "428900923028",
  appId: "1:428900923028:web:76d66b17c677c443152681",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export  { db, auth };

