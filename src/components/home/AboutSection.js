import React, {Component} from 'react';

export default class AboutSection extends Component{
	render(){
		return(
			<section className="section bg-white text-black">
				<div className="wrapper">
					<h3 className="section__title">
						<p>о нас</p>
					</h3>
					<div className="aboutSection__text regularText">
						<p>Историческое название "Секция яхтинга СПбГУ" (до 28.01.2021г). Бесплатное теоретическое обучение парусному спорту по программе подготовки квалифицированных яхтсменов</p>
					</div>
					<div className="row px-5 mb-3 text-justify">
						<div className="col-md-6">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tempora reprehenderit, illo! Beatae rerum velit obcaecati quibusdam ullam sed similique vel nostrum, necessitatibus itaque quos hic quam pariatur. Similique, dolore?
						</div>
						<div className="col-md-6">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tempora reprehenderit, illo! Beatae rerum velit obcaecati quibusdam ullam sed similique vel nostrum, necessitatibus itaque quos hic quam pariatur. Similique, dolore?
						</div>
					</div>
					<div className="row px-5 text-justify">
						<div className="col-md-6">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tempora reprehenderit, illo! Beatae rerum velit obcaecati quibusdam ullam sed similique vel nostrum, necessitatibus itaque quos hic quam pariatur. Similique, dolore?
						</div>
						<div className="col-md-6">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tempora reprehenderit, illo! Beatae rerum velit obcaecati quibusdam ullam sed similique vel nostrum, necessitatibus itaque quos hic quam pariatur. Similique, dolore?
						</div>
					</div>
				</div>
			</section>
		);
	}
}