import React, {Component,useState,useEffect} from 'react';
import Axios from 'axios';
import userImg from '../img/lk/user.png';
import ServerIP from '../components/ServerIP';
const url = `http://${ServerIP}:3001/getNews`;
const imgLink = `http://${ServerIP}:3001`;

const AllNewsPage = ()=>{
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
		<section className="bg-white text-black">
			<div className="wrapper participantLk">
				<h3 className="section__title">
					<p>Новости</p>
				</h3>
		     	<div className="newsSection__row row scrollableContainer overflow-auto">

				{news.length>0 && news.map((newsElement) => (
				          	
					<div key={newsElement.newsId} className="newsElement col-sm-6 col-md-4 col-lg-3 ">
						{(() => {
							let newsURL = `/news?newsID=${newsElement.newsId}`;
						    let imgPath = imgLink + newsElement.img.replace('./src', '');
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
		        ))}
				</div>
			</div>
		</section>
	);
}
export default AllNewsPage;