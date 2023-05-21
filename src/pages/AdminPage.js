import React, { useEffect, useState }  from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../components/firebase-config';
import SignIn from '../components/SignIn';
import AdminPanel from './AdminPanel.js';

const AdminPage = (props) => {
 	const [user, setUser] = useState({});
	
	useEffect(()=>{
	    onAuthStateChanged(auth, (currentUser) =>{
	        setUser(currentUser);
	    });
	}, []);

	let page;
	if (user?.email == 'admin@gmail.com') {
		page = <AdminPanel/>;
		props.visible(false);
	} else {
		page = <SignIn/>;
		props.visible(true);
	}

	return(
		<div className="adminPage">
			{page}
		</div>
	);
}
export default AdminPage;