import React, {Component,useState,useEffect} from 'react';
import Axios from 'axios';
import userImg from '../img/lk/user.png';
import ServerIP from '../components/ServerIP';
const url = `http://${ServerIP}:3001/getNews`;

const NewsPage = ()=>{

	const [news, setNews] = useState([]);
	const [newsItem, setNewsItem] = useState({});
	const urlParams = new URLSearchParams(window.location.search);
	const newsID = urlParams.get('newsID');
	useEffect(() => {

		Axios.get(url)
		  .then((response) => {
		    setNews(response.data);
		  })
		  .catch((error) => {
		    console.log(error);
		  });

		// setNewsItem(news.find((item) => item.newsID === newsID));
		const filteredNews = news.filter(newsElement =>{
			return newsElement.newsId.toString() === newsID;
		});
		console.log(filteredNews);
	}, []);

	return(
		<section className="searchPage bg-white text-black">
			<div className="wrapper participantLk">
				<h3 className="section__title">
					<p>Новости</p>
				</h3>
		     	<div className="newsSection__row row scrollableContainer overflow-auto">

				<div></div>
				</div>
			</div>
		</section>
	);
}
export default NewsPage;