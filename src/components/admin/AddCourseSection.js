import React, { useState, useRef } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Axios from 'axios';
import ServerIP from '../ServerIP';
const url = `http://${ServerIP}:3001/course`;

const AddCourseSection = () => {
  const titleInputRef = useRef(null);
  const dateInputRef = useRef(null);
  const anonsInputRef = useRef(null);
  const durationInputRef = useRef(null);
  const beginTimeInputRef = useRef(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    setSuccess(false);
    setError("");
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', titleInputRef.current.value);
    formData.append('date', dateInputRef.current.value);
    formData.append('anons', anonsInputRef.current.value);
    formData.append('duration', durationInputRef.current.value);
    formData.append('beginTime', beginTimeInputRef.current.value);

    Axios.post(url, formData)
      .then((response) => {
        setSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

 	return(
 	<div className="signIn wrapper">
      <div className="w-50">
        <h2 className="text-uppercase text-center">изменение обучающего курса</h2>
        <Form enctype="multipart/form-data" onSubmit={handleSubmit}>
          {success && <Alert variant="success">Курс обновлен!</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group>
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              type="text"
              placeholder="Заголовок/название курса"
              required
              ref={titleInputRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Дата проведения</Form.Label>
            <Form.Control
              type="date"
              placeholder="01.01.2001"
              required
              ref={dateInputRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Время начала</Form.Label>
            <Form.Control
              type="text"
              placeholder="19:30"
              required
              ref={beginTimeInputRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Текст анонса</Form.Label>
            <Form.Control
              className="newsDescriptionInput"
              as="textarea"
              placeholder="описание курса"
              required
              ref={anonsInputRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Продолжительность</Form.Label>
            <Form.Control
              type="text"
              placeholder="02:00"
              required
              ref={durationInputRef}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Изменить
          </Button>
        </Form>
      </div>
    </div>
	);
}

export default AddCourseSection;


