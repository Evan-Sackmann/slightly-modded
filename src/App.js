import { useState } from "react";
import Mage from "./components/Mage";
import Thief from "./components/Thief";
import Warrior from "./components/Warrior";

function App() {
  const [currentStyle, setCurrentStyle] = useState(null);
  return (
    <div className="main">
      <h1>Choose Combat Style</h1>
      <div className="main-options">
        <button onClick={() => setCurrentStyle("Warrior")}>Warrior</button>
        <button onClick={() => setCurrentStyle("Mage")}>Mage</button>
        <button onClick={() => setCurrentStyle("Thief")}>Thief</button>
      </div>

      {currentStyle === "Warrior" && <Warrior />}
      {currentStyle === "Mage" && <Mage />}
      {currentStyle === "Thief" && <Thief />}
    </div>
  );
}

export default App;
