import { FC } from 'react';
import Image from 'next/image';

import cn from 'classnames';

import { getDocsPath } from '@utils/formatters';
import type { IDocsList } from '@utils/types';

import DOWNLOAD_ICON from '@public/assets/download-icon.svg';

import s from './DocsList.module.scss';

const DocsList: FC<{
	type?: 'link' | 'doc';
	data: IDocsList[];
}> = ({ type = 'link', data }) => {
	const getResourcePath = (value: string) => {
		return type === 'doc' ? getDocsPath(value) : value;
	};

	return (
		<ul className={cn(s.container, type === 'doc' ? s.typeDoc : s.typeLink)}>
			{data.map(
				(item) =>
					getResourcePath(item.path) && (
						<li key={item.title}>
							<a
								rel="noopener noreferrer"
								href={getResourcePath(item.path)}
								target="_blank"
							>
								{type === 'doc' && <Image src={DOWNLOAD_ICON} alt="Download" />}
								{item.title}
							</a>
						</li>
					),
			)}
		</ul>
	);
};

export default DocsList;
