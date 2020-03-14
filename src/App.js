import React from "react";
import "./App.css";
import Slides from "./Components/Slides/Slides";
import NavBar from "./Components/NavBar/NavBar";


function App() {
  return (
    <div>
      <div className="content">
        <Slides />
        <NavBar />
      </div>
    </div>
  );
}

export default App;
