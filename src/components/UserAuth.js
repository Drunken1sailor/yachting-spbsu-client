import React, { useEffect,useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Form, Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import ServerIP from './ServerIP.js';
const url = `http://${ServerIP}:3001/login`;

const UserAuth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRecaptcha, setIsRecaptcha] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  Axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    setError("");
    setSuccess(false);
    event.preventDefault();
    if(!isRecaptcha){
      setError("ReCAPTCHA не пройдена!");
      return;
    }

    Axios.post(url,{
      email: email,
      password: password }
    ).then((response) => {

        if(response.data.message){
          setError(response.data.message);
        }else{
         setSuccess(true);
         window.location.href = '/';
        }
      }).catch((error)=>{
        setError(error.message);
        setSuccess(false);
      });
  };  

  const recaptchaChange = (value) =>{
    if(value){setIsRecaptcha(true)}
    else{setIsRecaptcha(false)}
  }

  return (
    <div className="userAuth wrapper">
      <div className="w-50">
        <h2 className="text-uppercase text-center">войти</h2>
        <Form onSubmit={handleSubmit}>
          {success && <Alert variant="success">Добро пожаловать!</Alert>}
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
          <ReCAPTCHA
            className="recaptcha mt-3 mb-3"
            sitekey="6LebnFcmAAAAAKG3W1f_cg9ljEJv1xfhfGgDdWWM"
            onChange={recaptchaChange}
          />
          <Button variant="primary" type="submit">
            Войти
          </Button>

          <a className="changeFormLink text-center mt-2" href="/register">
            Зарегистрироваться
          </a>
        </Form>
      </div>
    </div>
  );
};

export default UserAuth;