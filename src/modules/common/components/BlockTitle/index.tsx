import { createElement, FC } from 'react';

import cn from 'classnames';

import s from './BlockTitle.module.scss';

const BlockTitle: FC<{
	title: string;
	type?: 'main' | 'middle' | 'small';
}> = ({ title, type = 'main' }) => {
	const classNameList = cn(s.container, s[type]);

	return createElement(
		type === 'middle' ? 'h2' : type === 'small' ? 'h3' : 'h1',
		{
			className: classNameList,
		},
		title,
	);
};

export default BlockTitle;
