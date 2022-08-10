import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { createCountryPayload, createCountryResponse } from '@Store/adminPanel/types';
import { ApiReturnType } from '@Store/api';
import { useForm } from 'react-hook-form';

import styles from './styles';

type AddNewCountryDialogProps = {
    addNewCountryDialog: boolean;
    onSuccess: () => void;
    setAddNewCountryDialog: React.Dispatch<React.SetStateAction<boolean>>;
    createCountry: (data: createCountryPayload) => Promise<ApiReturnType<createCountryResponse>>;
};

type FormData = {
    name: string;
    curreny: string;
    currencyCode: string;
    currencySymbol: string;
};

const AddNewCountryDialog = ({
    onSuccess,
    addNewCountryDialog,
    setAddNewCountryDialog,
    createCountry,
}: AddNewCountryDialogProps) => {
    const classes = styles();
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        const response = await createCountry({
            name: data.name,
            currency: data.curreny,
            currencyCode: data.currencyCode,
            currencySymbol: data.currencySymbol,
        });
        if (response.success) {
            onSuccess();
        }
    };

    return (
        <div>
            <Dialog open={addNewCountryDialog}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() => setAddNewCountryDialog(!addNewCountryDialog)}>
                        <CloseIcon />
                    </Button>
                    <div>Add New Country</div>
                </DialogTitle>

                <DialogActions className={classes.dialogActionsStyle}>
                    <form className={classes.dialogBoxForm} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Name"
                            name="name"
                            register={register}
                            placeholder="Enter name of the Country"
                        />
                        <TextField
                            label="Currency"
                            name="curreny"
                            register={register}
                            placeholder="Enter currency"
                        />
                        <TextField
                            label="Currency Code"
                            name="currencyCode"
                            register={register}
                            placeholder="Enter currency code"
                        />
                        <TextField
                            label="Currency Symbol"
                            name="currencySymbol"
                            register={register}
                            placeholder="Enter currency symbol"
                        />

                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() => setAddNewCountryDialog(!AddNewCountryDialog)}
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

export default AddNewCountryDialog;
