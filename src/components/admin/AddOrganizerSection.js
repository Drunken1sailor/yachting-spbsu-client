import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import ServerIP from '../ServerIP';
const url = `http://${ServerIP}:3001/orgReg`;

const AddOrganizerSection = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (event) => {
    setError("");
    setSuccess(false);
    event.preventDefault();

    const formData = {
      nameReg: name,
      secondNameReg: secondName,
      emailReg: email,
      passwordReg: password
    };

    Axios.post(url, formData)
      .then((response) => {
        console.log(response.data); // Ответ от сервера после сохранения данных в базу данных
        // Дополнительные действия после успешной отправки данных
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

 	return(
 	<div className="signIn wrapper addOrganizer">
      <div className="w-50">
        <h2 className="text-uppercase text-center">добавление организатора</h2>
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
          <Button className="addOrganizerBtn" variant="primary" type="submit">
            Зарегистрировать
          </Button>
        </Form>
      </div>
    </div>
	);
}

export default AddOrganizerSection;


