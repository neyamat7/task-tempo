import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc5ZJnZ0_pj0lhJ_ML2pJAiRn3xt4rTM4",
  authDomain: "organic-herb-auth.firebaseapp.com",
  projectId: "organic-herb-auth",
  storageBucket: "organic-herb-auth.firebasestorage.app",
  messagingSenderId: "1050870836348",
  appId: "1:1050870836348:web:7065435b6b28634a9badf9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
