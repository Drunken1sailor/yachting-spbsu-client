import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import newsImg from '../../img/home/news/newsImg.jpg';
import newsImg1 from '../../img/home/news/1.png';
import newsImg2 from '../../img/home/news/2.png';
import newsImg3 from '../../img/home/news/3.png';
//import newsImg4 from '../../img/home/news/';
import newsImg5 from '../../img/home/news/5.jpg';


const NewsElement = () => {
	return(
		<div>
			<div>
				<img className="img-fluid" src={newsImg5} draggable="false"/>
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
	);
};

export default class NewsSection extends Component {
	render(){
		return(
			<section className="newsSection section bg-white text-black">
				<div className="wrapper">
					<h3 className="section__title">
						<p>новости</p>
					</h3>
					<div className="newsSection__row row">
						<div className="d-flex flex-column justify-content-between col-md-6">
							<NewsElement/>
							<a className="allNews__link" href="/news">все новости →</a>
						</div>
						<div className="col-md-6 scrollableContainer overflow-auto">
							<div className="scrollable">
								<div className="row mb-3">
									<div className="col-md-6">
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
									<div className="col-md-6">
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
								<div className="row mb-3">
									<div className="col-md-6">
										<div>
			<div>
				<img className="img-fluid" src={newsImg3} draggable="false"/>
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
									<div className="col-md-6">
										<NewsElement/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}