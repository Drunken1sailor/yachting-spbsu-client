import React, {useEffect,useState} from 'react';
import Axios from 'axios';
import {Container} from 'react-bootstrap';
import eventImg from '../../img/events/event.jpg';
import ServerIP from '../ServerIP';
const url = `http://${ServerIP}:3001/getEvents`;
const imgLink = `http://${ServerIP}:3001`;

const NewsElement = () => {
	return(
		<div className="event">
			<a className="event__img" href="news.php">
				<img className="img-fluid" src={eventImg} draggable="false"/>
			</a>
			<div className="event__title news__title">
				заголовок мероприятия
			</div>
			<div className="event__date news__date">
				01.01.2023
			</div>
			<div className="event__text news__text">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facere laboriosam maxime amet velit nam quia voluptatem labore architecto, vero, ad reprehenderit, repellat nobis magnam laudantium eveniet, iure aliquam illo.
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facere laboriosam maxime amet velit nam quia voluptatem labore architecto, vero, ad reprehenderit, repellat nobis magnam laudantium eveniet, iure aliquam illo.
			</div>
			<a className="event__link allNews__link" href="news.php">перейти к мероприятию →</a>

		</div>
	);
};

const EventsSection = () => {
	let numberOfEvents = 0;
	const [events, setEvents] = useState([]);
	let imgPath="";
	let cleanDate="";
	let eventURL="";
	useEffect(() => {
	    Axios.get(url)
	      .then((response) => {
	        setEvents(response.data);
	      })
	      .catch((error) => {
	        console.log(error);
	      });
	  }, []);
	return(
		<section className="eventsSection section bg-white text-black">
			<div className="wrapper">
				<h3 className="eventsSection__title section__title">
					<p>мероприятия</p>
				</h3>
				<div className="eventsSection__row row">
				{numberOfEvents<7 && events.length>0 && (events.map((event) => (
					<div className="event col-sm-12 col-md-6">
						{(() => {
							eventURL = `/event?eventID=${event.eventID}`;
							imgPath = imgLink + event.img.replace('./src', '');
							cleanDate = event.date.replace("T21:00:00.000Z","");
							numberOfEvents++;
						})()}
						<a className="event__img" href={eventURL}>
							<img src={imgPath} draggable="false"/>
						</a>
						<div className="event__title news__title">
							{event.title}
						</div>
						<div className="event__date news__date">
							{cleanDate}
						</div>
						<div className="event__text news__text">
							{event.body}
						</div>
						<a className="event__link allNews__link" href={eventURL}>перейти к мероприятию →</a>

					</div>
					)))}
				</div>
			</div>
		</section>
	);
}
export default EventsSection;