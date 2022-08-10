import Page from '@Containers/Page';
import { RoutePropsType } from '@Store/common/types';
import storage from '@Utils/storage';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: RoutePropsType) => (
    <Page
        exact
        {...rest}
        render={(props) =>
            storage().getAccessToken() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;
