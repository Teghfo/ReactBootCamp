import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./component/TodoForm";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { show: true };
//   }

//   _setState = () => {
//     this.setState({ show: false });
//   };
//   render() {
//     let temp;
//     if (this.state.show === true) temp = <App2 />;
//     return (
//       <div>
//         {temp}

//         <button onClick={this._setState}>unmount</button>
//       </div>
//     );
//   }
// }

// class App2 extends React.Component {
//   componentWillUnmount() {
//     console.log("unMount run");
//   }
//   render() {
//     return <div>App2</div>;
//   }
// }

class App extends React.Component {
  render() {
    return <TodoForm />;
  }
}
export default App;
