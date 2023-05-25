import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { auth } from '../components/firebase-config';
import AddNewsSection from '../components/admin/AddNewsSection';
import AddEventSection from '../components/admin/AddEventSection';
import AddClassSection from '../components/admin/AddClassSection';
import AddOrganizerSection from '../components/admin/AddOrganizerSection';

const AdminPanel = () => {

	const logout = async () => {
		await signOut(auth);
	}

	const [content, setContent] = useState(<AddNewsSection/>);

	// setContent(<AddNewsSection/>);
	const switchToNews = () => {
		setContent(<AddNewsSection/>);
	}
	const switchToEvent = () => {
		setContent(<AddEventSection/>);
	}
	const switchToClass = () => {
		setContent(<AddClassSection/>);
	}
	const switchToRegOrg = () => {
		setContent(<AddOrganizerSection/>);
	}


 	return(
		<div className="adminPanel">
				<div className="sidebar">
					<div className="sidebar-title">
						<h2 className="text-uppercase">admin-panel</h2>
					</div>
					<div onClick={switchToNews} className="sidebar-item">
						Добавить новость
					</div>
					<div onClick={switchToEvent} className="sidebar-item">
						Добавить мероприятие
					</div>
					<div onClick={switchToRegOrg} className="sidebar-item">
						Добавить организатора
					</div>
			        <Button className="sidebar-logout" onClick={logout} variant="primary" type="button">
			            Sign Out
			        </Button>
				</div>
				<div className="adminPanelSection">
					<div>
						{content}
					</div>
				</div>
		</div>
	);
}

export default AdminPanel;