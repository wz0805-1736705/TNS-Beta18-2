import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCAW42Hkw8bUreEaZ8c4TmRSubsvOYjqC8",
  authDomain: "tns-project-new.firebaseapp.com",
  databaseURL: "https://tns-project-new-default-rtdb.firebaseio.com",
  projectId: "tns-project-new",
  storageBucket: "tns-project-new.appspot.com",
  messagingSenderId: "1048019830484",
  appId: "1:1048019830484:web:6a9e66e81f85b07b38dd41",
  measurementId: "G-G1WFEVRBZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;