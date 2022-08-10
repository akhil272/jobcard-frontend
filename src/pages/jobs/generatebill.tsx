import GenerateBill from '@Containers/Jobs/GenerateBill';
import { GenerateBillProps } from '@Store/jobCards/types';
import { FC } from 'react';

const GenerateBillPage: FC<GenerateBillProps> = (props) => <GenerateBill {...props} />;

export default GenerateBillPage;
