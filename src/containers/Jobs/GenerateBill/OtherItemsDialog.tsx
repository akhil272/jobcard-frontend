import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { ApiReturnType } from '@Store/api';
import { AddOtherItems } from '@Store/jobCards/types';
import { useForm } from 'react-hook-form';

import styles from './styles';

type FormData = {
    item: string;
    price: number;
    quantity: number;
};

type addOtherItemsProps = {
    addOtherItems: (data: AddOtherItems) => Promise<ApiReturnType<void>>;
    id: number;
    onSuccess: () => void;
    otherItemsDialog: boolean;
    setOtherItemsDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const OtherItemsDialog = ({
    addOtherItems,
    id,
    onSuccess,
    otherItemsDialog,
    setOtherItemsDialog,
}: addOtherItemsProps) => {
    const classes = styles();
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        const response = await addOtherItems({
            jobCardId: id,
            title: data.item,
            price: data.price,
            quantity: data.quantity,
        });
        if (response.success) {
            onSuccess();
        }
    };
    return (
        <div>
            <Dialog open={otherItemsDialog}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() => setOtherItemsDialog(!otherItemsDialog)}>
                        <CloseIcon />
                    </Button>
                    <div>Add Other Items</div>
                </DialogTitle>
                <DialogActions className={classes.dialogActionsStyle}>
                    <form className={classes.dialogBoxForm} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Item"
                            name="item"
                            register={register}
                            placeholder="Enter item name"
                        />
                        <TextField
                            label="Price"
                            name="price"
                            register={register}
                            placeholder="Enter price of the item"
                        />
                        <TextField
                            label="Quantity"
                            name="quantity"
                            register={register}
                            placeholder="Enter quantity of the item"
                        />
                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() => setOtherItemsDialog(!otherItemsDialog)}
                            variant="contained"
                            color="primary">
                            Done
                        </Button>
                    </form>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default OtherItemsDialog;
