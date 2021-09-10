import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [dollar, setDollar] = useState(0);
  const [rupees, setRupees] = useState(0);
  const pkToUs = (text) => {
    setDollar(parseFloat(text.target.value * 168.19));
  };
  const usToPk = (text) => {
    console.log("text", text.target.value);
    setRupees(parseFloat(text.target.value / 168.19));
  };
  return (
    <div className="App-header">
      <div style={{ flexDirection: "row" }}>
        {console.log(typeof dollar, dollar)}
        <input
          style={{ margin: 10, borderRadius: 5 }}
          type="number"
          onChange={(text) => pkToUs(text)}
          // value={dollar.toString()}
        />
        <input
          value={"Dollar to Pk"}
          contentEditable={false}
          readOnly
          style={{ width: "30%", borderRadius: 5 }}
        />

        <span style={{ fontSize: 15, margin: 10 }}>{dollar.toFixed(3)}</span>
      </div>

      <div style={{ flexDirection: "row" }}>
        <input
          style={{ margin: 10, borderRadius: 5 }}
          type="number"
          onChange={(text) => usToPk(text)}
          //value={rupees.toString()}
        />
        <input
          value={"Pkr to Dollar"}
          contentEditable={false}
          readOnly
          style={{ width: "30%", borderRadius: 5 }}
        />
        <span style={{ fontSize: 15, margin: 10 }}>{rupees.toFixed(3)}</span>
      </div>
    </div>
  );
}

export default App;
