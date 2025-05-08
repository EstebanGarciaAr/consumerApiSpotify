import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3Cjs-O8GDa1Gmmzb12StdOnclgHOLdk0",
  authDomain: "consumerapispotify.firebaseapp.com",
  projectId: "consumerapispotify",
  storageBucket: "consumerapispotify.firebasestorage.app",
  messagingSenderId: "509207681617",
  appId: "1:509207681617:web:0f1141b874e515a1467670",
  measurementId: "G-H1QZ1EJWND"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);