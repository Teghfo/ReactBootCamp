import React from "react";
import "./App.css";
// import ParentMemoTest from "./UseMemoTest";
// import UseRefTest, { Timer } from "./UseRefTest";
// import ForwardRefTest from "./ForwardRefTest";
// import RouteTest from "./RouteTest";
// import RenderProps from "./RenderProps";
// import FormGitFollowers from "./FormGitFollowers";
import MapsaMentor from './MapsaMentor'
import ErrorBoundrary from './ErrorBoundrary'

import LoginPage from "./components/loginpage/";

function App() {
  return (
    <div >
      {/* <div data-testid='mapsaTest'>Mapsa</div>
      <div data-testid='mapsaTest1'>Mapsa1</div> */}
      {/* <ParentMemoTest /> */}
      {/* <UseRefTest /> */}
      {/* <Timer /> */}
      {/* <ForwardRefTest /> */}
      {/* <RouteTest /> */}
      {/* <RenderProps /> */}
      {/* <FormGitFollowers /> */}
      {/* <LoginPage /> */}

      <ErrorBoundrary>
        <MapsaMentor mentor='mentor khafane' />
      </ErrorBoundrary>

      <ErrorBoundrary>
        <MapsaMentor mentor='ashkan' />
      </ErrorBoundrary>

    </div>
  );
}

export default App;
