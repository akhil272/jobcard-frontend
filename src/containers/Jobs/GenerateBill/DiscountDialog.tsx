import Dropdown from '@Components/Dropdown';
import TextField from '@Components/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { ApiReturnType } from '@Store/api';
import { SelectOption } from '@Store/common/types';
import { AddJobCardItemDiscount, Assignee } from '@Store/jobCards/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles';

type DiscountDialogProps = {
    assignees: Assignee[];
    id: number;
    addJobCardItemDiscount: (data: AddJobCardItemDiscount) => Promise<ApiReturnType<void>>;
    onSuccess: () => void;
    setDiscountDialog: React.Dispatch<React.SetStateAction<boolean>>;
    discountDialog: boolean;
};

type FormData = {
    discountRate: number;
    notes: string;
};

const DiscountDialog = ({
    assignees,
    id,
    discountDialog,
    addJobCardItemDiscount,
    onSuccess,
    setDiscountDialog,
}: DiscountDialogProps) => {
    const [employeeSelected, setEmployeeSelected] = useState<string | SelectOption | null>(null);
    const classes = styles();
    const { handleSubmit, register } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        const response = await addJobCardItemDiscount({
            jobCardId: id,
            discount: Number(data.discountRate),
            employeeId: Number((employeeSelected as SelectOption)?.value),
            notes: data.notes,
        });
        if (response.success) {
            onSuccess();
        }
    };
    const handleOnChange = (selectedEmployee: string | SelectOption) => {
        setEmployeeSelected(selectedEmployee);
    };
    return (
        <div>
            <Dialog open={discountDialog}>
                <DialogTitle className={classes.dialogBoxTitle} id="alert-dialog-title">
                    <Button
                        className={classes.dialogBoxCloseBtn}
                        onClick={() => setDiscountDialog(!discountDialog)}>
                        <CloseIcon />
                    </Button>
                    <div>Add Discount</div>
                </DialogTitle>

                <DialogActions className={classes.dialogActionsStyle}>
                    <form className={classes.dialogBoxForm} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Discount Rate"
                            name="discountRate"
                            register={register}
                            placeholder="Enter discount rate"
                        />
                        <Dropdown
                            freeSolo
                            placeholder="Enter employee name"
                            options={assignees}
                            label="Employee"
                            onChange={(selectedEmployee) => handleOnChange(selectedEmployee)}
                        />
                        <TextField
                            register={register}
                            label="Notes"
                            name="notes"
                            placeholder="Kindly enter any additional notes if any."
                        />
                        <Button
                            type="submit"
                            className={classes.dialogBoxButton}
                            onClick={() => setDiscountDialog(!discountDialog)}
                            variant="contained"
                            color="primary">
                            UPDATE
                        </Button>
                    </form>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DiscountDialog;
