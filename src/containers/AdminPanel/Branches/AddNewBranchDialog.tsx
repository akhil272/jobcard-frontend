import Dropdown from '@Components/Dropdown';
import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { Cities, createBranchPayload, createBranchResponse } from '@Store/adminPanel/types';
import { ApiReturnType } from '@Store/api';
import { SelectOption } from '@Store/common/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles';

type AddNewBranchDialogProps = {
    cities: Cities[];
    addNewBranchDialog: boolean;
    onSuccess: () => void;
    setAddNewBranchDialog: React.Dispatch<React.SetStateAction<boolean>>;
    createBranch: (data: createBranchPayload) => Promise<ApiReturnType<createBranchResponse>>;
};

type FormData = {
    name: string;
};

const AddNewBranchDialog = ({
    cities,
    onSuccess,
    addNewBranchDialog,
    setAddNewBranchDialog,
    createBranch,
}: AddNewBranchDialogProps) => {
    const classes = styles();
    const [selectedCity, setSelectedCity] = useState<string | SelectOption | null>(null);
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        const response = await createBranch({
            name: data.name,
            city: Number((selectedCity as SelectOption)?.value),
        });
        if (response.success) {
            onSuccess();
        }
    };
    const handleOnChange = (citySelected: string | SelectOption) => {
        setSelectedCity(citySelected);
    };

    return (
        <div>
            <Dialog open={addNewBranchDialog}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() => setAddNewBranchDialog(!addNewBranchDialog)}>
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
                            placeholder="Enter name of the branch"
                        />
                        <Dropdown
                            freeSolo
                            placeholder="Enter city name"
                            options={cities}
                            label="City"
                            onChange={(citySelected) => handleOnChange(citySelected)}
                        />
                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() => setAddNewBranchDialog(!AddNewBranchDialog)}
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

export default AddNewBranchDialog;
