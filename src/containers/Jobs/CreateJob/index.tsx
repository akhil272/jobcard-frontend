import {
    createJobCard,
    getRimSizes,
    getServices,
    getVehicleModels,
    getVehicles,
    getVehicleTypes,
} from '@Store/jobCards/actions';
import { initialState } from '@Store/rootReducer';
import { connect } from 'react-redux';

import CreateJob from './CreateJob';

const mapStateToProps = ({ jobCards }: typeof initialState) => ({
    vehicleTypes: jobCards?.vehicleTypes,
    vehicleModels: jobCards?.vehicleModels,
    rimSizes: jobCards?.rimSizes,
    services: jobCards?.services,
    vehicles: jobCards?.vehicles,
});

const mapDispatchToProps = () => ({
    getVehicleTypes,
    getVehicleModels,
    getRimSizes,
    getServices,
    createJobCard,
    getVehicles,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);
