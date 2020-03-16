/// HoC ---- Render Props ---- Custom Hook

import React, { useState } from "react";

export default function App() {
  return (
    <>
      <RenderProps
        render={(count, counterInc) => (
          <CounterByClick count={count} counterInc={counterInc} />
        )}
      />
      <br />
      <br />
      <RenderProps
        render={(count, counterInc) => (
          <CounterByMouse count={count} counterInc={counterInc} />
        )}
      />
    </>
  );
}

function RenderProps({ render }) {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };
  return (
    <div>
      {/* <User render={isLogined => (isLogined ? <Users /> : <Home />)} />
      <User render={flag => (flag ? "Sakineh" : "Roghaieh")} /> */}

      {render(counter, handleCounter)}
    </div>
  );
}

function CounterByClick(props) {
  return (
    <button onClick={() => props.counterInc()}>byClick: {props.count}</button>
  );
}

function CounterByMouse(props) {
  return (
    <button onMouseEnter={() => props.counterInc()}>
      byMouse: {props.count}
    </button>
  );
}

function User({ render }) {
  return <div>{render(true)}</div>;
}

function Users() {
  return (
    <>
      <h1>Ashkan</h1>
    </>
  );
}
function Home() {
  return (
    <>
      <h1>HomePage</h1>
    </>
  );
}

/// functionality ----> 1. by click  2. by mouse   ====== ABS  1. peride 2. peguet
/// HoC ----> withCounter(ByClick)
/// RenderProps -----> RenderProps  render={(counter, increment) => {<ByClick counter={counter} inc ={incremetnt}>}}

/// <Route path=''  render={()=> <User/>}/>
