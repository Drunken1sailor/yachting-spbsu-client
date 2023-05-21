import React, {Component} from 'react';
import parallaxImg from '../../img/home/parallax/parallax.jpg';

export default class NewsSection extends Component {
	render(){
		return(
			<section className="parallaxSection">
				<div className="parallaxImg">
					<img src={parallaxImg} alt="parallaxImg"/>
				</div>
			</section>
		);
	}
}