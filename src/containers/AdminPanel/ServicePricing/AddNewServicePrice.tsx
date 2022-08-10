/* eslint-disable @typescript-eslint/no-explicit-any */
import Dropdown from '@Components/Dropdown';
import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import {
    createSubCategoryPriceResponse,
    createSubCategoryPricesPayload,
} from '@Store/adminPanel/types';
import { ApiReturnType } from '@Store/api';
import { SelectOption } from '@Store/common/types';
import { RimSize, VehicleType } from '@Store/jobCards/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles';

type AddNewServicePriceProps = {
    branches: any;
    subCategories: any;
    vehicleModels: any;
    vehicleTypes: VehicleType[];
    rimSizes: RimSize[];
    addNewServiceCategoryPriceDialog: boolean;
    onSuccess: () => void;
    setAddNewServiceCategoryPriceDialog: React.Dispatch<React.SetStateAction<boolean>>;
    createSubCategoryPrice: (
        data: createSubCategoryPricesPayload,
    ) => Promise<ApiReturnType<createSubCategoryPriceResponse>>;
};

type FormData = {
    price: number;
    oldBuildPrice: number;
    newBuildPrice: number;
};

const AddNewServicePriceDialog = ({
    onSuccess,
    addNewServiceCategoryPriceDialog,
    setAddNewServiceCategoryPriceDialog,
    createSubCategoryPrice,
    branches,
    subCategories,
    vehicleModels,
    vehicleTypes,
    rimSizes,
}: AddNewServicePriceProps) => {
    const [selectedBranch, setSelectedBranch] = useState<string | SelectOption | null>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | SelectOption | null>(
        null,
    );
    const [selectedVehicleModels, setSelectedVehicleModels] = useState<
        string | SelectOption | null
    >(null);
    const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<string | SelectOption | null>(
        null,
    );
    const [selectedRimSizes, setSelectedRimSizes] = useState<string | SelectOption | null>(null);
    const classes = styles();
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        const response = await createSubCategoryPrice({
            branch: Number((selectedBranch as SelectOption)?.value),
            subCategory: Number((selectedSubCategory as SelectOption)?.value),
            price: Number(data.price),
            pricingMethod: 'FIXED',
            vehicleModel: Number((selectedVehicleModels as SelectOption)?.value),
            vehicleType: Number((selectedVehicleTypes as SelectOption)?.value),
            oldBuildPrice: Number(data.oldBuildPrice),
            newBuildPrice: Number(data.newBuildPrice),
            rimSize: Number((selectedRimSizes as SelectOption)?.value),
        });
        if (response.success) {
            onSuccess();
        }
    };
    const handleBranches = (branchSelected: string | SelectOption) => {
        setSelectedBranch(branchSelected);
    };
    const handleSubCategory = (subCategorySelected: string | SelectOption) => {
        setSelectedSubCategory(subCategorySelected);
    };
    const handleVehicleModels = (vehicleModelSelected: string | SelectOption) => {
        setSelectedVehicleModels(vehicleModelSelected);
    };
    const handleVehicleTypes = (vehicleTypeSelected: string | SelectOption) => {
        setSelectedVehicleTypes(vehicleTypeSelected);
    };
    const handleRimSizes = (rimSizeSelected: string | SelectOption) => {
        setSelectedRimSizes(rimSizeSelected);
    };
    return (
        <div>
            <Dialog open={addNewServiceCategoryPriceDialog}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() =>
                            setAddNewServiceCategoryPriceDialog(!addNewServiceCategoryPriceDialog)
                        }>
                        <CloseIcon />
                    </Button>
                    <div>Add New Category</div>
                </DialogTitle>
                <DialogActions className={classes.dialogActionsStyle}>
                    <form className={classes.dialogBoxForm} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Price"
                            name="price"
                            register={register}
                            placeholder="Enter price"
                        />
                        <Dropdown
                            freeSolo
                            placeholder="Enter branch"
                            options={branches?.map(
                                ({ id, name }: { id: number; name: string }) => ({
                                    value: id,
                                    label: name,
                                }),
                            )}
                            label="Branch"
                            onChange={(branchSelected) => handleBranches(branchSelected)}
                        />
                        <Dropdown
                            freeSolo
                            placeholder="Enter Sub Category"
                            options={subCategories?.map(
                                ({ id, name }: { id: number; name: string }) => ({
                                    value: id,
                                    label: name,
                                }),
                            )}
                            label="Sub Category"
                            onChange={(subCategorySelected) =>
                                handleSubCategory(subCategorySelected)
                            }
                        />
                        <Dropdown
                            freeSolo
                            placeholder="Enter Vehicle Model"
                            options={vehicleModels?.map(
                                ({ id, name }: { id: number; name: string }) => ({
                                    value: id,
                                    label: name,
                                }),
                            )}
                            label="Vehicle Model"
                            onChange={(vehicleModelSelected) =>
                                handleVehicleModels(vehicleModelSelected)
                            }
                        />
                        <Dropdown
                            freeSolo
                            placeholder="Enter Vehicle Type"
                            options={vehicleTypes}
                            label="Vehicle Type"
                            onChange={(vehicleTypeSelected) =>
                                handleVehicleTypes(vehicleTypeSelected)
                            }
                        />
                        <Dropdown
                            freeSolo
                            placeholder="Enter Rim Size"
                            options={rimSizes}
                            label="Rim Size"
                            onChange={(rimSizeSelected) => handleRimSizes(rimSizeSelected)}
                        />
                        <TextField
                            label="OLD Build Price"
                            name="oldBuildPrice"
                            register={register}
                            placeholder="Enter old build price"
                        />
                        <TextField
                            label="NEW Build Price"
                            name="newBuildPrice"
                            register={register}
                            placeholder="Enter new build price"
                        />
                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() =>
                                setAddNewServiceCategoryPriceDialog(
                                    !addNewServiceCategoryPriceDialog,
                                )
                            }
                            variant="contained"
                            color="primary">
                            Add
                        </Button>
                    </form>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddNewServicePriceDialog;
