import { useContext } from 'react';
import Image from 'next/image';

import { HeaderContext } from '@modules/layout/context/HeaderContext';

import CLOSE_ICON from '@public/assets/menu-cross-icon.svg';
import OPEN_ICON from '@public/assets/menu-icon.svg';

import s from './NavBurgerButton.module.scss';

const NavBurgerButton = () => {
	const { handleMobileNavMode, isMobileNavMode } = useContext(HeaderContext);

	return (
		<button
			className={s.container}
			onClick={() => handleMobileNavMode(!isMobileNavMode)}
		>
			<Image src={isMobileNavMode ? CLOSE_ICON : OPEN_ICON} alt="menu" />
		</button>
	);
};

export default NavBurgerButton;
