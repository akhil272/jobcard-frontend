import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { ApiReturnType } from '@Store/api';
import { UpdateJobCardAmountPayload } from '@Store/jobCards/types';
import { useForm } from 'react-hook-form';

import styles from './styles';

type FormData = {
    amount: number;
};

type PayDialogProps = {
    payDialog: boolean;
    id: number;
    onSuccess: () => void;
    setPayDialog: React.Dispatch<React.SetStateAction<boolean>>;
    updatePay: (data: UpdateJobCardAmountPayload) => Promise<ApiReturnType<void>>;
    totalAmount: number;
};

const PayDialog = ({
    payDialog,
    setPayDialog,
    updatePay,
    onSuccess,
    id,
    totalAmount,
}: PayDialogProps) => {
    const classes = styles();
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        if (data.amount > totalAmount) {
            console.log('total amount greater');
        } else {
            const response = await updatePay({
                id,
                amountPaid: data.amount,
            });
            if (response.success) {
                onSuccess();
            }
        }
    };
    return (
        <div>
            <Dialog open={payDialog}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() => setPayDialog(!payDialog)}>
                        <CloseIcon />
                    </Button>
                    <div>Pay</div>
                </DialogTitle>

                <DialogActions className={classes.dialogActionsStyle}>
                    <form className={classes.dialogBoxForm} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Amount paid"
                            name="amount"
                            register={register}
                            placeholder="Enter amount paid"
                        />
                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() => setPayDialog(!payDialog)}
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

export default PayDialog;
