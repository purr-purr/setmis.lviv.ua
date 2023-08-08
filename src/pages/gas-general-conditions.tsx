import { FC } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import DocsList from '@modules/common/components/DocsList';

import { gasGeneralConditions } from '@utils/data';

const GasGeneralConditions: FC = () => {
	return (
		<>
			<BlockTitle title="ЗАГАЛЬНІ УМОВИ" />
			<BlockTitle title="Перелік документів" type="small" />

			<DocsList type="doc" data={gasGeneralConditions} />
		</>
	);
};
export default GasGeneralConditions;
