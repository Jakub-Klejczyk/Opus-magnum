import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

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

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

const emailsRef = collection(db, "messages");
const portalsRef = collection(db, "portals");

export { auth, provider, emailsRef, portalsRef };
