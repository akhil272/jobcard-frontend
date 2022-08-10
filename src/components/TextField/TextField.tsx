import {
    FormControl,
    FormLabel,
    Grid,
    InputAdornment,
    TextField as TextFieldComponent,
    Typography,
} from '@material-ui/core';
import { UseFormMethods } from 'react-hook-form';

import styles from './styles';

type TextFieldProps = Partial<Pick<UseFormMethods, 'register' | 'errors'>> & {
    name: string;
    placeholder?: string;
    suffix?: string;
    error?: string;
    defaultValue?: string;
    label?: string;
    disabled?: boolean;
};

const TextField = ({
    name,
    placeholder,
    suffix,
    register,
    error,
    label,
    defaultValue,
    disabled,
}: TextFieldProps) => {
    const classes = styles();

    return (
        <FormControl className={classes.formControl} disabled={disabled} error={!!error}>
            <Grid item>
                <FormLabel>{label}</FormLabel>
            </Grid>
            <Grid>
                <TextFieldComponent
                    size="small"
                    variant="outlined"
                    color="primary"
                    inputRef={register}
                    name={name}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    fullWidth
                    error={!!error}
                    helperText={error}
                    disabled={disabled}
                    InputProps={{
                        endAdornment: suffix && (
                            <InputAdornment position="end">
                                <Typography className={classes.endAdornmentText}>
                                    {suffix}
                                </Typography>
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        </FormControl>
    );
};

export default TextField;
