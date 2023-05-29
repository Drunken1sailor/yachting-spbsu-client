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
				        {news.map((newsElement) => (
				          	
							<div key={newsElement.newsId} className="newsElement col-md-3">
								{(() => {
									let newsURL = `/news?newsID=${newsElement.newsId}`;
								    let imgPath = newsElement.img;
								    imgPath = "http://localhost:3001" + imgPath.replace('./src', '');
								    let cleanDate = newsElement.date.replace("T21:00:00.000Z","");
								return(
								<div>
									<a className="newsImg" href={newsURL}>
										<img className="img-fluid" src={imgPath} draggable="false"/>
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
				        ))}
				        <a className="allNews__link" href="/allNews">все новости →</a>
			        	</div>
				      
				    </div>

					{/*<div className="newsSection__row row">
						<div className="d-flex flex-column justify-content-between col-md-6">
							<NewsElement/>
							<a className="allNews__link" href="/news">все новости →</a>
						</div>
						<div className="col-md-6 scrollableContainer overflow-auto">
							<div className="scrollable">
								<div className="row mb-3">
									<div className="col-md-6 mb-3">
										<div>
											<div>
												<img className="img-fluid" src={newsImg1} draggable="false"/>
											</div>
											<div className="news__title">
												заголовок новости
											</div>
											<div className="news__date">
												01.01.2023
											</div>
											<div className="news__text">
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facere laboriosam maxime amet velit nam quia voluptatem labore architecto, vero, ad reprehenderit, repellat nobis magnam laudantium eveniet, iure aliquam illo.
											</div>
										</div>
									</div>
									<div className="col-md-6 mb-3">
										<div>
											<div>
												<img className="img-fluid" src={newsImg2} draggable="false"/>
											</div>
											<div className="news__title">
												заголовок новости
											</div>
											<div className="news__date">
												01.01.2023
											</div>
											<div className="news__text">
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facere laboriosam maxime amet velit nam quia voluptatem labore architecto, vero, ad reprehenderit, repellat nobis magnam laudantium eveniet, iure aliquam illo.
											</div>
										</div>
									</div>
									<div className="col-md-6 mb-3">
										<div>
											<div>
												<img className="img-fluid" src={newsImg2} draggable="false"/>
											</div>
											<div className="news__title">
												заголовок новости
											</div>
											<div className="news__date">
												01.01.2023
											</div>
											<div className="news__text">
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facere laboriosam maxime amet velit nam quia voluptatem labore architecto, vero, ad reprehenderit, repellat nobis magnam laudantium eveniet, iure aliquam illo.
											</div>
										</div>
									</div>
									<div className="col-md-6 mb-3">
										<div>
											<div>
												<img className="img-fluid" src={newsImg2} draggable="false"/>
											</div>
											<div className="news__title">
												заголовок новости
											</div>
											<div className="news__date">
												01.01.2023
											</div>
											<div className="news__text">
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facere laboriosam maxime amet velit nam quia voluptatem labore architecto, vero, ad reprehenderit, repellat nobis magnam laudantium eveniet, iure aliquam illo.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>*/}
				</div>
			</section>
		);
	
}
export default NewsSection;