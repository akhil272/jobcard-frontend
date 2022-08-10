import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { ServicePricingProps } from '@Store/adminPanel/types';
import { useEffect, useState } from 'react';

import AddNewServicePriceDialog from './AddNewServicePrice';
import styles from './styles';

const ServicePricing = ({
    getSubCategoryPrices,
    subCategoryPrices,
    createSubCategoryPrice,
    getAllBranches,
    branches,
    getSubCategories,
    subCategories,
    getVehicleModels,
    vehicleModels,
    getVehicleTypes,
    vehicleTypes,
    rimSizes,
    getRimSizes,
}: ServicePricingProps) => {
    const [addNewServiceCategoryPriceDialog, setAddNewServiceCategoryPriceDialog] = useState(false);
    const classes = styles();
    useEffect(() => {
        getRimSizes({ search: '' });
    }, [getRimSizes]);
    useEffect(() => {
        getVehicleTypes({ search: '' });
    }, [getVehicleTypes]);
    useEffect(() => {
        getVehicleModels();
    }, [getVehicleModels]);
    useEffect(() => {
        getSubCategories({ search: '' });
    }, [getSubCategories]);
    useEffect(() => {
        getSubCategoryPrices();
    }, [getSubCategoryPrices]);
    useEffect(() => {
        getAllBranches();
    }, [getAllBranches]);
    return (
        <div>
            <div className={classes.title}>Service Pricing</div>
            <div className={classes.mainContainer}>
                <div className={classes.button}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                            setAddNewServiceCategoryPriceDialog(!addNewServiceCategoryPriceDialog)
                        }>
                        Add New Service Category Price
                    </Button>
                </div>
                <div className={classes.tableContainer}>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Category Name</TableCell>
                                    <TableCell>Service Name</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Pricing Method</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {subCategoryPrices?.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell component="th" scope="row">
                                            {item.category.name}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {item.subCategory}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {item.price}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {item.pricingMethod}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <AddNewServicePriceDialog
                addNewServiceCategoryPriceDialog={addNewServiceCategoryPriceDialog}
                setAddNewServiceCategoryPriceDialog={setAddNewServiceCategoryPriceDialog}
                createSubCategoryPrice={createSubCategoryPrice}
                onSuccess={() => getSubCategoryPrices()}
                branches={branches}
                subCategories={subCategories}
                vehicleModels={vehicleModels}
                vehicleTypes={vehicleTypes}
                rimSizes={rimSizes}
            />
        </div>
    );
};

export default ServicePricing;
