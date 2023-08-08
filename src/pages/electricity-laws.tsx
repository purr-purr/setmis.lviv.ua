import { FC } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import DocsList from '@modules/common/components/DocsList';

import {
	electricityDisputeResolution,
	lawsSupplyOfElectricEnergy,
	resolutionsOfTheNcrecp,
} from '@utils/data';

const ElectricityLaws: FC = () => {
	return (
		<>
			<BlockTitle title="ПЕРЕЛІК НОРМАТИВНО-ПРАВОВИХ АКТІВ, ЩО РЕГУЛЮЮТЬ РИНОК ЕЛЕКТРОЕНЕРГІЇ" />
			<BlockTitle type="middle" title="Нормативна база" />
			<BlockTitle type="small" title="Загальне законодавство" />
			<DocsList data={electricityDisputeResolution} />
			<BlockTitle type="small" title="Закони з постачання електричної енергії" />
			<DocsList data={lawsSupplyOfElectricEnergy} />
			<BlockTitle type="small" title="Постанови НКРЕКП" />
			<DocsList data={resolutionsOfTheNcrecp} />
		</>
	);
};
export default ElectricityLaws;
