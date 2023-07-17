// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTNQRK83VjTGIRjQeLQzZrWwC_Op6mqs0",
  authDomain: "linkedinproject-4d005.firebaseapp.com",
  projectId: "linkedinproject-4d005",
  storageBucket: "linkedinproject-4d005.appspot.com",
  messagingSenderId: "428900923028",
  appId: "1:428900923028:web:76d66b17c677c443152681",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// "@material-ui/core": "^4.12.4",
// "@material-ui/icons": "^4.11.3",
// "@mui/icons-material": "^5.14.0",
// "@mui/material": "^5.14.0",
// yarn add @mui/material @emotion/react @emotion/styled

// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
