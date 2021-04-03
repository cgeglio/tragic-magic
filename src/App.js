import "./App.scss";
import crystal from "./images/crystal.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">Tragic Magic</header>
      <img alt="Crystal Ball" src={crystal} height={300} />
      <div className="coming-soon">Coming Soon</div>
    </div>
  );
}

export default App;
