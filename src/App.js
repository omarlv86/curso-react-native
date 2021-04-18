import logo from './logo.svg';
import './App.css';
//Se exporta entre llaves el componente que solo tiene export
/*
import HolaMundo {AdiosMundo} from "./components/HolaMundo";
import AdiosMundo from './components/AdiosMundo'
*/
import Saludar from './components/Saludar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Saludar name="Ricardo Omar" edad="25"/>
        <Saludar name="Omar Lugo" />
      </header>
      
    </div>
  );
}

export default App;
