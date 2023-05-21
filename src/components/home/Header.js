import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import headerBgMp4 from '../../videos/index/header/bg.mp4';
import headerBgImg from '../../img/home/header/bg.jpg';

export default class Header extends Component{
	render(){
		return(
			<header className="header">
			 	<div className="wrapper">
					<div className="header__bg">
						
						<img src={headerBgImg} alt="sails"/>
					</div>
					<div className="header__title home__title__text" id="root">
						<h1 className="title__text">санкт-петербургский межвузовский студенческий яхтенный клуб</h1>
						<p className="subtitle">курсы по яхтингу и парусному спорту</p>
					</div>
				</div>
			</header>
		);
	}
}