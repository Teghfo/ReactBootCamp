import React from "react";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      {props.count}
      <br />
      <br />
      <button onClick={props.handleIncrement}>INC</button>
      <button onClick={props.handleDecrement}>DEC</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch({ type: "INC" }),
    handleDecrement: () => dispatch({ type: "DEC" })
  };
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

{
  /* <App count={state.count} handleIncrement={dispatch({ type: "INC" })} />; */
}
