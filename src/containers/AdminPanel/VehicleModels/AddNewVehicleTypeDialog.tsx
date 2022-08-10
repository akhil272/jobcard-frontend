import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { createVehicleTypePayload, createVehicleTypeResponse } from '@Store/adminPanel/types';
import { ApiReturnType } from '@Store/api';
import { useForm } from 'react-hook-form';

import styles from './styles';

type AddNewVehicleType = {
    addNewVehicleType: boolean;
    onSuccess: () => void;
    setAddNewVehicleType: React.Dispatch<React.SetStateAction<boolean>>;
    createVehicleType: (
        payload: createVehicleTypePayload,
    ) => Promise<ApiReturnType<createVehicleTypeResponse>>;
};

type FormData = {
    name: string;
};

const AddNewVehicleTypeDialog = ({
    onSuccess,
    addNewVehicleType,
    setAddNewVehicleType,
    createVehicleType,
}: AddNewVehicleType) => {
    const classes = styles();
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        const response = await createVehicleType({
            name: data.name,
        });
        if (response.success) {
            onSuccess();
        }
    };
    return (
        <div>
            <Dialog open={addNewVehicleType}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() => setAddNewVehicleType(!addNewVehicleType)}>
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
                            placeholder="Enter name of the vehicle Type"
                        />
                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() => setAddNewVehicleType(!addNewVehicleType)}
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

export default AddNewVehicleTypeDialog;
