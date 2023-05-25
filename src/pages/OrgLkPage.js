import React, {Component} from 'react';
import OrgAuth from '../components/orglk/OrgAuth';
import OrgLK from '../components/orglk/OrgLK';

const OrgLkPage = ()=>{
	
	// if (user?.email == 'admin@gmail.com') {
	// 	page = <OrgLK/>;
	// 	props.visible(false);
	// } else {
	// 	page = <OrgAuth/>;
	// 	props.visible(true);
	// }
	return(

		<div className="adminPage">
			{OrgAuth}
		</div>
	);
}
export default OrgLkPage;