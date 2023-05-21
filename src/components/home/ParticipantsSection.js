import React, {Component} from 'react';
import bonchImg from '../../img/home/participants/bonch.jpg';
import letiImg from '../../img/home/participants/leti.jpg';
import politechImg from '../../img/home/participants/politech.jpg';

export default class ParticipantsSection extends Component{
	render(){
		return(
			<section className="participantsSection section text-white">
				<div className="wrapper">
					<h3 className="section__title">
						участвующие вузы
					</h3>
					<div className="d-flex justify-content-center">
						<a class="universities__img" href="#">
							<img src={bonchImg} alt="СПБГУТ" draggable="false"/>
						</a>
						<a class="universities__img" href="#">
							<img src={letiImg} alt="ЛЭТИ" draggable="false"/>
						</a>
						<a class="universities__img" href="#">
							<img src={politechImg} alt="ПОЛИТЕХ" draggable="false"/>
						</a>
					</div>
				</div>
			</section>
		);
	}
}