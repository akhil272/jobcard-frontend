import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { createVehicleBrandPayload, createVehicleBrandResponse } from '@Store/adminPanel/types';
import { ApiReturnType } from '@Store/api';
import { useForm } from 'react-hook-form';

import styles from './styles';

type AddNewVehicleBrand = {
    addNewVehicleBrand: boolean;
    onSuccess: () => void;
    setAddNewVehicleBrand: React.Dispatch<React.SetStateAction<boolean>>;
    createVehicleBrand: (
        payload: createVehicleBrandPayload,
    ) => Promise<ApiReturnType<createVehicleBrandResponse>>;
};

type FormData = {
    name: string;
};

const AddNewVehicleBrandDialog = ({
    onSuccess,
    addNewVehicleBrand,
    setAddNewVehicleBrand,
    createVehicleBrand,
}: AddNewVehicleBrand) => {
    const classes = styles();
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        const response = await createVehicleBrand({
            name: data.name,
        });
        if (response.success) {
            onSuccess();
        }
    };
    return (
        <div>
            <Dialog open={addNewVehicleBrand}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() => setAddNewVehicleBrand(!addNewVehicleBrand)}>
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
                            placeholder="Enter name of the vehicle brand"
                        />
                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() => setAddNewVehicleBrand(!addNewVehicleBrand)}
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

export default AddNewVehicleBrandDialog;
