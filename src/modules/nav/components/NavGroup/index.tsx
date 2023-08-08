import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { HeaderContext } from '@modules/layout/context/HeaderContext';
import ARROW_ICON from 'public/assets/arrow-icon.svg';

import s from './NavGroup.module.scss';

const NavGroup: FC<{
	title: string;
	group: { [key: string]: string }[];
	isOpen: boolean;
	onClick: () => void;
}> = ({ title, group, isOpen = false, onClick }) => {
	const { handleMobileNavMode } = useContext(HeaderContext);

	const [isOpenToggled, setIsOpenToggled] = useState(false);
	const dropdownRef = useRef<HTMLLIElement | null>(null);

	useEffect(() => {
		setIsOpenToggled(isOpen);

		const handleDocumentClick = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				!isOpenToggled && setIsOpenToggled(false);
			} else {
				setIsOpenToggled(true);
			}
		};

		if (isOpen) {
			document.addEventListener('click', handleDocumentClick);
		} else {
			document.removeEventListener('click', handleDocumentClick);
		}

		return () => {
			document.removeEventListener('click', handleDocumentClick);
		};
	}, [isOpen]);

	const handleGroupItemClick = () => {
		onClick();
		handleMobileNavMode(false);
	};

	return (
		<li ref={dropdownRef} className={s.container}>
			<button onClick={onClick}>
				{title}
				<Image src={ARROW_ICON} alt="icon" />
			</button>
			{isOpenToggled && (
				<ul className={s.list}>
					{group.map((item) => (
						<li key={item.path} onClick={handleGroupItemClick}>
							<Link href={item.path}>{item.title}</Link>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default NavGroup;
