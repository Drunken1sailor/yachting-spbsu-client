import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import CheckServerConnection from './CheckServerConnection';

const UserAuth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  Axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
      // Axios.post("http://95.163.234.33:3001/register",{
    Axios.post("http://localhost:3001/login",{
      email: email,
      password: password }
    ).then((response) => {

        if(response.data.message){
          setError(response.data.message);
        }else{
         setSuccess(true);
         window.location.reload();
        }
        console.log(response.data);
      }).catch((error)=>{
        console.error("Ошибка при выполнении запроса:", error.message);
        setError(error.message);
        setSuccess(false);
      });
  };

  const handleClickReg = (event) => {
    event.preventDefault();
    props.visible(false, true);
  };



  return (
    <div className="userAuth wrapper">
      <div className="w-50">
        <h2 className="text-uppercase text-center">войти</h2>
        <Form onSubmit={handleSubmit}>
          {success && <Alert variant="success">Success</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Войти
          </Button>
          <a className="text-center mt-2" href="#" onClick={handleClickReg}>
            Зарегистрироваться
          </a>
        </Form>
      </div>
    </div>
  );
};

export default UserAuth;