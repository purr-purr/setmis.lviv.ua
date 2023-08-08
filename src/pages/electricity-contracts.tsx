import { FC } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import DocsList from '@modules/common/components/DocsList';

import { electricityContracts } from '@utils/data';

const ElectricityContracts: FC = () => {
	return (
		<>
			<BlockTitle title="ДОГОВОРИ ПРО ПОСТАЧАННЯ ЕЛЕКТРИЧНОЇ ЕНЕРГІЇ" />

			<DocsList type="doc" data={electricityContracts} />
		</>
	);
};
export default ElectricityContracts;
