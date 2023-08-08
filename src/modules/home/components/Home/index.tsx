import Image from 'next/image';

import CALENDAR_ICON from 'public/assets/calendar-icon.svg';
import EMAIL_ICON from 'public/assets/email-icon.svg';
import FIRST_SCREEN_IMAGE from 'public/assets/first-screen.jpg';
import MAP_ICON from 'public/assets/map-icon.svg';
import PHONE_ICON from 'public/assets/phone-icon.svg';

import { useMediaQuery } from '@modules/common/hooks';

import {
	COMPANY_ADDRESS,
	COMPANY_EDRPOU,
	COMPANY_EMAIL,
	COMPANY_MAP_LINK,
	COMPANY_NAME,
	COMPANY_PHONE,
	COMPANY_SCHEDULE,
	MOBILE_BREAKPOINT,
} from '@utils/const';

import s from './Home.module.scss';

const Home = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const features: string[] = ['Інновації', 'Прогрес', 'Енергія', 'Комфорт', 'Ресурс'];

	return (
		<>
			<article className={s.intro}>
				<aside className={s[`intro-info`]}>
					<h1 className={s.mainTitle}>
						<span className={s.primaryText}>Світло, </span>що ніколи не гасне - разом із нашою електроенергією
					</h1>

					<ul className={s.featuresList}>
						{features.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>

					<p>
						За допомогою передових технологій та інноваційних підходів, ми динамічно реагуємо на потреби ринку, забезпечуючи найвищу якість електроенергії та надійність постачання.
					</p>
				</aside>

				<div className={s.poster}>
					<Image src={FIRST_SCREEN_IMAGE} alt="Image" />
				</div>
			</article>



			<article className={s.aboutUs}>
				<h2 className={s.subTitle}>Про нас</h2>
				<h3 className={s.blockTitle}>
					<span className={s.primaryText}>Сила енергії, </span>
					що рухає світ: дізнайтесь про нас
				</h3>

				<ul className={s[`aboutUs-desc`]}>
					<li>
						{COMPANY_NAME} - це не просто постачальник електроенергії, а співтворець вашого комфорту, прогресу та майбутнього. Наша місія полягає в тому, щоб забезпечити вас електроенергію безперебійно та надійно, допомагаючи реалізовувати ваші цілі та завдання. Наші співробітники - це відданий та досвідчений колектив, який забезпечує найвищий рівень обслуговування та консультаційних послуг.
					</li>
					<li>
						Ми слухаємо наших клієнтів та партнерів, створюємо персоналізовані рішення та підтримуємо вас на кожному кроці вашого шляху. Звертаючись до нашої компанії, ви отримуєте доступ до персоналізованих рішень, які відповідають вашим унікальним потребам та сприяють вашому зростанню. Ми розуміємо важливість індивідуального підходу та надаємо вам всебічну підтримку на кожному етапі співпраці.
					</li>
				</ul>
			</article>

			<article className={s.contacts} id="contacts">
				<h2 className={s.subTitle}>Контакти</h2>
				<h3 className={s.blockTitle}>
					<span className={s.primaryText}>Енергетичні експерти,</span>
					 завжди на зв&apos;язку
				</h3>

				<ul className={s[`contacts-list`]}>
					<li>{COMPANY_NAME + ', ' + COMPANY_EDRPOU}</li>

					{!isMobile && <li />}

					<li>
						<a className={s[`contacts-iconContainer`]} href={`tel:${COMPANY_PHONE}`}>
							<Image src={PHONE_ICON} alt={COMPANY_PHONE} />
							{COMPANY_PHONE}
						</a>
					</li>
					<li>
						<a
							className={s[`contacts-iconContainer`]}
							target="_blank"
							rel="noreferrer"
							href={`mailto:${COMPANY_EMAIL}`}
						>
							<Image src={EMAIL_ICON} alt={COMPANY_EMAIL} />
							{COMPANY_EMAIL}
						</a>
					</li>
					<li className={s[`contacts-iconContainer`]}>
						<Image src={CALENDAR_ICON} alt={COMPANY_SCHEDULE} />
						{COMPANY_SCHEDULE}
					</li>
					<li className={s[`contacts-iconContainer`]}>
						<Image src={MAP_ICON} alt={COMPANY_ADDRESS} />
						{COMPANY_ADDRESS}
					</li>
				</ul>

				<iframe
					className={s[`contacts-map`]}
					src={COMPANY_MAP_LINK}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</article>
		</>
	);
};

export default Home;
