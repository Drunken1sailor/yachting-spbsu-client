import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const AddNewsSection = () => {
 	
 	return(
	    <div className="signIn wrapper">
	      <div className="w-50">
	        <h2 className="text-uppercase text-center">добавление новости</h2>
	        <Form onSubmit="#">
	          <Form.Group>
	            <Form.Label>Заголовок</Form.Label>
	            <Form.Control
	              type="text"
	              placeholder="Заголовок новости"
	              required
	            />
	          </Form.Group>
	          <Form.Group>
	            <Form.Label>Дата</Form.Label>
	            <Form.Control
	              type="date"
	              placeholder="01.01.2001"
	              required
	            />
	          </Form.Group>
	          <Form.Group>
	            <Form.Label>Краткое описание</Form.Label>
	            <Form.Control
	              className="newsDescriptionInput"
	              as="textarea"
	              placeholder="описание новости"
	              required
	            />
	          </Form.Group>
	          <Form.Group>
	            <Form.Label>Картинка</Form.Label>
	            <Form.Control
	              type="file"
	              required
	            />
	          </Form.Group>
	           <Form.Group>
	            <Form.Check className="mb-3" type="checkbox" label="Обозначить как главную новость (заменит текущую главную новость на главной странице)" />
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