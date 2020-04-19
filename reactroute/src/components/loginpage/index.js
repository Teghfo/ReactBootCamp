import React, { useState, useReducer, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute";
import LoginContext from "../../context/loginContext";
import Login from "./Login";
import SignUp from "./SignUp";
import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

import axios from 'axios'

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGEDIN":
      return { isAuthenticated: true, token: action.payload, username: action.username };
    case "LOGEDOUT":
      return { isAuthenticated: false, token: "", username: '' };
    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    token: null
  });
  useEffect(() => {
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    if (token) {
      dispatch({ type: "LOGEDIN", payload: token, username: username });
    }
  }, []);

  const handleLogOut = () => {
    dispatch({ type: "LOGEDOUT" });
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <LoginContext.Provider value={{ state, dispatch }}>
        <div>
          <Navbar >
            <Nav >
              <Link to="/"><NavbarLink>Home</NavbarLink></Link>
              <Link to="/cards"><NavbarLink >Cards</NavbarLink></Link>
            </Nav>
            <Nav end>
              {state.isAuthenticated ? (<Button onClick={() => handleLogOut()} >log out</Button>) : (<Link to="/login"><NavbarLink >LogIn</NavbarLink></Link>)}
              {state.isAuthenticated ? (<NavbarLink>{state.username}</NavbarLink>) : (<Link to="/signup"><NavbarLink >SignUp</NavbarLink></Link>)}
            </Nav>
          </Navbar>
        </div>

        <Route path="/" exact srtict component={Home} />
        <Route path="/login/" exact srtict render={() => (state.isAuthenticated ? '' : <Login />)} />
        <Route path="/signup/" exact srtict render={() => (state.isAuthenticated ? '' : <SignUp />)} />
        <PrivateRoute
          path="/cards"
          exact
          strict
          render={() => <Cards url="http://5.9.249.45:8000/finance/MyShoppingCart/" />}
        />



      </LoginContext.Provider>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function Cards({ url }) {
  const [cards, setCards] = useState('')
  const [loading, setLoading] = useState(true)
  const { state } = useContext(LoginContext)
  useEffect(() => {
    let token = 'jwt ' + state.token;
    console.log(token)
    fetch(url, {
      method: "GET",
      headers: {
        'Authorization': token,
      }
    })
      .then(res => res.json())
      .then(result => { setCards(result); setLoading(false); console.log(result) })
      .catch(err => { console.log(err); setLoading(false) });
    // axios({
    //   url: "http://localhost:8001/finance/MyShoppingCart/",
    //   method: 'get',
    //   // headers: { 'Authorization': token },
    // }).then(data => console.log(data)).catch(err => console.log('Error Mapsa: ', err));
  }, [url]);
  return <div>{loading ? 'Loading ....' : cards.map((card, index) => (<div key={index}><span>item name: {card.item_name}</span>{' ==== '}<span>quantity: {card.quantity}</span></div>))}</div>;
}
