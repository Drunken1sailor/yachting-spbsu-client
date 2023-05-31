import React, {useState, useEffect} from 'react';
import { Button, Alert, Table } from 'react-bootstrap';
import Axios from 'axios';
import userImg from '../../img/lk/user.png';
import ServerIP from '../ServerIP';
const urlLogout = `http://${ServerIP}:3001/logout`;
const urlGetParticipants = `http://${ServerIP}:3001/participants`;
const getCourseUrl = `http://${ServerIP}:3001/getCourse`;

const OrgLK = (props)=>{
	const name = props.userData.secondName+" "+props.userData.firstName;
	const [course, setCourse] = useState([]);
 	const [participants, setParticipants] = useState([]);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	let participantName = "";

	// useEffect(() => {
	// Axios.post(url, {participantID: props.userData.participantID}, { headers: { 'Content-Type': 'application/json' } })
 //      .then((response) => {
 //        console.log(response.data);
 //        setCourseData(response.data);
 //      })
 //      .catch((error) => {
 //        console.log(error);
 //      });
 //      }, []);
 	useEffect(() => {
		Axios.get(urlGetParticipants)
		.then((response) => {
		setParticipants(response.data);
		})
		.catch((error) => {
		console.log(error);
		});

		Axios.get(getCourseUrl)
		.then((response) => {
		setCourse(response.data);
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
					<p>личный кабинет организатора</p>
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
							          <th>Фамилия, имя</th>
							          <th>Email</th>
							          {/* Другие заголовки столбцов */}
							        </tr>
							      </thead>
							      <tbody>
							        {participants.map((participant, index) => (

							          <tr key={participant.id}>
							          {(() => {
							          	participantName = participant.secondName + " " + participant.firstName;
							          })()}
							            <td>{index + 1}</td>
							            <td>КУРС ПО ЯХТИНГУ И ПАРУСНОМУ СПОРТУ </td>
							            <td>{participantName}</td>
							            <td>{participant.email}</td>
							            {/* Другие ячейки */}
							          </tr>
							        ))}
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
export default OrgLK;