import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LOGO from '@public/assets/logo.svg';

const Logo: FC = () => {
	return (
		<Link href="/">
			<Image src={LOGO} alt="Logo" width={104} height={26} />
		</Link>
	);
};

export default Logo;
