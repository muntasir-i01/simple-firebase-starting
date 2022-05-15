// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqoQ_jslP71ccq6QIkaL3DJM5gvN7PsSg",
  authDomain: "simple-firebase-starting.firebaseapp.com",
  projectId: "simple-firebase-starting",
  storageBucket: "simple-firebase-starting.appspot.com",
  messagingSenderId: "666450724358",
  appId: "1:666450724358:web:a07edd70de4b06a14ee587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;