import React, {useState, useEffect} from 'react';
import {Container,Form, Button, Alert } from 'react-bootstrap';
import UserAuth from '../UserAuth';
import UserReg from '../UserReg';
import courseImg from '../../img/events/event.jpg';
import calendarImg from '../../img/classes/calendar.png';
import clockImg from '../../img/classes/clock.png';
import Axios from 'axios';
import ServerIP from '../ServerIP';
const getCourseUrl = `http://${ServerIP}:3001/getCourse`;
const regOnCourseUrl = `http://${ServerIP}:3001/regOnCourse`;

const CourseElement = (props) => {
	const [course, setCourse] = useState([]);
	useEffect(() => {
	    Axios.get(getCourseUrl)
	      .then((response) => {
	        setCourse(response.data);
	      })
	      .catch((error) => {
	        console.log(error);
	      });
	}, []);
	return(
		<div className="course event">
		{course.map((courseElement) => (
			<div>
				<div className="event__img mb-2">
					<img className="img-fluid" src={courseImg} draggable="false"/>
					<div className="event__img__title">
						{courseElement.title}
					</div>
				</div>
			
				<div className="course__subtitle">
					анонс:
				</div>
				<div className="course__text news__text">
					{courseElement.anons}
				</div>

				<div className="course__subtitle">
					о мероприятии:
				</div>
				<a className="course__calendar" target="_blank" href="https://calendar.google.com/calendar/embed?src=cpsspbryc%40gmail.com&ctz=Europe%2FMoscow">https://calendar.google.com/calendar/embed?src=cpsspbryc%40gmail.com&ctz=Europe%2FMoscow</a>
			</div>
		))}
		</div>
	);
};

const CourseDateInfo = () => {
	const [course, setCourse] = useState([]);
	useEffect(() => {
	    Axios.get(getCourseUrl)
	      .then((response) => {
	        setCourse(response.data);
	      })
	      .catch((error) => {
	        console.log(error);
	      });
	}, []);
	return(
		<div className="courseDate">
			{course.map((courseElement) => (
			<div>
				<div className="course__subtitle">
					дата и время:
				</div>
				<div className="courseDate__row">
					<div className="calendarImg">
						<img className="img-fluid" src={calendarImg} alt="calendar"/>
					</div>
					<div className=""><span>{courseElement.date.replace("T21:00:00.000Z","")} {courseElement.beginTime}</span> (UTC+03:00)</div>
				</div>
				<div className="courseDate__row">
					<div className="calendarImg">
						<img className="img-fluid" src={clockImg} alt="calendar"/>
					</div>
					<div className="">Продолжительность: <span>{courseElement.duration}</span></div>
				</div>
			</div>
			))}
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
		    Axios.post(
		    	regOnCourseUrl,
		    	{participantID: props.userData.participantID})
		      .then((response) => {
		        if(response.data.message){
		          setError(response.data.message);
		        }else{
		         setSuccess(true);
		        }
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
				          {error && <Alert variant="danger">{error}</Alert>}
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