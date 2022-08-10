import {
    createVehicleBrand,
    createVehicleModel,
    createVehicleType,
    getVehicleBrands,
    getVehicleModels,
    getVehicleTypes,
} from '@Store/adminPanel/actions';
import { initialState } from '@Store/rootReducer';
import { connect } from 'react-redux';

import VehicleModels from './VehicleModels';

const mapStateToProps = ({ adminPanel }: typeof initialState) => ({
    vehicleBrands: adminPanel.vehicleBrands,
    vehicleTypes: adminPanel.vehicleTypes,
    vehicleModels: adminPanel.vehicleModels,
});

const mapDispatchToProps = () => ({
    getVehicleBrands,
    createVehicleBrand,
    getVehicleTypes,
    createVehicleType,
    getVehicleModels,
    createVehicleModel,
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleModels);
