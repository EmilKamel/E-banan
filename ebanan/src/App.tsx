
import './App.css';
import banana from "./banana_9343861_940.png"
import { Canvas } from './Canvas';

function App() {

const urlSearchParams = new URLSearchParams(window.location.search);
const prettyMessage = urlSearchParams.get("besked"); 



  return (
    <div className="App">
      {/* <header className="App-header">
        <p style={{position: "absolute", top: "70%", left: "50%", color:"black", transform:"translate(-50%, -50%)"}}>{prettyMessage}</p>
      </header> */}
      {
        prettyMessage && <Canvas message={prettyMessage ?? ""}/>
      }
      
      <img src={banana} style={{visibility: "hidden", position: "absolute", width: "0px", opacity: "0"}} id="bananpic"></img>
    </div>
  );
}

export default App;
