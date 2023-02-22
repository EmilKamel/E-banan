import React from 'react';
import logo from './logo.svg';
import './App.css';
import banana from "./banana_9343861_940.png"

function App() {

const urlSearchParams = new URLSearchParams(window.location.search);
const prettyMessage = urlSearchParams.get("besked"); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={banana} style={{width:"100%"}}></img>
        <p style={{position: "absolute", top: "50%", left: "50%", color:"black"}}>{prettyMessage}</p>
      </header>
    </div>
  );
}

export default App;
