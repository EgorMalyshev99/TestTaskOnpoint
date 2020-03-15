import React from "react";
import "./App.css";
import Slides from "./Components/Slides/Slides";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <div className="content">
        <NavBar />
        <Slides />
      </div>
    </div>
  );
}

export default App;
