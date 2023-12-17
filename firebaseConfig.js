// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOD3uRZnLvG8fo3-Nq46Lr3_jCtLAQBfc",
  authDomain: "file-share-35936.firebaseapp.com",
  projectId: "file-share-35936",
  storageBucket: "file-share-35936.appspot.com",
  messagingSenderId: "22256204252",
  appId: "1:22256204252:web:a8b7ac5437e75b85eb7719",
  measurementId: "G-M6DNR8YEQ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);