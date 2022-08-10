import CreateJob from '@Containers/Jobs/CreateJob/';
import { CreateJobProps } from '@Store/jobCards/types';
import { FC } from 'react';

const Create: FC<CreateJobProps> = (props) => <CreateJob {...props} />;

export default Create;
