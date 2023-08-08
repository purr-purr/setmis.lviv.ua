import { FC, useContext } from 'react';
import Link from 'next/link';

import { HeaderContext } from '@modules/layout/context/HeaderContext';

import s from './NavItem.module.scss';

interface INavPageItemProps {
	title: string;
	path: string;
	onClick: () => void;
}

const NavItem: FC<INavPageItemProps> = ({ title, path, onClick }) => {
	const { handleMobileNavMode } = useContext(HeaderContext);

	const handleLinkClick = () => {
		onClick();
		handleMobileNavMode(false);
	};

	return (
		<li>
			<Link className={s.container} onClick={handleLinkClick} href={path}>
				{title}
			</Link>
		</li>
	);
};

export default NavItem;
