import React, {Component} from 'react';
import Header from '../components/events/Header';
import EventsSection from '../components/events/EventsSection';
import Footer from '../components/Footer';

export default class EventsPage extends Component{
	render(){
  		return(
  			<div>
  				<Header/>
  				<EventsSection/>
				<Footer/>
  			</div>
  		);
	}
}