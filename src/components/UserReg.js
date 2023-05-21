import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './firebase-config';
import Axios from 'axios';

const UserAuth = () => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // try {
    //   const user = await createUserWithEmailAndPassword(auth, email, password);
    //   setSuccess(true);
    // } catch (error) {
    //   setError(error.message);
    // }
    Axios.post("http://localhost:3001/register",{
      nameReg: name,
      secondNameReg: secondName,
      emailReg: email,
      passwordReg: password }
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="userAuth wrapper">
      <div className="w-50">
        <h2 className="text-uppercase text-center">регистрация</h2>
        <Form onSubmit={handleSubmit}>
          {success && <Alert variant="success">Success</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group>
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите имя"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите фамилию"
              value={secondName}
              onChange={(event) => setSecondName(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Введите email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Подтвердите пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Подтвердите пароль"
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Зарегистрироваться
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UserAuth;