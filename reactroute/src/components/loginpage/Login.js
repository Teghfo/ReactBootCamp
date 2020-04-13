import React, { useState, useContext } from "react";
import { Container, Form, Input, Button } from "./AuthFormStyle";
import { Link } from "react-router-dom";
import LoginContext from "../../context/loginContext";

export default function Login({ location, history }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(LoginContext);

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://5.9.249.45:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: userName, password: password })
    })
      .then(res => {
        if (res.status === 400) {
          setUserName('')
          setPassword('')
        }
        return res.json()
      })
      .then(data => {
        if (data.token) {

          localStorage.setItem("token", data.token);
          localStorage.setItem("username", userName);
          // localStorage.setItem('TokenExpireTime', new Date() + 1)
          dispatch({ type: "LOGEDIN", payload: data.token , username : userName});
          // push to from page after logedin
          const { from } = location.state || { from: { pathname: '/' } }
          history.push(from)
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <Container >
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={userName}
          placeholder="Username"
          onChange={e => setUserName(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit">sign in</Button>
      </Form>
      <Link to="/signup/">Do you need to sign up?</Link>
    </Container>
  );
}




// Error Boundaries , code spliting , dunamic import , props type, unit test , skrum


// Deploy ====> after best project