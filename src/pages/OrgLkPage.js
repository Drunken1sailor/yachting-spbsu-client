import React, {useState, useEffect} from 'react';
import OrgAuth from '../components/orglk/OrgAuth';
import OrgLK from '../components/orglk/OrgLK';
import Axios from 'axios';
import ServerIP from '../components/ServerIP';
const url = `http://${ServerIP}:3001/login`;

const OrgLkPage = (props)=>{
  	const [authStatus, setAuthStatus] = useState(false);

	Axios.defaults.withCredentials = true;
	  useEffect(() => {
	    Axios.get(url).then((response)=>{
	      if(response.data.loggedIn == true){
	      	setAuthStatus(true);
	      }else{
	      	setAuthStatus(false);
	      }
	    })
	  }, []);



	let page;
	if (authStatus) {
		page = <OrgLK userData={props.userData}/>;
	} else {
		page = <OrgAuth/>;
	}
	return(

		<div className="adminPage">
			{page}
		</div>
	);
}
export default OrgLkPage;