import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px;
  padding: 2rem;
  margin-top: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color:${props => props.primary ? "white" : "palevioletred"}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const Input = styled.input`
  border: 1px solid lightgrey;
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 400;
`;

const Button = styled.button`
  border-color: gray;
  border-radius: 4px;
  padding: 2px;
  font-size: 0.7rem;
  font-weight: 700;
  margin: 0 0 5px;
  width: 40%;
  color: white;
  background: gray;
`;

export { Button, Form, Container, Input };
