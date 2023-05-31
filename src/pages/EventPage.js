import React, {Component,useState,useEffect} from 'react';
import Axios from 'axios';
import userImg from '../img/lk/user.png';
import ServerIP from '../components/ServerIP';
const url = `http://${ServerIP}:3001/getEvents`;
const imgLink = `http://${ServerIP}:3001`;

const EventPage = ()=>{

	const [events, setEvents] = useState([]);
	const urlParams = new URLSearchParams(window.location.search);
	const eventID = urlParams.get('eventID');
	let imgPath="";
	let cleanDate="";
	useEffect(() => {

		Axios.get(url)
		  .then((response) => {
		    setEvents(response.data);
		  })
		  .catch((error) => {
		    console.log(error);
		  });
		  console.log(typeof(newsID));
		// setNewsItem(news.find((item) => item.newsID === newsID));
		
	}, []);
	const filteredNews = events.filter(event =>{
		return event.eventID.toString() === eventID;
	});

	return(
		<section className="bg-white text-black">
			<div className="wrapper participantLk">
				{(filteredNews.map((event) => (

					<div key = {event.eventID}>
						{(() => {
							imgPath = imgLink + event.img.replace('./src', '');
							cleanDate = event.date.replace("T21:00:00.000Z","");
						})()}
						<h3 className="mt-5 section__title">
						{event.title}
						</h3>
						<div className="mb-5">
							{cleanDate}
						</div>
						<div className="event__img mb-5">
							<img src={imgPath} alt="новость"/>
						</div>
						<div className="newsElement__body">{event.body}</div>
					</div>
				)))}
			</div>
		</section>
	);
}
export default EventPage;