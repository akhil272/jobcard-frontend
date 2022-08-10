import AdminPanel from '@Containers/AdminPanel';
import Branches from '@Containers/AdminPanel/Branches';
import Employees from '@Containers/AdminPanel/Employees';
import ServicePricing from '@Containers/AdminPanel/ServicePricing';
import Services from '@Containers/AdminPanel/Services';
import VehicleModels from '@Containers/AdminPanel/VehicleModels';
// import Header from '@Containers/Header';
import OptionScreen from '@Containers/OptionScreen';
import PrivateRoute from '@Layouts/helpers/PrivateRoute';
import Home from '@Pages/home';
import CreateJob from '@Pages/jobs/create';
import GenerateBill from '@Pages/jobs/generatebill';
// import EstimateJob from '@Pages/jobs/estimate';
import ViewJobs from '@Pages/jobs/view';
import { MainLayoutProps } from '@Store/common/types';
import { jobCardItemResponse } from '@Store/jobCards/types';
import { FC, useEffect } from 'react';
// import OptionScreen from '@Pages/optionScreen';
import { Redirect, Switch } from 'react-router-dom';
import io from 'socket.io-client';

const MainLayout: FC<MainLayoutProps> = ({ updateJobCardItemsInStore }) => {
    useEffect(() => {
        const socket = io('http://localhost:8000/socket/jobs');
        socket.on('connect', () => {
            console.log('Connected');
            socket.emit('events', { test: 'test' });
            socket.emit('identity', 0, (response: unknown) => console.log('Identity:', response));
        });
        socket.on('error', (reason: string) => {
            console.log('error', reason);
            socket.connect();
        });
        socket.on('events', (data: string) => {
            console.log('event', data);
        });
        socket.on('exception', (data: string) => {
            console.log('event', data);
        });
        socket.on('disconnect', (reason: string) => {
            console.log('disconnect', reason);
            if (reason === 'io server disconnect') {
                socket.connect();
            }
        });
        socket.on('jobCardAdded', (data: { data: jobCardItemResponse }) => {
            console.log(data);
            updateJobCardItemsInStore(data);
        });
        socket.on('jobCardUpdated', (data: { data: jobCardItemResponse }) => {
            console.log(data);
            updateJobCardItemsInStore(data);
        });
        socket.on('jobCardRemoved', (data: { data: jobCardItemResponse }) => {
            console.log(data);
            updateJobCardItemsInStore(data);
        });
    }, [updateJobCardItemsInStore]);
    return (
        <>
            {/* <Header /> */}
            <Switch>
                <PrivateRoute
                    exact
                    path="/admin/employees"
                    component={Employees}
                    title="Employees"
                />
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
                <PrivateRoute exact path="/menu" component={OptionScreen} title="OptionScreen" />
                <PrivateRoute
                    exact
                    path="/jobs/:id/bill/generate"
                    component={GenerateBill}
                    title="GenerateBill"
                />
                <PrivateRoute exact path="/jobs" component={ViewJobs} title="ViewJobs" />
                <PrivateRoute exact path="/jobs/create" component={CreateJob} title="CreateJob" />
                <PrivateRoute exact path="/" component={Home} title="Home" />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    );
};

export default MainLayout;
