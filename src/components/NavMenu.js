import React, {Component, useState, useEffect} from 'react';
import logo from '../img/home/header/logo.png';
import loupeImg from '../img/home/header/loupe.png';
import loginImg from '../img/user.png'
import {Navbar, Container, Nav, Form, FormControl,Button, Image} from 'react-bootstrap';

// const UserAuthWindow = () => {
// 	return(
// 		<div className="userAuthWindow_bg">
// 			<div className="userAuthWindow">
// 				<div className="signIn wrapper">
// 			      <div className="w-50">
// 			        <h2 className="text-uppercase text-center">Sign In</h2>
// 			        <Form onSubmit={handleSubmit}>
// 			          {success && <Alert variant="success">Success</Alert>}
// 			          {error && <Alert variant="danger">{error}</Alert>}
// 			          <Form.Group controlId="formBasicEmail">
// 			            <Form.Label>Email address</Form.Label>
// 			            <Form.Control
// 			              type="email"
// 			              placeholder="Enter email"
// 			              value={email}
// 			              onChange={(event) => setEmail(event.target.value)}
// 			              required
// 			            />
// 			          </Form.Group>
// 			          <Form.Group controlId="formBasicPassword">
// 			            <Form.Label>Password</Form.Label>
// 			            <Form.Control
// 			              type="password"
// 			              placeholder="Password"
// 			              value={password}
// 			              onChange={(event) => setPassword(event.target.value)}
// 			              required
// 			            />
// 			          </Form.Group>
// 			          <Button variant="primary" type="submit">
// 			            Sign In
// 			          </Button>
// 			        </Form>
// 			      </div>
// 			    </div>
// 			</div>
// 		</div>
// 	);
// };

const NavMenu = (props) => {
  	const [search, setSearch] = useState("");
  	let isOrganizer = false;
	var authClickBoolean = false;

	const handleClick = () => {
		authClickBoolean = !authClickBoolean;
   		props.visible(authClickBoolean);
  	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.setIsVisibleSearch(true);
	};

	useEffect(()=>{
		if('mail' in props.userData){
			isOrganizer = true;
		}else{
			isOrganizer = false;
		}
	},[]);

  		return(
  			<Navbar className="navbar bg-opacity-75 fixed-top" collapseOnSelect expand="md" bg="dark" variant="dark">

  				<Container className="w-80 mx-auto">
  					<div className="">
						<Navbar.Brand href="/">
							<img src={logo} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
						</Navbar.Brand>
					</div>
  					<div className="">
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse className="col navbarCollapse" id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/">О нас</Nav.Link>
								<Nav.Link href="/classes">Занятия</Nav.Link>
								<Nav.Link href="/events">Мероприятия</Nav.Link>
								<Nav.Link href="/contacts">Контакты</Nav.Link>
							</Nav>
							<Form onSubmit={handleSubmit} className="navForm inline">
								<FormControl 
									type="text"
									placeholder="Search"
									className="mr-sm-5 test"
									onChange={(event) => {props.setIsVisibleSearch(true); props.changeSearchValue(event.target.value)}}
								/>
								<Button  type="submit" variant="none" className="searchBtn" onChange={(event) => setSearch(event.target.value)}>
									<Image className="navImg" src={loupeImg} alt="Поиск" width="30" height="30"/>
								</Button>
							</Form>

							{!props.userName && <Button  onClick={handleClick} variant="none" className="searchBtn">
								<Image className="navImg" src={loginImg} alt="Авторизация" width="30" height="30"/>
							</Button>}
							{isOrganizer && props.userName && <a href="/orgLk" className="userLogo">{props.userName}</a>}
							{!isOrganizer && props.userName && <a href="/lk" className="userLogo">{props.userName}</a>}
						</Navbar.Collapse>
					</div>
					
  				</Container>
  			</Navbar>
  		);
	
};
export default NavMenu;