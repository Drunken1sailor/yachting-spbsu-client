import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import eventImg from '../../img/events/event.jpg';

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

export default class EventsSection extends Component {
	render(){
		return(
			<section className="eventsSection section bg-white text-black">
				<div className="wrapper">
					<h3 className="eventsSection__title section__title">
						<p>мероприятия</p>
					</h3>
					<div className="eventsSection__row row">
						<div className="eventsSection__col col-md-6">
							<NewsElement/>
							<NewsElement/>
						</div>
						<div className="eventsSection__col col-md-6">
							<div className="space"></div>
							<NewsElement/>
							<NewsElement/>
						</div>
						
					</div>
				</div>
			</section>
		);
	}
}