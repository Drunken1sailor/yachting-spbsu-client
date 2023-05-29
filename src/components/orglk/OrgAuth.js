import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import ServerIP from '../ServerIP.js';
const url = `http://${ServerIP}:3001/orgLogin`;

const OrgAuth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  Axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    setError("");
    setSuccess(false);
    event.preventDefault();
    Axios.post(url,{
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
        </Form>
      </div>
    </div>
  );
};

export default OrgAuth;