import React, {Component,useEffect, useState} from 'react';
import { Button,Alert } from 'react-bootstrap';
import Axios from 'axios';
import userImg from '../img/lk/user.png';
import ServerIP from '../components/ServerIP.js';
const url = `http://${ServerIP}:3001/lk`;
const urlLogout = `http://${ServerIP}:3001/logout`;

const LkPage = (props)=>{
	const name = props.userData.secondName+" "+props.userData.firstName;
	const [courseData, setCourseData] = useState([]);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
	Axios.post(url, {participantID: props.userData.participantID}, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        console.log(response.data);
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
						<Button variant="primary" onClick={handleClickExit}>ВЫЙТИ</Button>
					</div>
					<div className="col-md-8">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tempora reprehenderit, illo! Beatae rerum velit obcaecati quibusdam ullam sed similique vel nostrum, necessitatibus itaque quos hic quam pariatur. Similique, dolore?
						<div>
							<div className="course__subtitle">
								Курсы:
							</div>
							<div>
								
							</div>
						</div>	
					</div>
				</div>
			</div>
		</section>
	);
}
export default LkPage;