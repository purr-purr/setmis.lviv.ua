import { FC } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import DocsList from '@modules/common/components/DocsList';

import { otherDocs } from '@utils/data';

const OtherDocs: FC = () => {
	return (
		<>
			<BlockTitle title="ІНШІ ДОКУМЕНТИ" />

			<DocsList type="doc" data={otherDocs} />
		</>
	);
};
export default OtherDocs;
