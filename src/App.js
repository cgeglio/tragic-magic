import React from "react";
import NavBar from "./components/NavBar";
import AppSwitch from "./AppSwitch";
import ReadingContext from "./contexts/ReadingContext";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ReadingContext>
        <AppSwitch />
      </ReadingContext>
    </div>
  );
}
