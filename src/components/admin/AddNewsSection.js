import React, { useState, useRef } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Axios from 'axios';

const AddNewsSection = () => {
  // const [title, setTitle] = useState('');
  // const [date, setDate] = useState('');
  // const [description, setDescription] = useState('');
  const fileInputRef = useRef(null);
  const titleInputRef = useRef(null);
  const dateInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const checkboxInputRef = useRef(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    setSuccess(false);
    setError("");
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', titleInputRef.current.value);
    formData.append('date', dateInputRef.current.value);
    formData.append('description', descriptionInputRef.current.value);
    formData.append('file', fileInputRef.current.files[0]);
    formData.append('checkbox', checkboxInputRef.current.checked);

    Axios.post('http://localhost:3001/news', formData)
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
        <h2 className="text-uppercase text-center">добавление новости</h2>
        <Form enctype="multipart/form-data" onSubmit={handleSubmit}>
          {success && <Alert variant="success">Новость добавлена!</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group>
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              type="text"
              placeholder="Заголовок новости"
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
            <Form.Label>Текст новости</Form.Label>
            <Form.Control
              className="newsDescriptionInput"
              as="textarea"
              placeholder="описание новости"
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
	           <Form.Group>
	            <Form.Check ref={checkboxInputRef} className="mb-3 addNewsCheckbox" type="checkbox" label="Обозначить как главную новость (заменит текущую главную новость на главной странице)" />
	          </Form.Group>
          <Button variant="primary" type="submit">
            Добавить
          </Button>
        </Form>
      </div>
    </div>
	);
}

export default AddNewsSection;


