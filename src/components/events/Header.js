import React, {Component} from 'react';
import headerBg from '../../img/events/headerBg.jpg';

export default class Header extends Component{
	render(){
		return(
			<header className="header events__header">
			 	<div className="wrapper">
			 		<div className="events__header_bg">
			 			<img src={headerBg} alt="bg"/>
			 		</div>
					<div className="header__title events__title" id="root">
						<h1 className="title__text">мероприятия санкт-петербургского межвузовского студенческого яхтенного клуба</h1>
					</div>
					<div className="header__line"></div>
				</div>
			</header>
		);
	}
}