import SideBar from '@Components/SideBar';
import AdminPanel from '@Containers/AdminPanel';
import Branches from '@Containers/AdminPanel/Branches';
import ServicePricing from '@Containers/AdminPanel/ServicePricing';
import Services from '@Containers/AdminPanel/Services';
import VehicleModels from '@Containers/AdminPanel/VehicleModels';
// import Header from '@Containers/Header';
import PrivateRoute from '@Layouts/helpers/PrivateRoute';
import { Redirect, Switch } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <>
            <SideBar />
            <Switch>
                <PrivateRoute
                    exact
                    path="/admin/service-pricing"
                    component={ServicePricing}
                    title="Service Pricing"
                />
                <PrivateRoute exact path="/admin/services" component={Services} title="Services" />
                <PrivateRoute
                    exact
                    path="/admin/vehicle-models"
                    component={VehicleModels}
                    title="Vehicle Models"
                />
                <PrivateRoute exact path="/admin/branch" component={Branches} title="Branches" />
                <PrivateRoute exact path="/admin" component={AdminPanel} title="Admin" />
                <Redirect from="*" to="/admin" />
            </Switch>
        </>
    );
};

export default AdminLayout;
