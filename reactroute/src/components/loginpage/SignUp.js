import React, { useState } from "react";
import { Container, Form, Input, Button } from "./AuthFormStyle";
import { Link, withRouter } from "react-router-dom";

function SignUp({ history }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://5.9.249.45:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: userName,
        email: email,
        phone: phone,
        password: password,
      })
    })
      .then(res => res.json())
      .then(data => history.push('/login'))
      .catch(err => console.log(err));
  };

  const handleClick = () => {
    history.push('/login')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={userName}
          placeholder="Username"
          onChange={e => setUserName(e.target.value)}
        />
        <Input
          type="email"
          value={email}
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
        />{" "}
        <Input
          type="text"
          value={phone}
          placeholder="Phone"
          onChange={e => setPhone(e.target.value)}
        />{" "}
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button type="submit">sign up</Button>
      </Form>
      {/* <Link to="login/">Do you have a acoount?</Link> */}
      <a onClick={handleClick}>Do you have a acoount?</a>
    </Container>
  );
}

export default withRouter(SignUp)
