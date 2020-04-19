import React from "react";
import "./App.css";
import HelloPropTypeCheck from "./PropeTypeTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloPropTypeCheck
          name="ashkan"
          age={30}
          onChangeHandler={() => console.log("hello")}
          arr={["Geradian", "namaz", "ruzeh", "mobin", "multymilayard"]}
          arrTemplate={[
            {
              fName: "hasangholi",
              lName: "taherKhani",
              age: "40",
              religion: true
            }
          ]}
          objectOfNum={{ numX: 24, numY: 42 }}
        >
          <div>salam mobin sarmayeh</div>
        </HelloPropTypeCheck>
      </header>
    </div>
  );
}

export default App;
