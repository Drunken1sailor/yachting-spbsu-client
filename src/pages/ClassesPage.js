import React, {Component, useState, useEffect} from 'react';
import Axios from 'axios';
import Header from '../components/classes/Header';
import CoursesSection from '../components/classes/CoursesSection';
import CoursesMaterials from '../components/classes/CoursesMaterials';
import Footer from '../components/Footer';

const ClassesPage=(props)=>{
 	const [course, setCourse] = useState([]);
	useEffect(() => {
	    Axios.get('http://localhost:3001/getCourse')
	      .then((response) => {
	        setCourse(response.data);
	      })
	      .catch((error) => {
	        console.log(error);
	      });
	}, []);
	return(
		<div>
			<Header/>
			<CoursesSection course={course} userData={props.userData}/>
			<CoursesMaterials/>
			<Footer/>
		</div>
	);	
};
export default ClassesPage;