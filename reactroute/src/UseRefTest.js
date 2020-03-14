/// Usage: useRef
/// 1. DoM element refrrence
/// 2. refference variable in Component example ===> setInterval
/// 3. has prevState and prevProps in useEffect or any

//// Divar Project
// page ----> Login -----> button ---> onClick ----> isLogined   state --> true  ----> context
// if isLogined false ----> private  =====> <Redirect /> {isLogined ? 'ok': 'page login'}
// signOut ----> isLogined ----> false

import React, { useRef, useEffect, useState, forwardRef } from "react";

export default function UseRefTest() {
  const refUserName = useRef();
  const refPassword = useRef();
  const refEmail = useRef();
  const refSubmit = useRef();
  const refPTag = useRef({ value: "ashkan" });
  // const prevState

  function handleUserRef(event) {
    if (event.key === "Enter") {
      refPassword.current.focus();
    }
  }
  function handlePassRef(event) {
    if (event.key === "Enter") {
      refEmail.current.focus();
    }
  }
  function handleEmailRef(event) {
    if (event.key === "Enter") {
      refSubmit.current.focus();
    }
  }
  function handleSubmitRef(event) {
    if (event.key === "Enter") {
      // alert("Form Submited");
      refPTag.current.value = "chakerim"; ////kasiftarin kar momken  va kar nemikonad  useRef update nemishavad
      console.log(refPTag.current);
    }
  }

  useEffect(() => {
    refUserName.current.focus();
  }, []);
  console.log(refUserName);

  return (
    <div>
      <Input
        type="text"
        placeholder="UserName"
        onKeyEnter={handleUserRef}
        ref={refUserName}
      />
      <br />
      <br />
      <Input
        type="password"
        placeholder="Password"
        onKeyEnter={handlePassRef}
        ref={refPassword}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Email"
        onKeyDown={handleEmailRef}
        ref={refEmail}
      />
      <br />
      <br />
      <button type="submit" onKeyDown={handleSubmitRef} ref={refSubmit}>
        Submit
      </button>
      {/* <Timer step={1} initialCount={5} /> */}
      <p ref={refPTag}>{refPTag.current.value}</p>{" "}
      {/* in kar kheili kasife va ba state handle konid chon tu faze render ejra nemish */}
    </div>
  );
}

function TimerFunctional({ step, initialCount }) {
  const [timer, setTimer] = useState(initialCount);
  // const [interval, setInterval] = useState({ current: null });
  const interval = useRef();
  const handleStop = () => {
    clearInterval(interval.current);
    interval.current = null;
  };
  const handleStart = () => {
    if (!interval.current) {
      interval.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + step);
      }, 1000);
    }
  };

  useEffect(() => {
    // let intervall = setInterval(() => {
    //   setTimer(prevTimer => prevTimer + step);
    // }, 1000);

    // setInterval({
    //   current: intervall
    // });

    interval.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + step);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <>
      <br />
      Timer: {timer}
      <br />
      <button onClick={handleStop}>stop</button>
      {"  "}
      <button onClick={handleStart}>start</button>
    </>
  );
}

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.interval = React.createRef();
  }

  componentDidMount() {
    this.interval.current = setInterval(() => {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
    }, 1000);
  }

  handleStop() {
    clearInterval(this.interval.current);
    this.interval.current = null;
  }
  handleStart() {
    if (!this.interval.current) {
      this.interval.current = setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 1000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval.current);
  }

  render() {
    console.log(this.state);
    return (
      <>
        <UseRefThirdUsage counter={this.state.counter} />
        <button onClick={() => this.handleStart()}>Start</button>
        <button onClick={() => this.handleStop()}>Stop</button>
      </>
    );
  }
}

function UseRefThirdUsage(props) {
  const [state, setstate] = useState(0);
  const refPrevState = useRef(state);
  const refPrevProps = useRef(props.counter);

  useEffect(() => {
    refPrevProps.current = props.counter;
  }, [props]);

  return (
    <div>
      props: {props.counter} {"  "} prevProps:{refPrevProps.current}
    </div>
  );
}

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      type={props.text}
      placeholder={props.placeholder}
      onKeyDown={props.onKeyEnter}
      ref={ref}
    />
  );
});
