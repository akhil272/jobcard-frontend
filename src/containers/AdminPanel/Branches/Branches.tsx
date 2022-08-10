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
import { BranchesProps } from '@Store/adminPanel/types';
import { useEffect, useState } from 'react';

import AddNewBranchDialog from './AddNewBranchDialog';
import AddNewCityDialog from './AddNewCityDialog';
import AddNewCountryDialog from './AddNewCountryDialog';
import styles from './styles';

const Branches = ({
    getCities,
    getAllBranches,
    getCountries,
    createBranch,
    createCountry,
    createCity,
    branches,
    cities,
    countries,
}: BranchesProps) => {
    const [addNewBranchDialog, setaddNewBranchDialog] = useState(false);
    const [addNewCityDialog, setaddNewCityDialog] = useState(false);
    const [addNewCountryDialog, setaddNewCountryDialog] = useState(false);
    const classes = styles();

    useEffect(() => {
        getAllBranches();
    }, [getAllBranches]);

    useEffect(() => {
        getCities({ search: '' });
    }, [getCities]);

    useEffect(() => {
        getCountries({ search: '' });
    }, [getCountries]);

    return (
        <div>
            <div className={classes.title}>Branches</div>
            <div className={classes.mainContainer}>
                <div className={classes.button}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setaddNewBranchDialog(!addNewBranchDialog)}>
                        Add New Branch
                    </Button>
                </div>
                <div className={classes.tableContainer}>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Branch Name</TableCell>
                                    <TableCell>City</TableCell>
                                    <TableCell align="right">Country</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {branches?.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell component="th" scope="row">
                                            {item.name}
                                        </TableCell>
                                        <TableCell>{item.city?.name}</TableCell>
                                        <TableCell align="right">
                                            {item.city?.country?.name}
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
                        onClick={() => setaddNewCityDialog(!addNewCityDialog)}>
                        Add New City
                    </Button>
                </div>
                <div className={classes.tableContainer}>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>City</TableCell>
                                    <TableCell>Country</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cities?.map((item) => (
                                    <TableRow key={item.value}>
                                        <TableCell component="th" scope="row">
                                            {item?.label}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {item?.country.name}
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
                        onClick={() => setaddNewCountryDialog(!addNewCountryDialog)}>
                        Add New Country
                    </Button>
                </div>
                <div className={classes.tableContainer}>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Country</TableCell>
                                    <TableCell>Currency</TableCell>
                                    <TableCell>Currency Code</TableCell>
                                    <TableCell>Currency Symbol</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {countries?.map((item) => (
                                    <TableRow key={item.value}>
                                        <TableCell component="th" scope="row">
                                            {item?.label}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {item?.currency}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {item?.currencyCode}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {item?.currencySymbol}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <AddNewBranchDialog
                onSuccess={() => getAllBranches()}
                cities={cities}
                createBranch={createBranch}
                addNewBranchDialog={addNewBranchDialog}
                setAddNewBranchDialog={setaddNewBranchDialog}
            />
            <AddNewCityDialog
                onSuccess={() => getCities({ search: '' })}
                countries={countries}
                createCity={createCity}
                addNewCityDialog={addNewCityDialog}
                setAddNewCityDialog={setaddNewCityDialog}
            />
            <AddNewCountryDialog
                onSuccess={() => getCountries({ search: '' })}
                createCountry={createCountry}
                addNewCountryDialog={addNewCountryDialog}
                setAddNewCountryDialog={setaddNewCountryDialog}
            />
        </div>
    );
};

export default Branches;
