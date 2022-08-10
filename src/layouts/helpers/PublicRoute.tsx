import Page from '@Containers/Page';
import { RoutePropsType } from '@Store/common/types';
import storage from '@Utils/storage';
import { Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }: RoutePropsType) => (
    <Page
        {...rest}
        render={(props) =>
            !storage().getAccessToken() || props.location.pathname === '/coming-soon' ? (
                <Component {...props} />
            ) : (
                <Redirect to="/menu" />
            )
        }
    />
);

export default PublicRoute;
