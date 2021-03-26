import "./App.scss";
import crystal from "./images/crystal.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">Tragic Magic</header>
      <img alt="Crystal Ball" src={crystal} height={300} />
    </div>
  );
}

export default App;
