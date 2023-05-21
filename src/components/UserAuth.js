import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';

const UserAuth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    }
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