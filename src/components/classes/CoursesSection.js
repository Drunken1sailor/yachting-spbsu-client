import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import courseImg from '../../img/events/event.jpg';
import calendarImg from '../../img/classes/calendar.png';
import clockImg from '../../img/classes/clock.png';
import {Button} from 'react-bootstrap';

const CourseElement = () => {
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

export default class CoursesSection extends Component {
	render(){
		return(
			<section className="eventsSection section bg-white text-black">
				<div className="wrapper">
					<div className="eventsSection__row row">
						<div className="eventsSection__col col-md-8">
							<CourseElement/>
						</div>
						<div className="eventsSection__col col-md-4">
							<CourseDateInfo/>
     						<Button className="courseRegButton" variant="primary" type="submit">
      								Записаться
     						</Button>
						</div>
						
					</div>
				</div>
			</section>
		);
	}
}