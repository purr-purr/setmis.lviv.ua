import Logo from '@modules/common/components/Logo';

import { APP_AUTHOR_SIGNATURE, APP_AUTHOR_WEBSITE } from '@utils/const';

import s from './Footer.module.scss';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={s.container}>
			<Logo />
			<article className={s.signature}>
				<p>Всі права захищені/{currentYear}</p>
				<p>
					Website created by{' '}
					<a target="_blank" rel="noreferrer" href={APP_AUTHOR_WEBSITE}>
						{APP_AUTHOR_SIGNATURE}
					</a>
				</p>
			</article>
		</footer>
	);
};

export default Footer;
