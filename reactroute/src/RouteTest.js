import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ForwardRefTest from "./ForwardRefTest";
import { useParams, useLocation, useHistory } from "react-router-dom";
export default function RouteTest() {
  return (
    <Router>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Cities">
          <li>Cities</li>
        </Link>
      </ul>

      <Switch>
        <Route path="/Cities" exact={true} component={ForwardRefTest} />
        <Route path="/Cities/:city/:citydetail" exact component={CityDetail} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

function Home() {
  return <div>Home</div>;
}

function CityDetail() {
  const location = useLocation();
  const { city, citydetail } = useParams();
  const params = useParams();
  const history = useHistory();

  console.log(history);
  console.log(params);
  return (
    <div>
      city name: {city} {" ---- "} city detail ={citydetail} ----{" "}
      {location.state.name}
      <br />
      <button onClick={() => history.goBack()}>back</button>
    </div>
  );
}
