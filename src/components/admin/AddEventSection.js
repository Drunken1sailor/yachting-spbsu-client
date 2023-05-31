import React, { useState,useRef } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import ServerIP from '../ServerIP';
const url = `http://${ServerIP}:3001/event`;

const AddEventSection = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);
  const titleInputRef = useRef(null);
  const dateInputRef = useRef(null);
  const descriptionInputRef = useRef(null);


  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', titleInputRef.current.value);
    formData.append('date', dateInputRef.current.value);
    formData.append('description', descriptionInputRef.current.value);
    formData.append('file', fileInputRef.current.files[0]);

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
 	<div className="signIn wrapper">
      <div className="w-50">
        <h2 className="text-uppercase text-center">добавление мероприятия</h2>
        <Form onSubmit={handleSubmit}>
          {success && <Alert variant="success">Success</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group>
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              type="text"
              placeholder="заголовок меропрятия"
              required
              ref={titleInputRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Дата</Form.Label>
            <Form.Control
              type="date"
              placeholder="01.01.2001"
              required
              ref={dateInputRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Описание мероприятия</Form.Label>
            <Form.Control
              className="newsDescriptionInput"
              as="textarea"
              placeholder="описание мероприятия"
              required
              ref={descriptionInputRef}
            />
          </Form.Group>
          
	          <Form.Group>
	            <Form.Label>Картинка</Form.Label>
	            <Form.Control
	              type="file"
	              required
                ref={fileInputRef}
	            />
	          </Form.Group>
          <Button variant="primary" type="submit">
            Добавить
          </Button>
        </Form>
      </div>
    </div>
	);
}

export default AddEventSection;


