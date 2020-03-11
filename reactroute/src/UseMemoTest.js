import React, { useMemo, useState } from "react";

export default function ParentMemoTest() {
  const [stateA, setStateA] = useState(5);
  const [stateB, setStateB] = useState(10);

  function handleA() {
    setStateA(prevState => prevState + 1);
  }
  function handleB() {
    setStateB(prevState => prevState + 1);
  }

  return (
    <>
      <UseMemoTest a={stateA} b={stateB} />
      <button onClick={handleA}>A</button>
      <button onClick={handleB}>B</button>
    </>
  );
}

function UseMemoTest({ a, b }) {
  const childA = useMemo(() => {
    return <ComponentA a={a} />;
  }, [a]);

  const childB = useMemo(() => {
    return <ComponentB b={b} />;
  }, [b]);

  return (
    <div>
      {childA} <br />
      {childB} <br />
      {/* <ComponentB b={b} /> */}
    </div>
  );
}

function ComponentA({ a }) {
  console.log("Render ComponentA");
  const [state, setstate] = useState("ashkan");
  return (
    <div>
      a : {a}
      <br />
      <ShouldUpdateFunctional a={a} />
    </div>
  );
}

function ComponentB({ b }) {
  console.log("Render ComponentB");
  return (
    <>
      <div>b : {b}</div>
    </>
  );
}

class ShouldUpdateTest extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, this.props);
    if (nextProps.a !== this.props.a) {
      return true;
    }
    return false;
  }
  componentDidUpdate() {
    console.log("update Class Component");
  }
  render() {
    console.log("Class Based Render");
    return <div> should update test </div>;
  }
}

const ShouldUpdateFunctional = React.memo(
  props => {
    console.log("Functional render");
    return <div> should update test </div>;
  },
  (prevProps, nextProps) => {
    console.log(nextProps, prevProps);
    if (nextProps.a !== prevProps.a) {
      return false;
    }
    return true;
  }
);
