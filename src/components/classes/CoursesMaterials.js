import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import courseImg from '../../img/events/event.jpg';
import calendarImg from '../../img/classes/calendar.png';
import clockImg from '../../img/classes/clock.png';
import {Button} from 'react-bootstrap';

export default class CoursesMaterials extends Component {
	render(){
		return(
			<section className="eventsSection section bg-white text-black">
				<div className="wrapper">
					<div className="mb-5">
						<h3 className="section__title">
							<p>2023 год. Капитан парусно-моторного судна ГИМС:</p>
						</h3>
						<h4 className="courses__title">
							презентации:
						</h4>
						<a className="courses__link mb-3" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Вводное занятие</a>
						<h4 className="courses__title">
							видеозаписи занятий:
						</h4>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_1_2023-03-27">27.03.2023 Вводное занятие.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_2_2023-03-29">29.03.2023 Основы теории. Элементы конструкции.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_3_2023-04-03">29.03.2023 Основы теории. Элементы конструкции.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_4_2023-04-05">05.04.2023 Элементы конструкции ммс.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_5_2023-04-07">07.04.2023 Уход за двигателем мпс ммс. Уход за парусами. Спасательные средства.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_6_2023-04-10">10.04.2023 Безопасность. Учет ветра и течения ммс.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_6_2023-04-28">28.04.2023 Учет ветра и течения ммс и пмс.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_7_2023-05-03">03.05.2023 Учет ветра и течения пмс.</a>
					</div>
					<div className="mb-5">
						<h3 className="section__title">
							<p>2022 год. Квалифицированный член экипажа:</p>
						</h3>
						<h4 className="courses__title">
							презентации:
						</h4>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Устройство яхты.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Теория яхты.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Гидродинамика и настройка парусов.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Управление парусно-моторным судном.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Гидрометеорология.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Навигация.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Лоция.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Сигнализация и связь на яхте.</a>
						<a className="courses__link mb-3" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Такелажное дело и парусные работы.</a>
						<h4 className="courses__title">
							видеозаписи занятий:
						</h4>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_1_2023-03-27">22.02.2022 Введение. Понятие о квалификации яхтсменов.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_2_2023-03-29">25.02.2022 Устройство парусно-моторного судна. Занятие 1.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_3_2023-04-03">01.03.2022 Основы теории парусной яхты. Занятие 1.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_4_2023-04-05">04.03.2022 Основы теории парусной яхты. Занятие 2. Гидродинамика и настройка парусов.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_5_2023-04-07">11.03.2022 Основы теории парусной яхты. Занятие 3.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_6_2023-04-10">18.03.2022 Устройство парусно-моторного судна. Занятие 2. Системы.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_6_2023-04-28">22.03.2022 Управление парусно-моторной яхтой. Занятие 1.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_7_2023-05-03">25.03.2022 Гидрометеорология. Занятие 1.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_1_2023-03-27">29.03.2022 Управление парусно-моторной яхтой. Занятие 2.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_2_2023-03-29">12.04.2022 Гидрометеорология. Занятие 4.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_3_2023-04-03">15.04.2022 Навигация. Занятие 1.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_4_2023-04-05">22.04.2022 Лоция.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_5_2023-04-07">26.04.2022 Сигнализация и связь на яхте.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_6_2023-04-10">29.04.2022 МППСС 72</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_6_2023-04-28">06.05.2022 Такелажное дело и парусные работы. Занятие 1.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_7_2023-05-03">13.05.2022 Такелажное дело и парусные работы. Занятие 2.</a>
					</div>
					<div className="mb-5">
						<h3 className="section__title">
							<p>2021 год. Квалифицированный член экипажа:</p>
						</h3>
						<h4 className="courses__title">
							презентации:
						</h4>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Устройство яхты.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Гидрометеорология</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Управление парусно-моторным судном. Занятие 1.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Управление парусно-моторным судном. Занятие 2.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Способы личного выживания и оказание первой помощи.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Теория  яхты</a>
						<a className="courses__link mb-3" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">Сигнализация и связь на яхте.</a>
					
						<h4 className="courses__title">
							Записи вебинаров:
						</h4>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">02 марта 2021 г. Введение. Основы квалификации яхтсменов.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">04 марта 2021 г. Устройство парусно-моторного судна. Занятие 1.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">07 марта 2021 г. Устройство парусно-моторного судна. Занятие 2.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_vvodn_2023">09 марта 2021 г. Гидрометеорология. Занятие 1.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_1_2023-03-27">11 марта 2021 г. Гидрометеорология. Занятие 2.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_2_2023-03-29">14 марта 2021 г. Управление парусно-моторным судном. Занятие 1.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_3_2023-04-03">16 марта 2021 г. Способы личного выживания и оказание первой помощи.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_4_2023-04-05">18 марта 2021 г. Теория яхты. Занятие 1. Мореходные качества.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_5_2023-04-07">21 марта 2021 г. Управление парусно-моторным судном. Занятие 2.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_6_2023-04-10">23 марта 2021 г. Теория яхты. Занятие 2. Силы на парусах и корпусе.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_6_2023-04-28">25 марта 2021 г. Теория яхты. Занятие 3. Настройка парусов.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_7_2023-05-03">28 марта 2021 г. Сигнализация и связь на яхте.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_1_2023-03-27">30 марта 2021 г. Штормование. Аварии. Особые случаи плавания.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_2_2023-03-29">01 апреля 2021 г. Эксплуатация парусно-моторного судна.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_3_2023-04-03">04 апреля 2021 г. Основы навигации.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_4_2023-04-05">06 апреля 2021 г. Правила парусных гонок.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_5_2023-04-07">08 апреля 2021 г. Лоция.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_6_2023-04-10">11 апреля 2021 г. МППСС-72.</a>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/gims_6_2023-04-28">13 апреля 2021 г. Такелажное дело. Занятие 1.</a>
						<a className="courses__link mb-3" href="https://pruffme.com/landing/veya7/gims_7_2023-05-03">15 апреля 2021 г. Такелажное дело. Занятие 2.</a>
					
						<h4 className="courses__title">
							Тесты:
						</h4>
						<a className="courses__link" href="https://pruffme.com/landing/veya7/msyc_test_ustroystvo">Устройство парусно-моторного судна</a>
						<a className="courses__link mb-3" href="https://pruffme.com/landing/veya7/test_meteo_crew">Гидрометеорология</a>
					
					</div>
					<div className="mb-5">
						<h3 className="section__title">
							<p>Парусные школы</p>
						</h3>
						<a className="courses__link" href="https://vk.com/sailingcenter">ГУМРФ им. адмирала С.О.Макарова</a>
						<a className="courses__link" href="https://t.me/upwindschool">СКруче к ветру</a>
						<a className="courses__link" href="https://vk.com/sportyachts">SportYachts</a>
						<a className="courses__link mb-3" href="https://vk.com/zigzag.club">Парусный клуб ZigZag</a>
					</div>
					<div>
						<h3 className="section__title">
							<p>Дружественные яхты</p>
						</h3>
						<a className="courses__link" href="https://vk.com/club1427180">Яхта "Фея"</a>
						<a className="courses__link" href="https://vk.com/variagstyle">Яхта "Варяг"</a>
						<a className="courses__link" href="https://vk.com/lugal60">Яхта "Луга"</a>
						<a className="courses__link" href="https://vk.com/club10580864">Яхта "Сольвейг"</a>
						<a className="courses__link" href="https://vk.com/club3858128">Яхта "Звезда"</a>
						<a className="courses__link" href="https://vk.com/onegal6">Яхта "Онега"</a>
						<a className="courses__link" href="https://vk.com/nika_rus668">Яхта "Ника"</a>
						<a className="courses__link" href="https://vk.com/bluebirdspb">Яхта "Синяя птица"</a>
						<a className="courses__link" href="https://vk.com/rus1118">Яхта "Фарт"</a>
						<a className="courses__link mb-3" href="https://t.me/veya_7">Яхта "Вея"</a>
					</div>
				</div>
			</section>
		);
	}
}