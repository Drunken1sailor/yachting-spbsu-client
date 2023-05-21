import React, {Component} from 'react';
import Header from '../components/home/Header';
import AboutSection from '../components/home/AboutSection';
import ParallaxSection from '../components/home/ParallaxSection';
import EventsSection from '../components/home/EventsSection';
import NewsSection from '../components/home/NewsSection';
import ParticipantsSection from '../components/home/ParticipantsSection';
import Footer from '../components/Footer';

export default class HomePage extends Component{
	render(){
		return (
			<div>
				<Header/>
				<AboutSection/>
				<EventsSection/>
				<NewsSection/>
				<ParticipantsSection/>
				<Footer/>
			</div>
  		);
	}
}
