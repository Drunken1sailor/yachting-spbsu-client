import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import ServerIP from '../ServerIP';
const url = `http://${ServerIP}:3001/event`;

const AddEventSection = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      title: title,
      date: date,
      description: description
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Дата</Form.Label>
            <Form.Control
              type="date"
              placeholder="01.01.2001"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Описание мероприятия</Form.Label>
            <Form.Control
              className="newsDescriptionInput"
              as="textarea"
              placeholder="описание мероприятия"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          
	          <Form.Group>
	            <Form.Label>Картинка</Form.Label>
	            <Form.Control
	              type="file"
	              required
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


