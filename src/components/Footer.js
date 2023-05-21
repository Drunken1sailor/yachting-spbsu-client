import React, {Component} from 'react';
import mailImg from '../img/home/footer/mail.png';
import phoneImg from '../img/home/footer/telephone.png';
import homeImg from '../img/home/footer/home.png';
import vkImg from '../img/home/footer/vkontakte.png';

export default class Footer extends Component{
	render(){
		return(
			<footer className="section bg-white text-black">
				<div className="wrapper">
					<div className="contacts">
						<div class="mail contact mb-3">
							<img className="d-inline" src={mailImg}/>
							<p className="d-inline">info@gmail.com</p>
						</div>
						<div class="telephone contact mb-3">
							<img className="d-inline" src={phoneImg}/>
							<p className="d-inline">+79128000000</p>
						</div>
						<div class="place contact mb-3">
							<img className="d-inline" src={homeImg}/>
							<p className="d-inline">St. Petersburg</p>
						</div>
						<a class="vkontakte" href="#">
							<img src={vkImg}/>
						</a>
					</div>
				</div>
			</footer>
		);
	}
} 