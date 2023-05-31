import React, {Component} from 'react';
import Footer from '../components/Footer';
import vkImg from '../img/contacts/vk.png';
import telegramImg from '../img/contacts/telegram.png';
import facebookImg from '../img/contacts/facebook.png';

export default class ContactsPage extends Component{
	render(){
  		return(
  			<div>
				<div className="wrapper contacts">
					<h4 className="courses__title contacts__title mb-1">
						Межвузовский студенческий яхтенный клуб:
					</h4>
					<div className="contacts__links">
						<a className="contacts__link" href="http://t.me/spbyf">
							Группа
							<img className="contacts__linkImg" src={telegramImg} alt="telegram"/>
						</a>
						<a className="contacts__link" href="https://vk.com/yachting_spbsu">
							Группа
							<img className="contacts__linkImg" src={vkImg} alt="telegram"/>
						</a>
						<a className="contacts__link" href="https://www.facebook.com/spbyf">
							Страница
							<img className="contacts__linkImg" src={facebookImg} alt="telegram"/>
						</a>
					</div>
					<h4 className="courses__title contacts__title mb-1">
						Квалифицированный член экипажа:
					</h4>
					<div className="contacts__links">
						<a className="contacts__link" href="http://t.me/sailing_spbsu">
							Группа
							<img className="contacts__linkImg" src={telegramImg} alt="telegram"/>
						</a>
						<a className="contacts__link" href="https://vk.com/spbyf">
							Страница
							<img className="contacts__linkImg" src={vkImg} alt="telegram"/>
						</a>
					</div>
					<h4 className="courses__title contacts__title mb-1">
						Санкт-Петербургский речной яхт-клуб (СПбРЯК):
					</h4>
					<div className="contacts__links">
						<a className="contacts__link" href="https://vk.com/riveryc">
							Страница
							<img className="contacts__linkImg" src={vkImg} alt="telegram"/>
						</a>
						<a className="contacts__link" href="https://www.facebook.com/spbryc.ru">
							Страница
							<img className="contacts__linkImg" src={facebookImg} alt="telegram"/>
						</a>
					</div>
					<h4 className="courses__title contacts__title mb-1">
						Капитаны яхт:
					</h4>
					<div className="contacts__links">
						<a className="contacts__link" href="http://t.me/fpsspb">
							Канал
							<img className="contacts__linkImg" src={telegramImg} alt="telegram"/>
						</a>
					</div>
					<p>Обучение проводится онлайн дистанционно и в учебном классе одновременно.
Для прохождения практики организуются встречи с капитанами и представителями экипажей парусных яхт,  экскурсии, дни открытых дверей.
</p>
					<p><span className="contacts__address">Адрес:</span> Санкт-Петербург, Петровская коса, д.9.</p>
					<p className="lastContactsText text-center">Поддержите это обучение донатом или пожертвованием создателю
по номеру +79119377330 Сбер, ВТБ, Альфа, СБП 
<a href="https://t.me/Nikosmi"> Николай Владиславович С.</a>
или
в <a href="https://spbryc.ru/">РОО "СК яхтсменов СПб.РЯК"</a> по <a href="https://spbryc.ru/Finansovaya-informatsiya-ROO-yahtsmenov/tselevoj-vznos-na-organizatsiyu-podgotovki-kvalifitsirovannykh-yakhtsmenov.html"> ссылке</a>. 
Занимающихся в СПбРЯК приглашаем вступить в члены общественной организации.</p>
	  			</div>
  			</div>
  		);
	}
}