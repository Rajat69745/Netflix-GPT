// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADFAWqWNzsn0NByWdXbcT3eDVv6rSTZY4",
  authDomain: "netflix-3c79b.firebaseapp.com",
  projectId: "netflix-3c79b",
  storageBucket: "netflix-3c79b.appspot.com",
  messagingSenderId: "257551753266",
  appId: "1:257551753266:web:7d19611e1a356070709c2b",
  measurementId: "G-EX3ZKXQ5H0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);