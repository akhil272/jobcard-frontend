import Dropdown from '@Components/Dropdown';
import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import {
    createVehicleModelPayload,
    createVehicleModelResponse,
    VehicleBrands,
    VehicleTypes,
} from '@Store/adminPanel/types';
import { ApiReturnType } from '@Store/api';
import { SelectOption } from '@Store/common/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles';

type AddNewVehicleModelProps = {
    vehicleBrands: VehicleBrands[];
    vehicelTypes: VehicleTypes[];
    addNewVehicleModel: boolean;
    onSuccess: () => void;
    setAddNewVehicleModel: React.Dispatch<React.SetStateAction<boolean>>;
    createVehicleModel: (
        payload: createVehicleModelPayload,
    ) => Promise<ApiReturnType<createVehicleModelResponse>>;
};

type FormData = {
    name: string;
};

const AddNewVehicleModelDialog = ({
    vehicleBrands,
    vehicelTypes,
    onSuccess,
    addNewVehicleModel,
    setAddNewVehicleModel,
    createVehicleModel,
}: AddNewVehicleModelProps) => {
    const classes = styles();
    const [selectedBrand, setSelectedBrand] = useState<string | SelectOption | null>(null);
    const [selectedType, setSelectedType] = useState<string | SelectOption | null>(null);
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        const response = await createVehicleModel({
            name: data.name,
            brand: Number((selectedBrand as SelectOption)?.value),
            type: Number((selectedType as SelectOption)?.value),
        });
        if (response.success) {
            onSuccess();
        }
    };
    const onBrandChange = (brandSelected: string | SelectOption) => {
        setSelectedBrand(brandSelected);
    };
    const onTypeChange = (typeSelected: string | SelectOption) => {
        setSelectedType(typeSelected);
    };

    return (
        <div>
            <Dialog open={addNewVehicleModel}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() => setAddNewVehicleModel(!addNewVehicleModel)}>
                        <CloseIcon />
                    </Button>
                    <div>Add New Branch</div>
                </DialogTitle>

                <DialogActions className={classes.dialogActionsStyle}>
                    <form className={classes.dialogBoxForm} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Name"
                            name="name"
                            register={register}
                            placeholder="Enter name of the model"
                        />
                        <Dropdown
                            freeSolo
                            placeholder="Enter brand name"
                            options={vehicleBrands}
                            label="Vehicle Brand"
                            onChange={(brandSelected) => onBrandChange(brandSelected)}
                        />
                        <Dropdown
                            freeSolo
                            placeholder="Enter vehicle type"
                            options={vehicelTypes}
                            label="Vehicle Type"
                            onChange={(typeSelected) => onTypeChange(typeSelected)}
                        />
                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() => setAddNewVehicleModel(!addNewVehicleModel)}
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

export default AddNewVehicleModelDialog;
