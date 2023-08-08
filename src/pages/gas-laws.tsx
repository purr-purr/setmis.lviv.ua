import { FC } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import DocsList from '@modules/common/components/DocsList';

import { gasLaws } from '@utils/data';

const GasLaws: FC = () => {
	return (
		<>
			<BlockTitle title="ПЕРЕЛІК НОРМАТИВНО-ПРАВОВИХ АКТІВ, ЩО РЕГУЛЮЮТЬ РИНОК ПРИРОДНОГО ГАЗУ" />
			<BlockTitle title="Нормативна база" type="small" />

			<DocsList data={gasLaws} />
		</>
	);
};
export default GasLaws;
