import PrivateRoute from '@Layouts/helpers/PrivateRoute';
import PublicRoute from '@Layouts/helpers/PublicRoute';
import MainLayout from '@Layouts/MainLayout/index';
import Login from '@Pages/login';
import { Switch } from 'react-router-dom';

import Router from './helpers/history';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login" component={Login} title="Login" />
                <PrivateRoute path="*" component={MainLayout} title="Home" />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
