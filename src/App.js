import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
//Se exporta entre llaves el componente que solo tiene export
/*
import HolaMundo {AdiosMundo} from "./components/HolaMundo";
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';
*/

function App() {

  const [stateCar, setStateCar] = useState(false);
  const [ contar, setContar ] = useState(0);

  useEffect(() => {
    console.log('Total: '+ contar);
  }, [contar]); 
  const encenderApagar = () => {
    //setStateCar(!stateCar);
    setStateCar(prevValue => !prevValue); //Obteniendo el valor previo de setStateCar cuando solo se tiene acceso a la funcion setStateCar
    setContar(contar + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>El coche esta: { stateCar ? "Encendido" : "Apagado" }</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}> Encender / Apagar</button>
      </header>
      
    </div>
  );
}

export default App;
