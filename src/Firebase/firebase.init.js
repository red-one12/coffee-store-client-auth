// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZZutr1zvN4-1zvlvpWWNO_8RO_7vgSqQ",
  authDomain: "coffee-store-v1.firebaseapp.com",
  projectId: "coffee-store-v1",
  storageBucket: "coffee-store-v1.firebasestorage.app",
  messagingSenderId: "500489728808",
  appId: "1:500489728808:web:ca682e902f16cf62b8d61d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);