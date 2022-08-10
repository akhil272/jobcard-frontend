import TextField from '@Components/TextField';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import styles from './styles';

type FormData = {
    name: string;
    phoneNumber: string;
    email: string;
    role: string;
    dateOfJoining: string;
    jobPosition: string;
    branch: string;
};

const Employees = () => {
    const { handleSubmit, register } = useForm<FormData>({
        mode: 'all',
        reValidateMode: 'onSubmit',
    });
    const classes = styles();

    const onSubmit = handleSubmit((data) => console.log(data));
    return (
        <div className={classes.background}>
            <h1 className={classes.title}>Employees</h1>
            <div className={classes.formContainer}>
                <form className={classes.form} onSubmit={onSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        placeholder="Enter name"
                        register={register}
                    />
                    <TextField
                        label="Phone Number"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        register={register}
                    />
                    <TextField
                        label="Email ID"
                        name="email"
                        placeholder="Enter mail id"
                        register={register}
                    />
                    <TextField
                        label="Date Of Joining"
                        name="dateOfJoining"
                        placeholder="Enter date of joining"
                        register={register}
                    />
                    <TextField
                        label="Role"
                        name="role"
                        placeholder="Enter role"
                        register={register}
                    />
                    <TextField
                        label="Job Position"
                        name="jobPosition"
                        placeholder="Enter job position"
                        register={register}
                    />
                    <TextField
                        label="Branch"
                        name="branch"
                        placeholder="Enter branch"
                        register={register}
                    />
                    <Button type="submit" color="primary" variant="contained" size="large">
                        Add New Employee
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Employees;
