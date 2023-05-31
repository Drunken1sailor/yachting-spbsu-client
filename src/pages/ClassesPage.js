import React, {Component, useState, useEffect} from 'react';
import Axios from 'axios';
import Header from '../components/classes/Header';
import CoursesSection from '../components/classes/CoursesSection';
import CoursesMaterials from '../components/classes/CoursesMaterials';
import Footer from '../components/Footer';

const ClassesPage=(props)=>{
	return(
		<div>
			<Header/>
			<CoursesSection userData={props.userData}/>
			<CoursesMaterials/>
			<Footer/>
		</div>
	);	
};
export default ClassesPage;