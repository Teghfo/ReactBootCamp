/// Usage: useRef
/// 1. DoM element refrrence
/// 2. refference variable in Component example ===> setInterval
/// 3. has prevState and prevProps in useEffect or any

//// Divar Project
// page ----> Login -----> button ---> onClick ----> isLogined   state --> true  ----> context
// if isLogined false ----> private  =====> <Redirect /> {isLogined ? 'ok': 'page login'}
// signOut ----> isLogined ----> false

import React, { useRef, useEffect, useState } from "react";

export default function UseRefTest() {
  const refUserName = useRef();
  const refPassword = useRef();
  const refEmail = useRef();
  const refSubmit = useRef();
  const refPTag = useRef({ value: "ashkan" });

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

  return (
    <div>
      <input
        type="text"
        placeholder="UserName"
        onKeyDown={handleUserRef}
        ref={refUserName}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        onKeyDown={handlePassRef}
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
      <Timer step={1} initialCount={5} />
      <p ref={refPTag}>{refPTag.current.value}</p>{" "}
      {/* in kar kheili kasife va ba state handle konid chon tu faze render ejra nemish */}
    </div>
  );
}

function Timer({ step, initialCount }) {
  const [timer, setTimer] = useState(initialCount);
  // const [interval, setInterval] = useState({ current: null });
  const interval = useRef();
  const handleStop = () => {
    clearInterval(interval.current);
    interval.current = null;
  };
  const handleStart = () => {
    if (!interval.current) {
      setInterval(() => {
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
