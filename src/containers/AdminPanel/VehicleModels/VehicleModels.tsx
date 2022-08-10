import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { VehicleModelsProps } from '@Store/adminPanel/types';
import { useEffect, useState } from 'react';

import AddNewVehicleBrandDialog from './AddNewVehicleBrandDialog';
import AddNewVehicleModelDialog from './AddNewVehicleModelDialog';
import AddNewVehicleTypeDialog from './AddNewVehicleTypeDialog';
import styles from './styles';

const VehicleModels = ({
    getVehicleBrands,
    getVehicleTypes,
    createVehicleBrand,
    createVehicleType,
    createVehicleModel,
    vehicleBrands,
    vehicleTypes,
    vehicleModels,
    getVehicleModels,
}: VehicleModelsProps) => {
    const [addNewVehicleBrand, setAddNewVehicleBrand] = useState(false);
    const [addNewVehicleType, setAddNewVehicleType] = useState(false);
    const [addNewVehicleModel, setAddNewVehicleModel] = useState(false);
    const classes = styles();

    useEffect(() => {
        getVehicleBrands({ search: '' });
    }, [getVehicleBrands]);
    useEffect(() => {
        getVehicleTypes({ search: '' });
    }, [getVehicleTypes]);

    useEffect(() => {
        getVehicleModels();
    }, [getVehicleModels]);
    console.log(vehicleModels, 'models');
    return (
        <div>
            <div className={classes.title}>Vehicle Models</div>
            <div className={classes.mainContainer}>
                <div className={classes.button}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setAddNewVehicleModel(!addNewVehicleModel)}>
                        Add New Vehicle Model
                    </Button>
                </div>
                <div className={classes.tableContainer}>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Model Name</TableCell>
                                    <TableCell>Vehicle Brand Name</TableCell>
                                    <TableCell>Vehicle Type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {vehicleModels?.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell component="th" scope="row">
                                            {item.name}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {item.brand?.name}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {item.type?.name}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.button}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setAddNewVehicleBrand(!addNewVehicleBrand)}>
                        Add New Vehicle Brand
                    </Button>
                </div>
                <div className={classes.tableContainer}>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Brand Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {vehicleBrands?.map((item) => (
                                    <TableRow key={item.value}>
                                        <TableCell component="th" scope="row">
                                            {item.label}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.button}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setAddNewVehicleType(!addNewVehicleType)}>
                        Add New Vehicle Type
                    </Button>
                </div>
                <div className={classes.tableContainer}>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Type Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {vehicleTypes?.map((item) => (
                                    <TableRow key={item.value}>
                                        <TableCell component="th" scope="row">
                                            {item.label}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            <AddNewVehicleBrandDialog
                onSuccess={() => getVehicleBrands({ search: '' })}
                createVehicleBrand={createVehicleBrand}
                addNewVehicleBrand={addNewVehicleBrand}
                setAddNewVehicleBrand={setAddNewVehicleBrand}
            />
            <AddNewVehicleTypeDialog
                onSuccess={() => getVehicleTypes({ search: '' })}
                createVehicleType={createVehicleType}
                addNewVehicleType={addNewVehicleType}
                setAddNewVehicleType={setAddNewVehicleType}
            />
            <AddNewVehicleModelDialog
                vehicleBrands={vehicleBrands}
                vehicelTypes={vehicleTypes}
                onSuccess={() => getVehicleModels()}
                addNewVehicleModel={addNewVehicleModel}
                setAddNewVehicleModel={setAddNewVehicleModel}
                createVehicleModel={createVehicleModel}
            />
        </div>
    );
};

export default VehicleModels;
