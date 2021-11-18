import "./App.css";
import Main from "./main";
import Header from "./components/Header";
import React from "react";
import QuizButton from "./components/QuizButton";
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />
        <Main />
        <QuizButton />
      </div>
    </HashRouter>
  );
}

export default App;
