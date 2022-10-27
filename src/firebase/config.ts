import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWYCvX5ZPpjAiPuwP_NcxUzPwm0Zr_DzY",
  authDomain: "portal-shop-969df.firebaseapp.com",
  projectId: "portal-shop-969df",
  storageBucket: "portal-shop-969df.appspot.com",
  messagingSenderId: "62383781918",
  appId: "1:62383781918:web:6a0cdb3d9f8a014615160f",
  measurementId: "G-2YLJ53RXRH",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
