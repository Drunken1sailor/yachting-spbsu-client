import React, {Component,useEffect, useState} from 'react';
import { Button,Alert,Table } from 'react-bootstrap';
import Axios from 'axios';
import userImg from '../img/lk/user.png';
import ServerIP from '../components/ServerIP';
const getCoursesUrl = `http://${ServerIP}:3001/getCourses`;
const urlLogout = `http://${ServerIP}:3001/logout`;

const LkPage = (props)=>{
	const name = props.userData.secondName+" "+props.userData.firstName;
	const [courseData, setCourseData] = useState([]);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	let courseDate = "";

	useEffect(() => {
		Axios.post(getCoursesUrl, {participantID: props.userData.participantID})
	      .then((response) => {
	      	setCourseData(response.data);
	      })
	      .catch((error) => {
	        console.log(error);
	      });
	}, []);

	const handleClickExit = (event) => {
	    setError("");
	    setSuccess(false);
    	event.preventDefault();
		Axios.post(urlLogout).then((response)=>{
			if(response.data.message){
	          	setError(response.data.message);
	        }else{
	    		window.location.href = '/';
	         	setSuccess(true);
	        }
		});
	}
	return(
		<section className="section bg-white text-black">
			<div className="wrapper participantLk">
				<h3 className="section__title">
					<p>личный кабинет</p>
				</h3>
				<div className="row px-5 mb-3 text-justify">
					<div className="col-md-4">
						<div className="avatarImg">
							<img src={userImg} alt="avatar"/>
						</div>
						<div className="mb-3">{name}</div>
						{success && <Alert variant="success">Success</Alert>}
						{error && <Alert variant="danger">{error}</Alert>}
						<Button className="logoutBtn" variant="primary" onClick={handleClickExit}>ВЫЙТИ</Button>
					</div>
					<div className="col-md-8">
						<div>
							<div className="mb-3 course__subtitle">
								Курсы:
							</div>
							<div>
								<Table striped bordered hover>
							      <thead>
							        <tr>
							          <th>#</th>
							          <th>Название курса</th>
							          <th>Дата проведения</th>
							          {/* Другие заголовки столбцов */}
							        </tr>
							      </thead>
							      <tbody>
							        {courseData.length>0 && (courseData.map((course, index) => (

							          <tr key={course.id}>
							          {(() => {
							          	courseDate = course.date.replace("T21:00:00.000Z","")+" "+course.beginTime;
							          })()}
							            <td>{index + 1}</td>
							            <td>{course.title}</td>
							            <td>{courseDate}</td>
							          </tr>
							        )))}
							      </tbody>
							    </Table>
							</div>
						</div>	
					</div>
				</div>
			</div>
		</section>
	);
}
export default LkPage;