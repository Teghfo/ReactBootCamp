import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

export default function ForwardRefTest() {
  const refTehran = useRef();
  const refShiraz = useRef();
  const refAhvaz = useRef();
  const history = useHistory();

  function handleClick(refCity) {
    switch (refCity) {
      case refTehran:
        refTehran.current.style.background = "blue";
        refShiraz.current.style.background = "red";
        refAhvaz.current.style.background = "red";
        break;
      case refShiraz:
        refTehran.current.style.background = "red";
        refShiraz.current.style.background = "blue";
        refAhvaz.current.style.background = "red";
        break;
      case refAhvaz:
        refTehran.current.style.background = "red";
        refShiraz.current.style.background = "red";
        refAhvaz.current.style.background = "blue";
    }
  }

  return (
    <div>
      <Link
        to={{
          pathname: "/Cities/tehran/mozakhraf",
          state: {
            name: "Reza"
          }
        }}
      >
        <CustumButton
          clickHandler={() => handleClick(refTehran)}
          ref={refTehran}
        >
          تهران
        </CustumButton>
      </Link>
      <Link
        to={{
          pathname: "/Cities/shiraz/khonak",
          state: {
            name: "ashkan"
          }
        }}
      >
        {" "}
        <CustumButton
          clickHandler={() => handleClick(refShiraz)}
          ref={refShiraz}
        >
          شیراز
        </CustumButton>
      </Link>

      <Link
        to={{
          pathname: "/Cities/ahvaz/garm",
          state: {
            name: "Akbar"
          },
          family: "Divband"
        }}
      >
        {" "}
        <CustumButton clickHandler={() => handleClick(refAhvaz)} ref={refAhvaz}>
          اهواز
        </CustumButton>
      </Link>
      <br />
      <button onClick={() => history.goForward()}>forward</button>
    </div>
  );
}

const CustumButton = React.forwardRef((props, ref) => {
  return (
    <button className="custom-button" onClick={props.clickHandler} ref={ref}>
      {props.children}
    </button>
  );
});
