import "./App.css";
import Main from "./main";
import Header from "./components/Header";
import React from "react";
// import config from "./config";
// import Firebase from "firebase";

// FIREBASE
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyBZ7l-yoDioqNoZCwzoUDYxXsUNVjGRXOk",
//   authDomain: "tns-beta-18.firebaseapp.com",
//   databaseURL: "https://tns-beta-18-default-rtdb.firebaseio.com",
//   projectId: "tns-beta-18",
//   storageBucket: "tns-beta-18.appspot.com",
//   messagingSenderId: "460935462726",
//   appId: "1:460935462726:web:e1b0683e56c281aaf8ef47",
//   measurementId: "G-NL79F9Z85F",
// };

// class APP extends React.Component {
//   constructor(props) {
//     super(props);
//     Firebase.initializeApp(config.firebase);

//     this.state = {
//       developers: [],
//     };
//   }
// }

// writeUserData = () => {
//   Firebase.database().ref("/").set(this.state);
//   console.log("DATA SAVED");
// };

// getUserData = () => {
//   let ref = Firebase.database().ref("/");
//   ref.on("value", (snapshot) => {
//     const state = snapshot.val();
//     this.setState(state);
//   });
//   console.log("DATA RETRIEVED");
// };

// componentDidMount();{
//   this.getUserData();
// }

// componentDidUpdate(prevProps, prevState){
//   // check on previous state
//   // only write when it's different with the new state
//   if (prevState !== this.state) {
//     this.writeUserData();
//   }
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
