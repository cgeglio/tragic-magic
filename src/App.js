import React from "react";
import NavBar from "./components/NavBar";
import AppSwitch from "./AppSwitch";
import ReadingContext from "./contexts/ReadingContext";

export default function App() {
  return (
    <div className="app">
      <ReadingContext>
        <NavBar />
        <AppSwitch />
      </ReadingContext>
    </div>
  );
}
