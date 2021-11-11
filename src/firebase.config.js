import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDgDyPIPUacjs4bbM9NqvjQAFNuBZ8X0R4",
  authDomain: "tns-project-62d54.firebaseapp.com",
  databaseURL: "https://tns-project-62d54-default-rtdb.firebaseio.com",
  projectId: "tns-project-62d54",
  storageBucket: "tns-project-62d54.appspot.com",
  messagingSenderId: "276200281067",
  appId: "1:276200281067:web:8f2b4e8598e2d13bf6ffae",
  measurementId: "G-7V3W7E5X7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;