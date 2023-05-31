import React, {useEffect,useState} from 'react';
import Axios from 'axios';
import {Container} from 'react-bootstrap';
import newsImg from '../../img/home/news/newsImg.jpg';
import ServerIP from '../ServerIP';
const url = `http://${ServerIP}:3001/getNews`;



const NewsSection = () => {
 	const [news, setNews] = useState([]);
	useEffect(() => {
	    Axios.get(url)
	      .then((response) => {
	        setNews(response.data);
	      })
	      .catch((error) => {
	        console.log(error);
	      });
	  }, []);
		return(
			<section className="newsSection section bg-white text-black">
				<div className="wrapper">
					<h3 className="section__title">
						<p>новости</p>
					</h3>
					<div>
				     	<div className="newsSection__row row scrollableContainer overflow-auto">
				        {news.length>0 && (news.map((newsElement) => (
				          	
							<div key={newsElement.newsId} className="newsElement col-sm-6 col-md-4 col-lg-3 ">
								{(() => {
									let newsURL = `/news?newsID=${newsElement.newsId}`;
								    let imgPath = newsElement.img;
								    imgPath = "http://localhost:3001" + imgPath.replace('./src', '');
								    let cleanDate = newsElement.date.replace("T21:00:00.000Z","");
								return(
								<div className="newsBlock">
									<a className="newsImg" href={newsURL}>
										<img src={imgPath} draggable="false"/>
									</a>
									<div className="news__title">
										{newsElement.title}
									</div>
									<div className="news__date">
										{cleanDate}
									</div>
									<div className="news__text">
										{newsElement.body}
									</div>
								</div>);
								})()}
							</div>
				        )))}
				        <a className="allNews__link" href="/allNews">все новости →</a>
			        	</div>
				      
				    </div>

					
				</div>
			</section>
		);
	
}
export default NewsSection;