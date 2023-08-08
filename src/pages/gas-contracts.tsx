import { FC } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import DocsList from '@modules/common/components/DocsList';

import { gasContracts } from '@utils/data';

const CasContracts: FC = () => {
	return (
		<>
			<BlockTitle title="ДОГОВОРИ ПРО ПОСТАЧАННЯ ПРИРОДНОГО ГАЗУ" />

			<DocsList type="doc" data={gasContracts} />
		</>
	);
};
export default CasContracts;
