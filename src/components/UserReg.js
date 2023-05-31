import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Form, Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import ServerIP from './ServerIP.js';
const url = `http://${ServerIP}:3001/register`;


const UserReg = (props) => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isRecaptcha, setIsRecaptcha] = useState(false);

  const handleSubmit = (event) => {
    setError("");
    setSuccess(false);
    event.preventDefault();
    if(!isRecaptcha){
      setError("ReCAPTCHA не пройдена!");
      return;
    }
    // Axios.post("http://95.163.234.33:3001/register",{
    Axios.post(url,{
      nameReg: name,
      secondNameReg: secondName,
      emailReg: email,
      passwordReg: password }
    ).then((response) => {
        if(response.data.message){
          setError(response.data.message);
        }else{
         setSuccess(true);
         window.location.href = '/';
        }
      }).catch((error)=>{
        console.error("Ошибка при выполнении запроса:", error.message);
        setError(error.message);
      });
  };

  const recaptchaChange = (value) =>{
    if(value){setIsRecaptcha(true)}
    else{setIsRecaptcha(false)}
  }

  return (
    <div className="userReg wrapper">
      <div className="w-50">
        <h2 className="text-uppercase text-center">регистрация</h2>
        <Form onSubmit={handleSubmit}>
          {success && <Alert variant="success">Вы зарегистрированы!</Alert>}
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
          <ReCAPTCHA
            className="recaptcha mt-3 mb-3"
            sitekey="6LebnFcmAAAAAKG3W1f_cg9ljEJv1xfhfGgDdWWM"
            onChange={recaptchaChange}
          />
          <Button variant="primary" type="submit">
            Зарегистрироваться
          </Button>
          <a className="changeFormLink text-center mt-2" href="/login">
            войти
          </a>
        </Form>
      </div>
    </div>
  );
};

export default UserReg;