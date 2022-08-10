import Dropdown from '@Components/Dropdown';
import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import {
    Categories,
    createSubCategoryPayload,
    createSubCategoryResponse,
} from '@Store/adminPanel/types';
import { ApiReturnType } from '@Store/api';
import { SelectOption } from '@Store/common/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles';

type AddNewSubCategoryProps = {
    categories: Categories[];
    addNewSubCategoryDialog: boolean;
    onSuccess: () => void;
    setAddNewSubCategoryDialog: React.Dispatch<React.SetStateAction<boolean>>;
    createSubCategory: (
        data: createSubCategoryPayload,
    ) => Promise<ApiReturnType<createSubCategoryResponse>>;
};

type FormData = {
    name: string;
};

const AddNewSubCategoryDialog = ({
    onSuccess,
    addNewSubCategoryDialog,
    setAddNewSubCategoryDialog,
    createSubCategory,
    categories,
}: AddNewSubCategoryProps) => {
    const [selectedCateogry, setSelectedCateogry] = useState<string | SelectOption | null>(null);
    const classes = styles();
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        const response = await createSubCategory({
            name: data.name,
            category: Number((selectedCateogry as SelectOption)?.value),
        });
        if (response.success) {
            onSuccess();
        }
    };
    const handleOnChange = (categorySelected: string | SelectOption) => {
        setSelectedCateogry(categorySelected);
    };

    return (
        <div>
            <Dialog open={addNewSubCategoryDialog}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() => setAddNewSubCategoryDialog(!addNewSubCategoryDialog)}>
                        <CloseIcon />
                    </Button>
                    <div>Add New Category</div>
                </DialogTitle>
                <DialogActions className={classes.dialogActionsStyle}>
                    <form className={classes.dialogBoxForm} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Name"
                            name="name"
                            register={register}
                            placeholder="Enter category name"
                        />
                        <Dropdown
                            freeSolo
                            placeholder="Enter category name"
                            options={categories}
                            label="Category"
                            onChange={(categorySelected) => handleOnChange(categorySelected)}
                        />
                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() => setAddNewSubCategoryDialog(!addNewSubCategoryDialog)}
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

export default AddNewSubCategoryDialog;
