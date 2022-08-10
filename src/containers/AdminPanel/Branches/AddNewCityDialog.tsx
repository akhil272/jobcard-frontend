import Dropdown from '@Components/Dropdown';
import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { Countries, createCityPayload, createCityResponse } from '@Store/adminPanel/types';
import { ApiReturnType } from '@Store/api';
import { SelectOption } from '@Store/common/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles';

type AddNewCityDialogProps = {
    countries: Countries[];
    addNewCityDialog: boolean;
    onSuccess: () => void;
    setAddNewCityDialog: React.Dispatch<React.SetStateAction<boolean>>;
    createCity: (data: createCityPayload) => Promise<ApiReturnType<createCityResponse>>;
};

type FormData = {
    name: string;
};

const AddNewCityDialog = ({
    countries,
    onSuccess,
    addNewCityDialog,
    setAddNewCityDialog,
    createCity,
}: AddNewCityDialogProps) => {
    const classes = styles();
    const [selectedCountry, setSelectedCountry] = useState<string | SelectOption | null>(null);
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        const response = await createCity({
            name: data.name,
            country: Number((selectedCountry as SelectOption)?.value),
        });
        if (response.success) {
            onSuccess();
        }
    };
    const handleOnChange = (countrySelected: string | SelectOption) => {
        setSelectedCountry(countrySelected);
    };

    return (
        <div>
            <Dialog open={addNewCityDialog}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() => setAddNewCityDialog(!addNewCityDialog)}>
                        <CloseIcon />
                    </Button>
                    <div>Add New City</div>
                </DialogTitle>

                <DialogActions className={classes.dialogActionsStyle}>
                    <form className={classes.dialogBoxForm} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Name"
                            name="name"
                            register={register}
                            placeholder="Enter name of the city"
                        />
                        <Dropdown
                            freeSolo
                            placeholder="Enter country name"
                            options={countries}
                            label="Country"
                            onChange={(countrySelected) => handleOnChange(countrySelected)}
                        />
                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() => setAddNewCityDialog(!AddNewCityDialog)}
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

export default AddNewCityDialog;
