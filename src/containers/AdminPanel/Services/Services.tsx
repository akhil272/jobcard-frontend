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
import { ServiceProps } from '@Store/adminPanel/types';
import { useEffect, useState } from 'react';

import AddNewCategoryDialog from './AddNewCategory';
import AddNewSubCategoryDialog from './AddNewSubCategory';
import styles from './styles';

const Services = ({
    getCategories,
    categories,
    createCategory,
    createSubCategory,
    subCategories,
    getSubCategories,
}: ServiceProps) => {
    const [addNewCategoryDialog, setAddNewCategoryDialog] = useState(false);
    const [addNewSubCategoryDialog, setAddNewSubCategoryDialog] = useState(false);

    const classes = styles();

    useEffect(() => {
        getCategories({ search: '' });
    }, [getCategories]);
    useEffect(() => {
        getSubCategories({ search: '' });
    }, [getSubCategories]);

    return (
        <div>
            <div className={classes.title}>Service</div>
            <div className={classes.mainContainer}>
                <div className={classes.button}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setAddNewCategoryDialog(!addNewCategoryDialog)}>
                        Add New Category
                    </Button>
                </div>
                <div className={classes.tableContainer}>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Category Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {categories?.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {item.name}
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
                        onClick={() => setAddNewSubCategoryDialog(!addNewSubCategoryDialog)}>
                        Add New Sub Category
                    </Button>
                </div>
                <div className={classes.tableContainer}>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sub Category Name</TableCell>
                                    <TableCell>Category</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {subCategories?.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {item.name}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {item.categoryId}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <AddNewCategoryDialog
                onSuccess={() => getCategories({ search: '' })}
                createCategory={createCategory}
                addNewCategoryDialog={addNewCategoryDialog}
                setAddNewCategoryDialog={setAddNewCategoryDialog}
            />
            <AddNewSubCategoryDialog
                onSuccess={() => getSubCategories({ search: '' })}
                categories={categories}
                createSubCategory={createSubCategory}
                addNewSubCategoryDialog={addNewSubCategoryDialog}
                setAddNewSubCategoryDialog={setAddNewSubCategoryDialog}
            />
        </div>
    );
};

export default Services;
