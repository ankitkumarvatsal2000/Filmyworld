import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAPNly7QYl1xKeEZGjH6PhAb6nRlg8r5eY",
  
  projectId: "filmyverse-1a0e7",
  

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
export const moviesRef = collection(db, "movies");

export default app;