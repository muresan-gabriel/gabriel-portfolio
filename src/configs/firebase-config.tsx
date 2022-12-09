import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_W7eLxk28BllWsXguTK6afw2wa0Pdc5Y",
  authDomain: "project-32b10.firebaseapp.com",
  projectId: "project-32b10",
  storageBucket: "project-32b10.appspot.com",
  messagingSenderId: "114567133876",
  appId: "1:114567133876:web:4208ba38b0f13d0c6b75e1",
  measurementId: "G-5GV0LGYSSK",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
