import React from "react";
import NavBar from "./components/NavBar";
import AppSwitch from "./AppSwitch";
import { ReadingContext } from "./contexts/ReadingContext";
import "./App.scss";

function App() {
  const [question, setQuestion] = React.useState("");
  const [spreadCount, setSpreadCount] = React.useState("4");

  return (
    <div className="App">
      <NavBar />
      <ReadingContext.Provider
        value={{ spreadCount, question, setSpreadCount, setQuestion }}
      >
        <AppSwitch />
      </ReadingContext.Provider>
    </div>
  );
}

export default App;
