import Home from '@Containers/Home';
import { RouteComponentProps } from '@Store/common/types';
import { FC } from 'react';

type HomeProps = RouteComponentProps & {};

const home: FC<HomeProps> = (props) => <Home {...props} />;

export default home;
