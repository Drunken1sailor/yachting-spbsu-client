import React, {Component, useState} from 'react';
import {Container,Form, Button, Alert } from 'react-bootstrap';
import UserAuth from '../UserAuth';
import UserReg from '../UserReg';
import courseImg from '../../img/events/event.jpg';
import calendarImg from '../../img/classes/calendar.png';
import clockImg from '../../img/classes/clock.png';
import Axios from 'axios';

const CourseElement = (props) => {
	// console.log(props.course);
	return(
		<div className="course event">
			<div className="event__img mb-2">
				<img className="img-fluid" src={courseImg} draggable="false"/>
				<div className="event__img__title">
					курс по яхтингу и парусному спорту
				</div>
			</div>
			<div className="course__subtitle">
				анонс:
			</div>
			<div className="course__text news__text">
			Курс на права ГИМС с 27 марта 2023 года 19:30-21:30 по пн. и ср. плюс практика. Полезен начинающим и опытным яхтсменам, желающим улучшить свой результат, потому что содержит современные учебные материалы пока не описанные в литературе.
			</div>

			<div className="course__subtitle">
				о мероприятии:
			</div>
			<a className="course__calendar" target="_blank" href="https://calendar.google.com/calendar/embed?src=cpsspbryc%40gmail.com&ctz=Europe%2FMoscow">https://calendar.google.com/calendar/embed?src=cpsspbryc%40gmail.com&ctz=Europe%2FMoscow</a>

		</div>
	);
};

const CourseDateInfo = () => {
	return(
		<div className="courseDate">
			<div className="course__subtitle">
				дата и время:
			</div>
			<div className="courseDate__row">
				<div className="calendarImg">
					<img className="img-fluid" src={calendarImg} alt="calendar"/>
				</div>
				<div className=""><span>03 мая 2023 19:30</span> (UTC+03:00)</div>
			</div>
			<div className="courseDate__row">
				<div className="calendarImg">
					<img className="img-fluid" src={clockImg} alt="calendar"/>
				</div>
				<div className="">Продолжительность: <span>02:00</span></div>
			</div>
		</div>
	);
};



const CoursesSection = (props) => {
	const [showAuth, setShowAuth] = useState(false);
	const [showCourseReg, setShowCourseReg] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);


	const handleSubmit = (event)=>{
		setError("");
		setSuccess(false);
   		event.preventDefault();
   		if(props.userData.participantID){
   			const formData = {
		      participantID: props.userData.participantID,
		    };

		    Axios.post('http://localhost:3001/courseReg', formData)
		      .then((response) => {
		        console.log(response.data); // Ответ от сервера после сохранения данных в базу данных
		        // Дополнительные действия после успешной отправки данных
		        setSuccess(true);
		      })
		      .catch((error) => {
		        console.log(error);
		        setError(error.message);
		      });
   		}else{
   			setError("Вы не авторизованы!");
   		}
	    
	}

	return(
		<section className="eventsSection section bg-white text-black">
			<div className="wrapper">
				<div className="eventsSection__row row">
					<div className="eventsSection__col col-md-8">
						<CourseElement/>
					</div>
					<div className="eventsSection__col col-md-4">
						<CourseDateInfo/>
						<form onSubmit={handleSubmit}>
				          {success && <Alert variant="success">Вы записаны на текущий курс!</Alert>}
				          {error && <Alert variant="danger">Вы не авторизованы!</Alert>}
 						<Button className="courseRegButton" variant="primary" type="submit">
  								Записаться
 						</Button>
 						</form>
					</div>
					
				</div>
			</div>
		</section>
	);
}
export default CoursesSection;