import React, {Component} from 'react';
import Header from '../components/classes/Header';
import CoursesSection from '../components/classes/CoursesSection';
import CoursesMaterials from '../components/classes/CoursesMaterials';
import Footer from '../components/Footer';

export default class ClassesPage extends Component{
	render(){
  		return(
  			<div>
  				<Header/>
  				<CoursesSection/>
  				<CoursesMaterials/>
				<Footer/>
  			</div>
  		);
	}
}