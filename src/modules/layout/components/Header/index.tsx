import Logo from '@modules/common/components/Logo';
import { HeaderContextWrapper } from '@modules/layout/context/HeaderContext';
import Nav from '@modules/nav/components/Nav';
import NavButton from '@modules/nav/components/NavBurgerButton';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';

import s from './Header.module.scss';

const Header = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	return (
		<header className={s.container}>
			<Logo />
			<HeaderContextWrapper>
				<Nav />
				{isMobile && <NavButton />}
			</HeaderContextWrapper>
		</header>
	);
};

export default Header;
