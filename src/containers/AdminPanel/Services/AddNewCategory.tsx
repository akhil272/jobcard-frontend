import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { createCategoryPayload, createCategoryResponse } from '@Store/adminPanel/types';
import { ApiReturnType } from '@Store/api';
import { useForm } from 'react-hook-form';

import styles from './styles';

type AddNewCategoryProps = {
    addNewCategoryDialog: boolean;
    onSuccess: () => void;
    setAddNewCategoryDialog: React.Dispatch<React.SetStateAction<boolean>>;
    createCategory: (data: createCategoryPayload) => Promise<ApiReturnType<createCategoryResponse>>;
};

type FormData = {
    name: string;
};

const AddNewCategoryDialog = ({
    onSuccess,
    addNewCategoryDialog,
    setAddNewCategoryDialog,
    createCategory,
}: AddNewCategoryProps) => {
    const classes = styles();
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        const response = await createCategory({
            name: data.name,
        });
        if (response.success) {
            onSuccess();
        }
    };
    return (
        <div>
            <Dialog open={addNewCategoryDialog}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() => setAddNewCategoryDialog(!addNewCategoryDialog)}>
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
                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() => setAddNewCategoryDialog(!addNewCategoryDialog)}
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

export default AddNewCategoryDialog;
