import React, {Component,useState,useEffect} from 'react';
import Axios from 'axios';
import userImg from '../img/lk/user.png';
import ServerIP from '../components/ServerIP';
const url = `http://${ServerIP}:3001/getNews`;
const imgLink = `http://${ServerIP}:3001`;

const NewsPage = ()=>{

	const [news, setNews] = useState([]);
	const [newsItem, setNewsItem] = useState({});
	const urlParams = new URLSearchParams(window.location.search);
	const newsID = urlParams.get('newsID');
	let imgPath="";
	let cleanDate="";
	useEffect(() => {

		Axios.get(url,{newsID: newsID})
		  .then((response) => {
		    setNews(response.data);
		  })
		  .catch((error) => {
		    console.log(error);
		  });
		  console.log(typeof(newsID));
		// setNewsItem(news.find((item) => item.newsID === newsID));
		
	}, []);
	const filteredNews = news.filter(newsElement =>{
		return newsElement.newsId.toString() === newsID;
	});

	return(
		<section className="bg-white text-black">
			<div className="wrapper participantLk">
				{(filteredNews.map((newsElement) => (

					<div key = {newsElement.newsId}>
						{(() => {
							imgPath = imgLink + newsElement.img.replace('./src', '');
							cleanDate = newsElement.date.replace("T21:00:00.000Z","");
						})()}
						<h3 className="mt-5 section__title">
						{newsElement.title}
						</h3>
						<div className="mb-5">
							{cleanDate}
						</div>
						<div className="newsElement__img mb-5">
							<img src={imgPath} alt="новость"/>
						</div>
						<div className="newsElement__body">{newsElement.body}</div>
					</div>
				)))}
			</div>
		</section>
	);
}
export default NewsPage;