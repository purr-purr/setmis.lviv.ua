import { FC } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import DocsList from '@modules/common/components/DocsList';

import { gasDisputeResolution } from '@utils/data';

const GasDisputeResolution: FC = () => {
	return (
		<>
			<BlockTitle title="ВРЕГУЛЮВАННЯ СПОРІВ ЩОДО ПОСТАЧАННЯ ПРИРОДНОГО ГАЗУ" />

			<DocsList type="doc" data={gasDisputeResolution} />
		</>
	);
};
export default GasDisputeResolution;
